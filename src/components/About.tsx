
import { Leaf, Heart, DollarSign, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Leaf,
      title: "Sustentabilidade",
      description: "Reduzimos o desperdício de alimentos, contribuindo para um planeta mais sustentável."
    },
    {
      icon: DollarSign,
      title: "Economia Real",
      description: "Economize até 70% em produtos de qualidade próximos ao vencimento."
    },
    {
      icon: Heart,
      title: "Qualidade Garantida",
      description: "Todos os produtos são verificados e mantêm sua qualidade nutricional."
    },
    {
      icon: Users,
      title: "Comunidade",
      description: "Conectamos produtores, mercados e consumidores conscientes."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Por que escolher o PrazoCerto?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos mais que um marketplace. Somos uma solução inteligente que conecta 
            quem quer economizar com quem quer evitar o desperdício.
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
        
        <div className="mt-16 bg-gradient-to-r from-green-50 to-orange-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Junte-se à Revolução Contra o Desperdício
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Mais de 30% dos alimentos produzidos no mundo são desperdiçados. 
            Seja parte da solução e faça a diferença enquanto economiza.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
              onClick={() => navigate('/products')}
            >
              Começar a Comprar
            </button>
            <button 
              className="border border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
              onClick={() => navigate('/store-registration')}
            >
              Cadastrar Minha Loja
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
