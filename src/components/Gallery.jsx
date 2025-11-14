import React from "react";
import useProducts from "../hooks/useProducts";

export default function Gallery() {
  const { products, loading } = useProducts();

  if (loading)
    return (
      <div className="p-6 text-center text-xl font-medium animate-pulse">
        Loading gallery...
      </div>
    );

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Product Gallery</h2>

      <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        {products.map((p) => (
          <div
            key={p.id}
            className="rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-all duration-300 cursor-pointer"
          >
            <img
              src={p.image}
              alt={p.name}
              className="w-full h-40 object-cover hover:scale-105 transition-all duration-300"
            />

            <div className="p-3">
              <div className="font-semibold text-lg">{p.name}</div>
              <div className="text-sm text-gray-600 mt-1">₹{p.price}</div>

              <button className="w-full mt-3 bg-green-600 text-white py-1.5 rounded-lg text-sm hover:bg-green-700 transition">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
