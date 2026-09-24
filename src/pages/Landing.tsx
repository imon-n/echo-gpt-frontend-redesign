import Hero from "../components/landing/Hero";
import Features from "../components/landing/Features";
import ModelShowcase from "../components/landing/ModelShowcase";
import ExtensionPreview from "../components/landing/ExtensionPreview";
import WhyEchoGPT from "../components/landing/WhyEchoGPT";
import FAQ from "../components/landing/FAQ";
import CTA from "../components/landing/CTA";

export default function Landing() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main>
        <Hero />
        <ModelShowcase />
        <Features />
        <ExtensionPreview />
        <WhyEchoGPT />
        <FAQ />
        <CTA />
      </main>
    </div>
  );
}
