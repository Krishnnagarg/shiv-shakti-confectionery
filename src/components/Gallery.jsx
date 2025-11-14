import React from "react";
import useProducts from "../hooks/useProducts";

export default function Gallery() {
  const { products, loading } = useProducts();
  if (loading) return <div className="p-6">Loading gallery...</div>;
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Product Gallery</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {products.map((p) => (
          <div key={p.id} className="rounded overflow-hidden shadow">
            <img src={p.image} alt={p.name} className="w-full h-36 object-cover" />
            <div className="p-2">
              <div className="font-medium">{p.name}</div>
              <div className="text-sm">₹{p.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
