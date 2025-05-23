
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-green-400">PrazoCerto</span>
            </div>
            <p className="text-gray-400 mb-4">
              Conectando pessoas a alimentos frescos com preços acessíveis, 
              reduzindo o desperdício e promovendo sustentabilidade.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-green-400 cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-green-400 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-green-400 cursor-pointer transition-colors" />
            </div>
          </div>
          
          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-green-400 transition-colors">Como Funciona</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Produtos</a></li>
            </ul>
          </div>
          
          {/* Suporte */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Suporte</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-green-400 transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Contato</a></li>
            </ul>
          </div>
          
          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-green-400" />
                <span>São Paulo, SP - Brasil</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-green-400" />
                <span>(11) 9999-9999</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-green-400" />
                <span>contato@prazocerto.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 PrazoCerto. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
