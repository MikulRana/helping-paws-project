import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-healing-blue to-caring-green rounded-full"></div>
            <span className="text-xl font-bold text-foreground">Paws & Wheels</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-healing-blue transition-colors"
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('devices')}
              className="text-foreground hover:text-healing-blue transition-colors"
            >
              Devices
            </button>
            <button 
              onClick={() => scrollToSection('stories')}
              className="text-foreground hover:text-healing-blue transition-colors"
            >
              Success Stories
            </button>
            <button 
              onClick={() => scrollToSection('donate')}
              className="text-foreground hover:text-healing-blue transition-colors"
            >
              Donate
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-healing-blue transition-colors"
            >
              Contact
            </button>
            <Button 
              variant="caring" 
              onClick={() => scrollToSection('request')}
            >
              Request Device
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;