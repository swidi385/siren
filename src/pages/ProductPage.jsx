import React, { useState } from 'react';
import ProductModal from '../components/ProductModal';

function ProductPage() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const products = [
    { id: 1, name: 'Beginner Tennis Package', description: 'Perfect for those new to tennis.' },
    { id: 2, name: 'Intermediate Tennis Package', description: 'For those with basic tennis skills.' },
    { id: 3, name: 'Advanced Tennis Package', description: 'Ideal for experienced players.' },
  ];

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  return (
    <section className="py-20 px-4">
      <h2 className="text-3xl font-bold text-center text-primary">Our Product Packages</h2>
      <div className="flex flex-wrap justify-center mt-10">
        {products.map((product) => (
          <div key={product.id} className="max-w-sm bg-white shadow-lg rounded-lg p-6 m-4 text-center">
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="mt-2">{product.description}</p>
            <button
              onClick={() => openModal(product)}
              className="mt-4 px-4 py-2 bg-yellow-500 text-white font-semibold rounded-lg"
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {isModalOpen && selectedProduct && (
        <ProductModal product={selectedProduct} closeModal={closeModal} />
      )}
    </section>
  );
}

export default ProductPage;
