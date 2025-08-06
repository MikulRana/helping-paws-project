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
  console.log('Index component rendering...');
  
  return (
    <div className="min-h-screen bg-background p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Helping Paws</h1>
      <p className="text-center text-lg">Welcome to our website!</p>
      
      {/* Temporarily comment out components to isolate the issue */}
      {/* <Header />
      <HeroSection />
      <AboutSection />
      <DevicesSection />
      <SuccessStoriesSection />
      <DonationSection />
      <RequestSection />
      <ContactSection />
      <Footer /> */}
    </div>
  );
};

export default Index;
