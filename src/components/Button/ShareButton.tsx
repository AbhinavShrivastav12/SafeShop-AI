'use client'

import { IoShareSocialOutline } from "react-icons/io5";

interface ShareButtonProps {
    product?: {
        title: string;
        currentPrice?: string;
        crossedPrice?: string;
        discount?: string;
        storeName?: string;
        aiScore?: number | null;
        riskLabel?: string;
        productLink?: string;
    };
}

export default function ShareButton({ product }: ShareButtonProps) {

    const handleShare = () => {
        if (!product) return;

        // Compose message
        const message = `
Product: ${product.title}
Price: ${product.currentPrice || "N/A"} ${product.crossedPrice ? `(Was ${product.crossedPrice})` : ""}
Discount: ${product.discount || "N/A"}
Store: ${product.storeName || "N/A"}
AI Scam Score: ${product.aiScore !== null ? product.aiScore + "%" : "N/A"} (${product.riskLabel || "N/A"})
Link: ${product.productLink || "N/A"}
        `;

        // Encode for URL
        const encodedMessage = encodeURIComponent(message);

        // WhatsApp
        const whatsappUrl = `https://api.whatsapp.com/send?text=${encodedMessage}`;

        // Facebook Share (opens share dialog with link)
        const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(product.productLink || "")}&quote=${encodedMessage}`;

        // Email
        const mailtoUrl = `mailto:?subject=${encodeURIComponent("Check out this product")}&body=${encodedMessage}`;

        // Show share options (simple prompt)
        const shareOption = prompt("Choose share platform: WhatsApp, Facebook, Email", "WhatsApp");
        if (!shareOption) return;

        if (shareOption.toLowerCase() === "whatsapp") window.open(whatsappUrl, "_blank");
        else if (shareOption.toLowerCase() === "facebook") window.open(facebookUrl, "_blank");
        else if (shareOption.toLowerCase() === "email") window.location.href = mailtoUrl;
        else alert("Invalid option");
    }

    return(
        <button 
            className="flex justify-center items-center md:px-6 md:py-4 md:border-2 md:border-gray-300 md:rounded-xl font-semibold text-gray-700 hover:border-blue-500 hover:text-blue-600 transition-all whitespace-nowrap"
            onClick={handleShare}
        >
            <IoShareSocialOutline className="text-xl mr-2" />
            Share
        </button>
    )
}
