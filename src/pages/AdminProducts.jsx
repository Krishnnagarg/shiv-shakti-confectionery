import { useEffect, useState } from "react";

export default function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: "",
    price: "",
    image: "",
    description: "",
  });

  const loadProducts = async () => {
    const res = await fetch("http://localhost:5000/api/products");
    const data = await res.json();
    setProducts(data);
  };

  const addProduct = async () => {
    await fetch("http://localhost:5000/api/products/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    loadProducts();
    setForm({ name: "", price: "", image: "", description: "" });
  };

  const deleteProduct = async (id) => {
    await fetch(`http://localhost:5000/api/products/${id}`, {
      method: "DELETE",
    });
    loadProducts();
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Admin Product Management</h2>

      {/* ADD PRODUCT FORM */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mb-4">
        <input
          placeholder="Name"
          className="border p-2"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          placeholder="Price"
          className="border p-2"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />
        <input
          placeholder="Image URL"
          className="border p-2"
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
        />
        <input
          placeholder="Description"
          className="border p-2"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
      </div>

      <button className="bg-blue-600 text-white px-4 py-2 mb-6" onClick={addProduct}>
        Add Product
      </button>

      {/* EXISTING PRODUCTS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((p) => (
          <div key={p._id} className="border p-2 rounded">
            <img src={p.image} className="w-full h-32 object-cover" />
            <h3 className="font-bold">{p.name}</h3>
            <p>₹{p.price}</p>

            <button
              className="bg-red-500 text-white px-3 py-1 mt-2"
              onClick={() => deleteProduct(p._id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
