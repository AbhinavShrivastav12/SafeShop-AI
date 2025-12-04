import ScanProductButton from "../Button/ScanProductButton";

export default function AboutUs() {
    return(
        <section className="py-24 px-6 bg-white">
            <div className="max-w-5xl mx-auto text-center space-y-8">
                <h2 className="text-5xl font-bold text-gray-900">
                    About SafeShop AI
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                    SafeShop AI was created to protect online shoppers from fake reviews, scam sellers, and low-quality products. Using advanced artificial intelligence, we analyze millions of data points to give you instant, accurate safety scores for any product you&rsquo;re considering.
                </p>
                <p className="text-xl text-gray-600 leading-relaxed">
                    Our mission is to make online shopping safer and more transparent for everyone. We believe that every shopper deserves to know the truth about what they&rsquo;re buying before they click &quot;Add to Cart.&quot;
                </p>
                <div className="pt-8">
                    <ScanProductButton title="Get in Touch" className="px-8 py-4 font-medium text-lg inline-block" />
                </div>
            </div>
        </section>
    )
}