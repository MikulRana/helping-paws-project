import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-dog.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Giving Every Dog a
          <span className="bg-gradient-to-r from-healing-blue-light to-caring-green-light bg-clip-text text-transparent"> Second Chance</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
          Free assistive devices for injured dogs. Because every pup deserves to run, play, and live their best life.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="caring" 
            size="lg"
            onClick={() => scrollToSection('request')}
            className="text-lg px-8 py-6"
          >
            Request a Device
          </Button>
          <Button 
            variant="gentle" 
            size="lg"
            onClick={() => scrollToSection('donate')}
            className="text-lg px-8 py-6"
          >
            Donate Today
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;