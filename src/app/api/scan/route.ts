import { NextResponse } from "next/server";
import fetch from "node-fetch";
import * as cheerio from "cheerio";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { url } = await req.json();
    if (!url) return NextResponse.json({ success: false, data: null });

    const res = await fetch(url, {
      headers: {
       "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "Accept-Language": "en-US,en;q=0.9",
    "Accept":"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      },
    });

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
        console.error(err)
      }
    });

    if (!productData) return NextResponse.json({ success: true, data: null });

    // Crossed price
    let crossedPrice: string | null = null;
    $('span').each((_, el) => {
      const text = $(el).text().trim();
      if (text.startsWith("₹") && $(el).css("text-decoration")?.includes("line-through")) {
        crossedPrice = text;
        return false; // break
      }
    });

    // Discount
    let discount: string | null = null;
    $('span').each((_, el) => {
      const text = $(el).text().trim();
      if (/(\d+)%\s*OFF/i.test(text)) {
        discount = text;
        return false;
      }
    });

    // Store name
    let storeName: string | null = null;
    const sellerText = $('._3WhJ, ._2u0jt, span:contains("Seller")').first().text().trim();
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
