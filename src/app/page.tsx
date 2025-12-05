import AboutUs from "@/components/Section/AboutUs";
import Features from "@/components/Section/Feaatures";
import HowItWorks from "@/components/Section/HowItWorks";
import TopSection from "@/components/Section/TopSection";

export default function HomePage() {
  return (
    <>
    <TopSection/>
    <div id="how-it-works">
      <HowItWorks/>
    </div>
    <div id="feature">
      <Features />
    </div>
    <div id="about-us">
       <AboutUs/>
    </div>
    </>
  );
}
