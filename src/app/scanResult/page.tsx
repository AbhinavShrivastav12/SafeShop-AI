import ProductAnalysisCard from "@/components/ScanComponents/ProductAnalysisCard";
import RiskAnalysisReport from "@/components/Section/RiskAnalysisReport";

export default function ScanProduct() {
    const demoProduct = {
    imageUrl: "/productImage/EarPhone.jpg",
    title: "Premium Wireless Bluetooth Headphones with Active Noise Cancellation",
    price: 89.99,
    originalPrice: 149.99,
    discount: "40%",
    rating: 4.2,
    reviewCount: 9847,
    storeName: "TechGear Official Store",
    verifiedStore: true,
    aiScamScore: 30,
    riskLabel: "Low Risk",
    productLink: "https://www.amazon.com/dp/B08XYZ123",
  };
    return(
        <div> 
         <ProductAnalysisCard {...demoProduct}/>
         <RiskAnalysisReport/>
        </div>
    )
}