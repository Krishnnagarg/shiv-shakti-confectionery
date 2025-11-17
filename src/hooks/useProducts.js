import { useEffect, useState } from "react";

export default function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(
          data.map((p) => ({
            id: p._id,
            name: p.name,
            price: p.price,
            discount: p.discount || 0,
            finalPrice: p.discount
              ? p.price - (p.price * p.discount) / 100
              : p.price,
            image: p.image,
            category: p.category,
            description: p.description,
            available: p.available !== false,
          }))
        );
      })
      .catch((err) => console.error("Product Fetch Error:", err))
      .finally(() => setLoading(false));
  }, []);

  return { products, loading };
}
