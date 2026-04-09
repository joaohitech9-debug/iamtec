import { useState } from 'react';
import ProductModal from './ProductModal';

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  const products = [
    {
      id: 1,
      name: 'Pró Tec Silo',
      image: '/pro-tec-silo.jpg',
      description: 'Solução inovadora para preservação e proteção de grãos em silos',
      detailImage: '/pro-tec-silo-detail.png',
      fullDescription: `O Pro Tec Silo é uma solução biotecnológica avançada desenvolvida para elevar a eficiência, a segurança e o desempenho no armazenamento de grãos. Formulado com microrganismos selecionados e aditivos de alta performance, o produto atua diretamente na estabilização do ambiente dentro do silo, reduzindo a proliferação de fungos e bactérias indesejadas, minimizando perdas e preservando o valor nutricional dos grãos.

Com aplicação prática e resultados comprovados, o Pro Tec Silo contribui para um processo de armazenagem mais sustentável e previsível, garantindo maior qualidade do produto final, redução de desperdícios e proteção prolongada do estoque.

Ideal para operações que buscam inovação, confiabilidade e máximo retorno sobre a produção armazenada.`,
    },
    {
      id: 2,
      name: 'Pró Tec Fruto',
      image: '/pro-tec-fruto.jpg',
      description: 'Tecnologia avançada para conservação e qualidade de frutas',
      detailImage: '/pro-tec-fruto-detail.png',
      fullDescription: `O Pro Tec Fruto é uma solução biotecnológica desenvolvida especificamente para conservação e proteção de frutas. Com formulação inovadora baseada em microrganismos selecionados, o produto atua na preservação da qualidade, frescor e valor nutricional das frutas durante o armazenamento e transporte.

Reduz a proliferação de fungos e bactérias que causam deterioração, mantendo a integridade da casca e estendendo significativamente a vida útil do produto. Ideal para operações que buscam garantir frutas de qualidade premium, reduzir perdas pós-colheita e atender aos padrões mais rigorosos de segurança alimentar.`,
    },
  ];

  const selectedProductData = products.find((p) => p.id === selectedProduct);

  return (
    <>
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Título */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Conheça nossos produtos
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#004AAD] to-[#0367D6] mx-auto"></div>
          </div>

          {/* Grid de Produtos */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                {/* Imagem do Produto */}
                <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden bg-white flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Conteúdo */}
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {product.description}
                  </p>
                  <button
                    onClick={() => setSelectedProduct(product.id)}
                    className="mt-6 w-full bg-gradient-to-r from-[#004AAD] to-[#0367D6] text-white font-semibold py-3 px-4 rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    Saiba Mais
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProductData && (
        <ProductModal
          isOpen={selectedProduct !== null}
          onClose={() => setSelectedProduct(null)}
          product={{
            id: selectedProductData.id,
            name: selectedProductData.name,
            image: selectedProductData.detailImage,
            description: selectedProductData.fullDescription,
          }}
        />
      )}
    </>
  );
}
