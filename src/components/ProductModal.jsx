import React from 'react';

function ProductModal({ product, closeModal }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold text-primary mb-4">{product.name}</h2>
        <p className="mb-6">
          {product.name} provides tailored tennis coaching for {product.description.toLowerCase()}.
          This package includes personalized lessons, flexibility in scheduling, and ongoing feedback
          to ensure steady progress.
        </p>
        <button
          onClick={closeModal}
          className="mt-4 px-4 py-2 bg-yellow-500 text-white font-semibold rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default ProductModal;
