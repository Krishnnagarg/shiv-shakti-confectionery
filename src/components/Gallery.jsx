import useProducts from "../hooks/useProducts";

export default function Gallery() {
  const { products, loading } = useProducts();

  if (loading) return <div className="p-6">Loading...</div>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {products.map((p) => (
        <div key={p.id} className="border rounded p-2">
          <img src={p.image} className="w-full h-32 object-cover rounded" />
          <h3 className="font-bold">{p.name}</h3>
          <p>₹{p.finalPrice}</p>
        </div>
      ))}
    </div>
  );
}
