export type ProductAnalysisCardProps = {
  title: string;
  currentPrice: string;
  crossedPrice?: string | null;
  discount?: string | null;
  rating: number|string;
  reviewCount: number;
  imageUrl: string;
  storeName?: string;
  verifiedStore?: boolean;
  productLink?: string;

   reviewScore?: number;          // 0–100
  sellerTrust?: number|string;          // 0–100
  productQualityScore?: number;  // 0–10
};

