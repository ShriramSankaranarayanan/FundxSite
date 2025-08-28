import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import WhyInvestSection from "./components/WhyInvestSection";
import FeaturesSection from "./components/FeaturesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import CallToActionSection from "./components/CallToActionSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8fcfa] font-sans flex flex-col">
      <Header />
      <HeroSection />
      <WhyInvestSection />
      <FeaturesSection />
      <TestimonialsSection />
      {/* <TeamSection /> */}
      <CallToActionSection />
      <Footer />
    </div>
  );
}
