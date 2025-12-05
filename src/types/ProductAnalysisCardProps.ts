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
  aiScamScore?: number;
  riskLabel?: string;
  productLink?: string;
};