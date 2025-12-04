import { NextResponse } from "next/server";
import { chromium, devices } from "playwright";

export const maxDuration = 60; // Vercel/Prod-safe timeout

export async function POST(req: Request) {
  const { url } = await req.json();

  if (!url)
    return NextResponse.json({ error: "URL is required" }, { status: 400 });

  let browser;
  try {
    browser = await chromium.launch({ headless: true });

    const context = await browser.newContext({
      userAgent:
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36",
      viewport: { width: 1280, height: 720 },
      javaScriptEnabled: true,
    });

    const page = await context.newPage();

    // ❗ Flipkart blocks empty pages — so wait for DOM
    await page.goto(url, {
      waitUntil: "domcontentloaded",
      timeout: 30000,
    });

    // Fallback: sometimes Flipkart loads data slowly
    await page.waitForTimeout(2000);

    // Helper functions executed inside browser
    const scrape = await page.evaluate(() => {
      const txt = (sel: string) =>
        document.querySelector(sel)?.textContent?.trim() || null;

      const attr = (sel: string, key: string) =>
        document.querySelector(sel)?.getAttribute(key) || null;

      return {
        title: txt("span.B_NuCI"),
        currentPrice: txt("div._30jeq3._16Jk6d"),
        crossedPrice: txt("div._3I9_wc"),
        rating: txt("div._3LWZlK"),
        reviewCount: txt("span._2_R_DZ span:nth-child(2)"),
        imageUrl:
          attr("img._396cs4._2amPTt._3qGmMb", "src") ||
          attr("img._396cs4", "src") ||
          null,
      };
    });

    // EXTRA: retry with mobile browser if desktop fails
    if (!scrape.title) {
      const mobileContext = await browser.newContext({
        ...devices["iPhone 12"],
      });
      const mobilePage = await mobileContext.newPage();

      await mobilePage.goto(url, {
        waitUntil: "domcontentloaded",
        timeout: 30000,
      });

      await mobilePage.waitForTimeout(2000);

      const mobileScrape = await mobilePage.evaluate(() => {
        const txt = (sel: string) =>
          document.querySelector(sel)?.textContent?.trim() || null;

        const attr = (sel: string, key: string) =>
          document.querySelector(sel)?.getAttribute(key) || null;

        return {
          title: txt("span.B_NuCI"),
          currentPrice: txt("div._30jeq3._16Jk6d"),
          crossedPrice: txt("div._3I9_wc"),
          rating: txt("div._3LWZlK"),
          reviewCount: txt("span._2_R_DZ span:nth-child(2)"),
          imageUrl:
            attr("img._2r_T1I", "src") ||
            attr("img._396cs4", "src") ||
            null,
        };
      });

      await mobileContext.close();
      return NextResponse.json({ success: true, data: mobileScrape });
    }

    return NextResponse.json({ success: true, data: scrape });
  } catch (error) {
    console.error("Scraper Error:", error);
    return NextResponse.json(
      { success: false, error: "Scraper failed on server." },
      { status: 500 }
    );
  } finally {
    browser?.close();
  }
}
