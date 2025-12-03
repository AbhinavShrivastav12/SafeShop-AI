export interface Product {
  title: string;
  price: string;
  image: string;
  seller: string;
  rating: number;
}

export interface Alternative {
  title: string;
  price: string;
  link: string;
  image: string;
}

export interface ScanResult {
  product: Product;
  scamRisk: number;
  fakeReviewProbability: number;
  qualityScore: number;
  reasoning: string;
  alternatives: Alternative[];
}
