
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-green-50 to-orange-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Alimentos frescos,
              <span className="text-green-600"> preços incríveis</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Descubra produtos de qualidade próximos ao vencimento com até 70% de desconto. 
              Economize dinheiro e ajude a reduzir o desperdício de alimentos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3">
                Explorar Ofertas
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                Saiba Mais
              </Button>
            </div>
            <div className="mt-8 flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span>+1000 produtos salvos</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
                <span>200+ parceiros</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🥕</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Economia Inteligente</h3>
                <p className="text-gray-600 text-sm">
                  Produtos frescos com desconto por estarem próximos ao vencimento
                </p>
                <div className="mt-4 bg-red-100 text-red-800 text-xs font-medium px-3 py-1 rounded-full inline-block">
                  Vence em 2 dias - 60% OFF
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
