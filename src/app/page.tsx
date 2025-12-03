import Image from "next/image";

export default function HomePage() {
  return (
    <section className="pt-28 max-w-7xl mx-auto px-8">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Paste a link. Check if it fake.
          </h1>
          <p className="text-gray-600 mb-6">
            Your AI tool for detecting fake reviews, scam sellers, and low-quality products.
          </p>

          <div className="flex flex-col md:flex-row gap-4">
            <input
              id="productUrl"
              type="text"
              placeholder="Paste product link…"
              className="flex-1 border border-gray-300 rounded-xl p-4"
            />
            <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-4 rounded-xl">
              Scan Now
            </button>
          </div>

          <div className="mt-4 text-gray-500 text-sm flex items-center gap-2">
            <span>🛒</span>
            <span>Amazon, Daraz, AliExpress, Flipkart, eBay...</span>
          </div>
        </div>

        <div className="w-full h-80 md:h-96 rounded-3xl bg-gradient-to-tr  flex items-center justify-center ">
          <Image src="/logo/vector.jpg" height={500} width={500} alt="Homepage" className="animate-float"/>
        </div>
      </div>
    </section>
  );
}
