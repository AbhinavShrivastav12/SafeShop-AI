'use client';

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import ProductAnalysisCard from "@/components/ScanComponents/ProductAnalysisCard";
import toast from "react-hot-toast";
import { ProductAnalysisCardProps } from "@/types/ProductAnalysisCardProps";

type ScrapeData = {
  title?: string | null;
  currentPrice?: string | null;
  currentPriceValue?: number | null;
  crossedPrice?: string | null;
  crossedPriceValue?: number | null;
  discount?: string | null;
  rating?: number | null;
  reviewCount?: number | null;
  imageUrl?: string | null;
  sourceUrl?: string | null;
};

export default function ScanResultPage() {
  const searchParams = useSearchParams();
  const productUrl = searchParams.get("url") ? decodeURIComponent(searchParams.get("url")!) : null;

  const [product, setProduct] = useState<ProductAnalysisCardProps | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!productUrl || !productUrl.startsWith("http")) {
      setError("Invalid product URL.");
      setLoading(false);
      return;
    }

    const fetchProduct = async () => {
      setLoading(true);
      setError(null);

      try {
        const cacheKey = `scanData-${productUrl}`;
        const saved = localStorage.getItem(cacheKey);
        if (saved) {
          setProduct(JSON.parse(saved));
          setLoading(false);
          return;
        }

        const res = await fetch("/api/scan", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ url: productUrl }),
        });

        const payload = await res.json();
        if (!payload?.success || !payload?.data) {
          throw new Error(payload?.error || "Failed to fetch product data");
        }

        const scraped: ScrapeData = payload.data;

        const formatted: ProductAnalysisCardProps = {
          title: scraped.title || "N/A",
          price: scraped.currentPrice || "0",
          originalPrice: scraped.crossedPrice || null,
          discount: scraped.discount || null,
          rating: scraped.rating ?? 0,
          reviewCount: scraped.reviewCount ?? 0,
          imageUrl: scraped.imageUrl || "/fallback.png",
          storeName: "Flipkart",
          verifiedStore: true,
          aiScamScore: 0,
          riskLabel: scraped.discount ? "Potential Deal" : "Low Risk",
          productLink: scraped.sourceUrl || productUrl,
        };

        setProduct(formatted);
        localStorage.setItem(cacheKey, JSON.stringify(formatted));
      } catch (err: any) {
        console.error(err);
        toast.error(err.message || "Something went wrong while fetching the product.");
        setError(err.message || "Failed to fetch product.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productUrl]);

  if (loading) return <p className="text-center mt-20 text-gray-700">Loading product details...</p>;
  if (error) return <p className="text-center mt-20 text-red-500">{error}</p>;
  if (!product) return <p className="text-center mt-20 text-red-500">No product data available.</p>;

  return (
    <div className="max-w-7xl mx-auto px-6">
      <ProductAnalysisCard {...product} />
    </div>
  );
}
