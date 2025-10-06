import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import DevicesSection from "@/components/DevicesSection";
import SuccessStoriesSection from "@/components/SuccessStoriesSection";
import DonationSection from "@/components/DonationSection";
import RequestSection from "@/components/RequestSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <DevicesSection />
      <SuccessStoriesSection />
      <DonationSection />
      <RequestSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
