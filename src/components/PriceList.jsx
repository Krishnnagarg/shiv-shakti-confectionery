import React from "react";
import useProducts from "../hooks/useProducts";

export default function PriceList() {
  const { products, loading } = useProducts();
  if (loading) return <div className="p-6">Loading price list...</div>;
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Price List</h2>
      <div className="divide-y">
        {products.map((p) => (
          <div key={p.id} className="py-3 flex justify-between">
            <div>
              <div className="font-medium">{p.name}</div>
              <div className="text-sm text-gray-500">{p.description}</div>
            </div>
            <div className="text-right">
              <div className="font-semibold">₹{p.price}</div>
              <div className="text-sm text-gray-500">{p.available ? "Available" : "Out of stock"}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
