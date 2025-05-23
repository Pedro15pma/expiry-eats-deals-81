
import { Clock, MapPin, Star, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";

interface Product {
  id: string;
  name: string;
  originalPrice: number;
  discountedPrice: number;
  discount: number;
  expiryDate: string;
  daysUntilExpiry: number;
  store: string;
  location: string;
  rating: number;
  image: string;
  category: string;
  stock: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  
  const getUrgencyColor = (days: number) => {
    if (days <= 1) return "bg-red-500";
    if (days <= 2) return "bg-orange-500";
    return "bg-yellow-500";
  };

  const getDiscountColor = (discount: number) => {
    if (discount >= 50) return "bg-red-100 text-red-800";
    if (discount >= 30) return "bg-orange-100 text-orange-800";
    return "bg-yellow-100 text-yellow-800";
  };

  const getStockColor = (stock: number) => {
    if (stock <= 5) return "text-red-600";
    if (stock <= 10) return "text-orange-600";
    return "text-green-600";
  };

  const handleAddToCart = () => {
    if (product.stock > 0) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.discountedPrice,
        image: product.image
      });
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3">
          <Badge className={`${getDiscountColor(product.discount)} font-semibold`}>
            -{product.discount}%
          </Badge>
        </div>
        <div className="absolute top-3 right-3">
          <div className={`${getUrgencyColor(product.daysUntilExpiry)} text-white text-xs font-medium px-2 py-1 rounded-full flex items-center`}>
            <Clock className="w-3 h-3 mr-1" />
            {product.daysUntilExpiry}d
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <div className="mb-2">
          <span className="text-xs text-gray-500 uppercase tracking-wide">{product.category}</span>
        </div>
        
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
        
        <div className="flex items-center mb-3">
          <MapPin className="w-4 h-4 text-gray-400 mr-1" />
          <span className="text-sm text-gray-600">{product.store}</span>
          <div className="flex items-center ml-auto">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between mb-3">
          <div>
            <span className="text-lg font-bold text-gray-900">
              R$ {product.discountedPrice.toFixed(2)}
            </span>
            <span className="text-sm text-gray-500 line-through ml-2">
              R$ {product.originalPrice.toFixed(2)}
            </span>
          </div>
        </div>

        <div className="flex items-center mb-3">
          <Package className="w-4 h-4 text-gray-400 mr-1" />
          <span className={`text-sm font-medium ${getStockColor(product.stock)}`}>
            {product.stock} em estoque
          </span>
        </div>
        
        <div className="text-xs text-gray-500 mb-3">
          Vence em: {product.expiryDate}
        </div>
        
        <Button 
          className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400"
          onClick={handleAddToCart}
          disabled={product.stock === 0}
        >
          {product.stock === 0 ? "Esgotado" : "Adicionar ao Carrinho"}
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
