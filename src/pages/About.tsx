
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Leaf, Heart, DollarSign, Users, Target, Award } from "lucide-react";

const About = () => {
  const stats = [
    { number: "1000+", label: "Produtos Salvos" },
    { number: "200+", label: "Parceiros" },
    { number: "50k+", label: "Usuários Ativos" },
    { number: "70%", label: "Desconto Médio" }
  ];

  const features = [
    {
      icon: Leaf,
      title: "Sustentabilidade",
      description: "Reduzimos o desperdício de alimentos, contribuindo para um planeta mais sustentável e consciente."
    },
    {
      icon: DollarSign,
      title: "Economia Real",
      description: "Economize até 70% em produtos de qualidade próximos ao vencimento sem abrir mão da qualidade."
    },
    {
      icon: Heart,
      title: "Qualidade Garantida",
      description: "Todos os produtos são verificados e mantêm sua qualidade nutricional e sabor originais."
    },
    {
      icon: Users,
      title: "Comunidade",
      description: "Conectamos produtores, mercados e consumidores conscientes em uma rede colaborativa."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Sobre o <span className="text-green-600">PrazoCerto</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Somos uma plataforma inovadora que conecta consumidores conscientes a produtos 
              de qualidade próximos ao vencimento, promovendo economia e sustentabilidade.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-green-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Nossa Missão</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Combater o desperdício de alimentos no Brasil enquanto oferecemos 
                alternativas econômicas para famílias que buscam produtos de qualidade 
                a preços acessíveis.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Acreditamos que todos devem ter acesso a alimentos frescos e nutritivos, 
                independentemente de sua condição financeira. Ao mesmo tempo, ajudamos 
                estabelecimentos a reduzir perdas e contribuir para um mundo mais sustentável.
              </p>
            </div>
            <div className="relative">
              <div className="bg-green-100 rounded-2xl p-8">
                <Target className="w-16 h-16 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Impacto Positivo
                </h3>
                <p className="text-gray-600">
                  Mais de 30% dos alimentos produzidos no mundo são desperdiçados. 
                  Nossa plataforma já salvou toneladas de alimentos que iriam para o lixo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Por que escolher o PrazoCerto?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos uma solução completa que beneficia consumidores, 
              produtores e o meio ambiente.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
