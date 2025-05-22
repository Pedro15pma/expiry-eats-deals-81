
import ProductCard from "./ProductCard";

const FeaturedProducts = () => {
  const products = [
    {
      id: "1",
      name: "Pão Integral Artesanal 500g",
      originalPrice: 12.90,
      discountedPrice: 5.16,
      discount: 60,
      expiryDate: "24/12/2024",
      daysUntilExpiry: 2,
      store: "Padaria Central",
      location: "Centro - SP",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop",
      category: "Panificação"
    },
    {
      id: "2",
      name: "Mix de Vegetais Orgânicos 1kg",
      originalPrice: 18.50,
      discountedPrice: 9.25,
      discount: 50,
      expiryDate: "23/12/2024",
      daysUntilExpiry: 1,
      store: "Verde Vida Orgânicos",
      location: "Vila Madalena - SP",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=300&fit=crop",
      category: "Orgânicos"
    },
    {
      id: "3",
      name: "Iogurte Grego Natural 170g",
      originalPrice: 8.90,
      discountedPrice: 6.23,
      discount: 30,
      expiryDate: "25/12/2024",
      daysUntilExpiry: 3,
      store: "Laticínios Premium",
      location: "Jardins - SP",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1571212515416-cfac6650117b?w=400&h=300&fit=crop",
      category: "Laticínios"
    },
    {
      id: "4",
      name: "Frutas Vermelhas Mix 300g",
      originalPrice: 24.90,
      discountedPrice: 9.96,
      discount: 60,
      expiryDate: "23/12/2024",
      daysUntilExpiry: 1,
      store: "Hortifruti Premium",
      location: "Morumbi - SP",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      category: "Frutas"
    },
    {
      id: "5",
      name: "Queijo Artesanal Curado 200g",
      originalPrice: 32.00,
      discountedPrice: 19.20,
      discount: 40,
      expiryDate: "26/12/2024",
      daysUntilExpiry: 4,
      store: "Queijaria Artesanal",
      location: "Vila Olímpia - SP",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400&h=300&fit=crop",
      category: "Queijos"
    },
    {
      id: "6",
      name: "Salmão Fresco 500g",
      originalPrice: 45.00,
      discountedPrice: 22.50,
      discount: 50,
      expiryDate: "23/12/2024",
      daysUntilExpiry: 1,
      store: "Peixaria do Mar",
      location: "Ipanema - RJ",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&h=300&fit=crop",
      category: "Peixes"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Produtos em Destaque
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra as melhores ofertas de produtos frescos próximos ao vencimento. 
            Economia garantida e qualidade preservada!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
            Ver Todos os Produtos
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
