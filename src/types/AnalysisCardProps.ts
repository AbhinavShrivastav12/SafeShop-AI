export interface AnalysisCardProps {
  reviewScore?: number; // 0-100%
  repeatedReviewPct?: number;
  repeatedPatterns?: string[];
  sellerTrust?: string;
  sellerAge?: string;
  complaintHistory?: string;
  refundRate?: string;
  deliveryIssues?: string;
  productQualityScore?: number; // 0-10
  qualityNotes?: string[];
}