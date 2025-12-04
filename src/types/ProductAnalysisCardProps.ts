export type ProductAnalysisCardProps = {
  title: string;
  price: string;
  originalPrice?: string | null;
  discount?: string | null;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  storeName?: string;
  verifiedStore?: boolean;
  aiScamScore?: number;
  riskLabel?: string;
  productLink?: string;
};