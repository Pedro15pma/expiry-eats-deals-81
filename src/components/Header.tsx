
import { ShoppingCart, User, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import CartDrawer from "./CartDrawer";
import { useCart } from "@/contexts/CartContext";
import AuthModal from "./AuthModal";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const { totalItems } = useCart();
  const navigate = useNavigate();

  // For demo purposes, track if user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // Simulating login state for demo purposes
  const handleLoginClick = () => {
    if (isLoggedIn) {
      // Log out
      setIsLoggedIn(false);
    } else {
      // Open login modal
      setAuthOpen(true);
    }
  };

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-green-600">PrazoCerto</span>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-lg mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Buscar produtos próximos ao vencimento..."
                className="pl-10 pr-4 py-2 w-full"
              />
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => navigate('/store-registration')}
            >
              Cadastrar Minha Loja
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => navigate('/comments')}
            >
              Comentários
            </Button>
            <div className="relative">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setCartOpen(true)}
                className="relative"
              >
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Button>
              <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
            </div>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={handleLoginClick}
            >
              <User className="h-5 w-5" />
            </Button>
            <Button 
              className="bg-green-600 hover:bg-green-700"
              onClick={handleLoginClick}
            >
              {isLoggedIn ? "Sair" : "Entrar"}
            </Button>
          </div>
        </div>
      </div>
      <AuthModal 
        isOpen={authOpen} 
        onClose={() => {
          setAuthOpen(false);
          // For demo purposes, assume login was successful
          setIsLoggedIn(true);
        }} 
      />
    </header>
  );
};

export default Header;
