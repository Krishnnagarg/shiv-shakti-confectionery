import React from "react";
import useProducts from "../hooks/useProducts";

export default function ProductGrid() {
  const { products, loading } = useProducts();
  if (loading) return <div className="p-6">Loading products...</div>;
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((p) => (
        <div key={p.id} className="border rounded-lg p-4 shadow">
          <img alt={p.name} src={p.image} className="w-full h-40 object-cover rounded" />
          <h3 className="mt-3 font-semibold text-lg">{p.name}</h3>
          <p className="text-sm text-gray-600">{p.description}</p>
          <div className="mt-2 flex items-center justify-between">
            <span className="font-bold">₹{p.price}</span>
            <a
              href={`https://wa.me/${process.env.REACT_APP_WHATSAPP_NUMBER}?text=${encodeURIComponent(
                `Hi, main ${p.name} order karna chahta/chahti hoon. Price: ₹${p.price}`
              )}`}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1 bg-green-600 text-white rounded"
            >
              Order
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
