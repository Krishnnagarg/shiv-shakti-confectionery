import { useEffect, useState } from "react";

export default function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = import.meta.env.VITE_SHEET_API; 
    if (!url) return;

    fetch(url)
      .then((r) => r.json())
      .then((data) => {
        setProducts(
          data.map((p, i) => ({
            id: p.ID || p.id || i,
            name: p.Name || p.name || "",
            price: p.Price || p.price || "",
            category: p.Category || p.category || "",
            image: p.Image || p.image || "",
            description: p.Description || p.description || "",
            available:
              (p.Available || p.available || "yes").toLowerCase() === "yes",
          }))
        );
      })
      .catch((e) => console.error("fetch products error", e))
      .finally(() => setLoading(false));
  }, []);

  return { products, loading };
}
