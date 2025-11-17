import React from "react";
import useProducts from "../hooks/useProducts";

export default function ProductGrid() {
  const { products, loading } = useProducts();
  const phone = import.meta.env.VITE_WHATSAPP_NUMBER;

  if (loading) return (
    <div className="p-6 text-center text-xl font-medium animate-pulse">
      Loading products...
    </div>
  );

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Our Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.filter(p => p.available).map(p => (
          <div key={p.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
            
            <img 
              src={p.image} 
              alt={p.name} 
              className="w-full h-48 object-cover hover:scale-105 transition-all duration-300"
            />

            <div className="p-4 flex flex-col justify-between h-52">

              <div>
                <h3 className="font-semibold text-lg">{p.name}</h3>
                <p className="text-gray-600 text-sm mt-1">{p.description}</p>
              </div>

              <div className="mt-3 flex items-center justify-between">
                {p.discount > 0 ? (
                  <div>
                    <span className="line-through text-gray-400 mr-2">₹{p.price}</span>
                    <span className="font-bold text-green-700">₹{p.finalPrice}</span>
                  </div>
                ) : (
                  <span className="font-bold text-green-700">₹{p.price}</span>
                )}

                <a
                  href={`https://wa.me/${phone}?text=${encodeURIComponent(
                    `Hi, I want to order: ${p.name}\nPrice: ₹${p.finalPrice}`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition"
                >
                  Order
                </a>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
