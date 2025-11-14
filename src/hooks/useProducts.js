import { useEffect, useState } from "react";

export default function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const url = process.env.REACT_APP_SHEET_API;
    if (!url) return;
    fetch(url)
      .then((r) => r.json())
      .then((data) => {
        // ensure consistent keys
        setProducts(
          data.map((p, i) => ({
            id: p.id ?? i,
            name: p.name ?? "",
            price: p.price ?? "",
            category: p.category ?? "",
            image: p.image ?? "",
            description: p.description ?? "",
            available: (p.available || "yes").toLowerCase() === "yes",
          }))
        );
      })
      .catch((e) => console.error("fetch products error", e))
      .finally(() => setLoading(false));
  }, []);
  return { products, loading };
}
