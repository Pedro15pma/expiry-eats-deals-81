
import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from "@/components/ui/sonner";

export interface CartProduct {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartContextType {
  cartItems: CartProduct[];
  totalItems: number;
  addToCart: (product: Omit<CartProduct, 'quantity'>) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartProduct[]>([]);
  const [totalItems, setTotalItems] = useState(0);

  // Carregar carrinho do localStorage quando o componente montar
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      setCartItems(parsedCart);
      setTotalItems(calculateTotalItems(parsedCart));
    }
  }, []);

  // Atualizar localStorage sempre que o carrinho mudar
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
    setTotalItems(calculateTotalItems(cartItems));
  }, [cartItems]);

  const calculateTotalItems = (items: CartProduct[]): number => {
    return items.reduce((acc, item) => acc + item.quantity, 0);
  };

  const addToCart = (product: Omit<CartProduct, 'quantity'>) => {
    setCartItems(prevItems => {
      // Verificar se o produto já está no carrinho
      const existingItemIndex = prevItems.findIndex(item => item.id === product.id);
      
      if (existingItemIndex >= 0) {
        // Se o produto já existe, aumentar a quantidade
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += 1;
        
        toast.success(`${product.name} adicionado ao carrinho`, {
          description: `Quantidade: ${updatedItems[existingItemIndex].quantity}`
        });
        
        return updatedItems;
      } else {
        // Se o produto não existe, adicionar com quantidade 1
        toast.success(`${product.name} adicionado ao carrinho`);
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId: string) => {
    setCartItems(prevItems => {
      const item = prevItems.find(item => item.id === productId);
      if (item) {
        toast.info(`${item.name} removido do carrinho`);
      }
      return prevItems.filter(item => item.id !== productId);
    });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
    toast.info('Carrinho esvaziado');
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        totalItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
