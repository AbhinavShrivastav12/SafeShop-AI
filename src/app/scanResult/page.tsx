import { Suspense } from "react";
import ProductAnalysisSkeleton from "@/components/Skeleton/ProductAnalysisSkeleton";
import ScanResultClient from "@/components/Section/ScanResultClient";

export const dynamic = 'force-dynamic'; // ensures client-only rendering

export default function ScanResultPage() {
  return (
    <Suspense fallback={<ProductAnalysisSkeleton />}>
      <ScanResultClient />
    </Suspense>
  );
}
