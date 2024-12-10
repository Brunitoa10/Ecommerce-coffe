'use client';

import { ProductType } from "@/types/product";
import { useEffect, useState } from "react";

export function useGetFeaturedProduct() {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?filters[isFeature][$eq]=true&populate=*`;
  const [result, setResult] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setResult(json.data);
        setLoading(false);
      } catch (error: any) {
        setError(error.message || "An error occurred");
        setLoading(false);
      }
    })();
  }, [url]);

  return { loading, result, error };
}
