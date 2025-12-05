'use client';

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import ProductAnalysisCard from "@/components/ScanComponents/ProductAnalysisCard";
import ProductAnalysisSkeleton from "@/components/Skeleton/ProductAnalysisSkeleton";
import toast from "react-hot-toast";
import { ProductAnalysisCardProps } from "@/types/ProductAnalysisCardProps";
import { AnalysisCardProps } from "@/types/AnalysisCardProps";
import RiskAnalysisReport from "@/components/Section/RiskAnalysisReport";

export default function ScanResultClient() {
  const searchParams = useSearchParams();
  const rawUrl = searchParams.get("url");

  let productUrl: string | null = rawUrl ? decodeURIComponent(rawUrl) : null;
  if (productUrl && productUrl.includes("%25")) {
    try { productUrl = decodeURIComponent(productUrl); } catch {}
  }

  const [product, setProduct] = useState<ProductAnalysisCardProps | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!productUrl) {
      toast.error("Invalid product URL");
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      try {
        const resProduct = await fetch(`${window.location.origin}/api/scan`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ url: productUrl }),
        });
        const productResult = await resProduct.json();

        if (!productResult.success || !productResult.data) {
          toast.error("Failed to fetch product data.");
          setLoading(false);
          return;
        }

        setProduct(productResult.data);

        const resAI = await fetch("/api/ai-score", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ product: productResult.data }),
        });

        const aiData: AnalysisCardProps = await resAI.json();
        if (!aiData) toast.error("AI analysis failed");

      } catch (err) {
        console.error(err);
        toast.error("Something went wrong!");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [productUrl]);

  if (loading) return <ProductAnalysisSkeleton />;
  if (!product) return <p className="text-center mt-20 text-red-500">No product data available.</p>;

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 pt-32 space-y-10">
      <ProductAnalysisCard product={product} />
      <div className="pt-15">
        <RiskAnalysisReport />
      </div>
    </div>
  );
}
