import { useEffect, useState } from 'react';

export function useGetFeaturedProduct() {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?filters[isFeature][$eq]=true&populate=*`;
  const [result, setResult] = useState<any[]>([]); // Cambié el tipo de resultado a un arreglo vacío
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`Error fetching products: ${res.statusText}`);
        }
        const json = await res.json();
        
        // Verifica que json.data exista y tenga productos
        if (json?.data) {
          setResult(json.data); 
        } else {
          setError("No products found.");
        }
      } catch (error: any) {
        setError(error.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { loading, result, error };
}
