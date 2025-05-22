
import React from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ open, onClose }) => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, totalItems } = useCart();

  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  if (totalItems === 0) {
    return (
      <Sheet open={open} onOpenChange={onClose}>
        <SheetContent className="w-full sm:max-w-md">
          <SheetHeader className="mb-5">
            <SheetTitle className="text-xl font-bold flex items-center">
              <ShoppingBag className="mr-2" /> Seu Carrinho
            </SheetTitle>
          </SheetHeader>
          <div className="flex flex-col items-center justify-center h-[60vh]">
            <ShoppingBag className="h-16 w-16 text-gray-300 mb-4" />
            <h3 className="text-lg font-medium text-gray-700">Seu carrinho está vazio</h3>
            <p className="text-gray-500 text-center mt-2">
              Adicione produtos com desconto para aproveitar nossas ofertas!
            </p>
            <Button className="mt-6 bg-green-600 hover:bg-green-700" onClick={onClose}>
              Continuar Comprando
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-md flex flex-col">
        <SheetHeader className="mb-5">
          <SheetTitle className="text-xl font-bold flex items-center">
            <ShoppingBag className="mr-2" /> Seu Carrinho
            <span className="ml-2 bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
              {totalItems} {totalItems === 1 ? 'item' : 'itens'}
            </span>
          </SheetTitle>
        </SheetHeader>
        
        <ScrollArea className="flex-1 pr-4">
          {cartItems.map((item) => (
            <div key={item.id} className="mb-4">
              <div className="flex gap-4">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="h-20 w-20 rounded-md object-cover" 
                />
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">{item.name}</h3>
                  <p className="text-sm text-gray-500">R$ {item.price.toFixed(2)}</p>
                  
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center border rounded-md">
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8 rounded-none" 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8 rounded-none"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="mt-2 text-right">
                <span className="font-medium">
                  Subtotal: R$ {(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
              <Separator className="my-4" />
            </div>
          ))}
        </ScrollArea>
        
        <SheetFooter className="mt-auto border-t pt-4">
          <div className="w-full">
            <div className="flex justify-between mb-2">
              <span className="font-medium">Total:</span>
              <span className="font-bold text-lg">R$ {totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex gap-2 mt-4">
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={clearCart}
              >
                Limpar Carrinho
              </Button>
              <Button className="flex-1 bg-green-600 hover:bg-green-700">
                Finalizar Compra
              </Button>
            </div>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
