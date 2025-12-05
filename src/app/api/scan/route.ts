import { NextResponse } from "next/server";
import * as cheerio from "cheerio";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { url } = await req.json();
    if (!url) return NextResponse.json({ success: false, data: null });

    // Use ScraperAPI proxy
    const proxyUrl = `https://api.scraperapi.com?api_key=${process.env.SCRAPER_API_KEY}&url=${encodeURIComponent(url)}&country=IN`;

    const res = await fetch(proxyUrl);

    const html = await res.text();
    const $ = cheerio.load(html);

    // JSON-LD Product
    let productData: any = null;
    $('script[type="application/ld+json"]').each((_, el) => {
      try {
        const json = JSON.parse($(el).html() || "");
        if (Array.isArray(json)) {
          const product = json.find((item: any) => item["@type"] === "Product");
          if (product) productData = product;
        } else if (json["@type"] === "Product") {
          productData = json;
        }
      } catch (err) {
        console.error(err);
      }
    });

    if (!productData) {
      const title = $("span.B_NuCI").text().trim() || null;
      const price = $("div._30jeq3").first().text().trim() || null;

      if (title || price) {
        return NextResponse.json({
          success: true,
          data: {
            title,
            currentPrice: price,
            crossedPrice: null,
            discount: null,
            rating: null,
            reviewCount: null,
            storeName: null,
            imageUrl: null,
          },
        });
      }

      return NextResponse.json({ success: true, data: null });
    }

    // Crossed price
    let crossedPrice: string | null = null;
    $("span").each((_, el) => {
      const text = $(el).text().trim();
      if (
        text.startsWith("₹") &&
        $(el).attr("style")?.includes("line-through")
      ) {
        crossedPrice = text;
        return false;
      }
    });

    // Discount
    let discount: string | null = null;
    $("span").each((_, el) => {
      const text = $(el).text().trim();
      if (/(\d+)%\s*OFF/i.test(text)) {
        discount = text;
        return false;
      }
    });

    // Store name
    let storeName: string | null = null;
    const sellerText = $('._3WhJ, ._2u0jt, span:contains("Seller")')
      .first()
      .text()
      .trim();
    if (sellerText) storeName = sellerText.replace(/Sold by\s*/i, "") || null;

    const data = {
      title: productData.name ?? null,
      imageUrl: productData.image ?? null,
      rating: productData.aggregateRating?.ratingValue?.toString() ?? null,
      reviewCount: productData.aggregateRating?.reviewCount?.toString() ?? null,
      currentPrice: productData.offers?.price
        ? `₹${productData.offers.price}`
        : null,
      crossedPrice,
      discount,
      storeName,
    };

    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, data: null });
  }
}
