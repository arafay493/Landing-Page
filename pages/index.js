import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Section1 from "@/components/Section1";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlideShow from "@/components/SlideShow";
import FeaturesSection from "@/components/FeaturesSection";
import MetricsSection from "@/components/MetricsSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import HeroSectionV2 from "@/components/HeroSectionV2";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="bg-[#f8f9ff]">
      <div className="p-5 md:p-10 ">
        <Header />
        <Section1 />
        <SlideShow />
        <FeaturesSection />
        <MetricsSection />
        <HeroSectionV2 />
        <TestimonialsSection />
        <PricingSection />
        <TeamSection />
        <HeroSection />
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}
