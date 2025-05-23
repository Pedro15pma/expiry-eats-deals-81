
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

const Products = () => {
  const allProducts = [
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
      category: "Panificação",
      stock: 15
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
      category: "Orgânicos",
      stock: 8
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
      category: "Laticínios",
      stock: 22
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
      image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400&h=300&fit=crop",
      category: "Frutas",
      stock: 12
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
      category: "Queijos",
      stock: 6
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
      category: "Peixes",
      stock: 4
    },
    {
      id: "7",
      name: "Banana Prata Orgânica 1kg",
      originalPrice: 8.90,
      discountedPrice: 4.45,
      discount: 50,
      expiryDate: "24/12/2024",
      daysUntilExpiry: 2,
      store: "Frutas & Cia",
      location: "Liberdade - SP",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop",
      category: "Frutas",
      stock: 30
    },
    {
      id: "8",
      name: "Croissant Francês 6 unidades",
      originalPrice: 15.90,
      discountedPrice: 7.95,
      discount: 50,
      expiryDate: "23/12/2024",
      daysUntilExpiry: 1,
      store: "Boulangerie Artesanal",
      location: "Itaim - SP",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1555507036-ab794f4afe5c?w=400&h=300&fit=crop",
      category: "Panificação",
      stock: 18
    },
    {
      id: "9",
      name: "Leite Integral Orgânico 1L",
      originalPrice: 12.50,
      discountedPrice: 6.25,
      discount: 50,
      expiryDate: "25/12/2024",
      daysUntilExpiry: 3,
      store: "Fazenda Verde",
      location: "Campo Belo - SP",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&h=300&fit=crop",
      category: "Laticínios",
      stock: 25
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Todos os Produtos
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Encontre as melhores ofertas de produtos frescos próximos ao vencimento. 
              Economia garantida e qualidade preservada!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Products;
