import { X } from 'lucide-react';

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    id: number;
    name: string;
    image: string;
    description: string;
  };
}

export default function ProductModal({ isOpen, onClose, product }: ProductModalProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 overflow-y-auto pt-20 sm:pt-24">
        <div
          className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full transform transition-all duration-300"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header com botão de fechar */}
          <div className="flex items-center justify-between p-6 sm:p-8 border-b border-gray-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              {product.name}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition-colors p-2 hover:bg-gray-100 rounded-lg"
            >
              <X size={24} />
            </button>
          </div>

          {/* Conteúdo */}
          <div className="p-6 sm:p-8">
            {/* Imagem */}
            <div className="mb-6 sm:mb-8">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto rounded-xl object-cover max-h-96"
              />
            </div>

            {/* Descrição */}
            <div className="space-y-4">
              <div className="text-gray-700 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                {product.description}
              </div>
            </div>
          </div>

          {/* Footer com botão de ação */}
          <div className="flex gap-4 p-6 sm:p-8 border-t border-gray-200 bg-gray-50 rounded-b-2xl">
            <button
              onClick={onClose}
              className="flex-1 bg-[#E5E5E5] hover:bg-[#D0D0D0] text-[#001F5C] font-semibold py-3 px-4 rounded-lg transition-all duration-300"
            >
              Fechar
            </button>
            <a
              href={`https://wa.me/5563984455036?text=Olá%20Raphael!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20o%20produto%20${product.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gradient-to-r from-[#002147] to-[#001F5C] hover:shadow-lg text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 text-center"
            >
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
