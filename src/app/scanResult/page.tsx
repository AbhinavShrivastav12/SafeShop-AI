'use client'

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import ProductAnalysisCard, { ProductData } from "@/components/ScanComponents/ProductAnalysisCard";
import toast from "react-hot-toast";
import RiskAnalysisReport from "@/components/Section/RiskAnalysisReport";

export default function ScanResultPage() {
  const searchParams = useSearchParams();
  const rawUrl = searchParams.get("url"); // get ?url=...
  
  // Decode URL safely (handle double encoding)
  let productUrl: string | null = rawUrl ? decodeURIComponent(rawUrl) : null;
  if (productUrl && productUrl.includes("%25")) {
    try { productUrl = decodeURIComponent(productUrl); } catch { }
  }

  const [product, setProduct] = useState<ProductData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!productUrl) {
      setLoading(false);
      toast.error("Invalid product URL");
      return;
    }

    const fetchProduct = async () => {
      try {
        const res = await fetch("/api/scan", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ url: productUrl }),
        });

        const result = await res.json();

        if (!result.success || !result.data) {
          toast.error("Could not fetch product data.");
          setLoading(false);
          return;
        }

        const d = result.data;

        setProduct({
          title: d.title || "No title",
          currentPrice: d.currentPrice || "N/A",
          crossedPrice: d.crossedPrice || "—",
          discount: d.discount || "—",
          rating: d.rating || "0",
          reviewCount: d.reviewCount || "0",
          imageUrl: d.imageUrl || "/fallback.png",
          storeName: d.storeName || "Unknown Seller",
          productLink: productUrl,
        });
      } catch (err) {
        console.error(err);
        toast.error("Something went wrong!");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productUrl]);

  if (loading) return <p className="text-center mt-20 text-gray-700">Loading product…</p>;
  if (!product) return <p className="text-center mt-20 text-red-500">No product data available.</p>;

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 pt-32">
      <ProductAnalysisCard product={product} />
     <div className="pt-15"> <RiskAnalysisReport/></div>
    </div>
  );
}
