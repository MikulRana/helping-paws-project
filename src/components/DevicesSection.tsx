import { useState } from "react";
import { Button } from "@/components/ui/button";
import wheelchairDevice from "@/assets/wheelchair-device.jpg";
import prostheticDevice from "@/assets/prosthetic-device.jpg";
import mobilityHarness from "@/assets/mobility-harness.jpg";

const DevicesSection = () => {
  const [hoveredDevice, setHoveredDevice] = useState<string | null>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const devices = [
    {
      id: "wheelchair",
      title: "Mobility Wheelchairs",
      image: wheelchairDevice,
      description: "Custom-built wheelchairs designed for dogs with rear leg paralysis or weakness. Lightweight, durable, and adjustable to ensure comfort and mobility."
    },
    {
      id: "prosthetic",
      title: "Prosthetic Limbs",
      image: prostheticDevice,
      description: "Specially crafted prosthetic devices for dogs with amputated limbs. Each device is custom-fitted to restore natural movement and confidence."
    },
    {
      id: "harness",
      title: "Support Harnesses",
      image: mobilityHarness,
      description: "Supportive harnesses and slings for dogs recovering from surgery or dealing with temporary mobility issues. Provides stability and comfort during healing."
    }
  ];

  return (
    <section id="devices" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Assistive Devices
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-healing-blue to-caring-green mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide a range of custom assistive devices, each carefully designed and fitted 
            to meet the unique needs of every dog.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {devices.map((device) => (
            <div
              key={device.id}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredDevice(device.id)}
              onMouseLeave={() => setHoveredDevice(null)}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-gentle transition-all duration-300 group-hover:shadow-caring">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={device.image}
                    alt={device.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  
                  {/* Overlay with description */}
                  <div className={`absolute inset-0 bg-black/80 transition-opacity duration-300 ${
                    hoveredDevice === device.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="p-6 h-full flex flex-col justify-center text-white">
                      <p className="text-sm leading-relaxed mb-4">
                        {device.description}
                      </p>
                      <Button 
                        variant="caring" 
                        size="sm"
                        onClick={() => scrollToSection('request')}
                        className="self-start"
                      >
                        Request Device
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {device.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Hover to learn more
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevicesSection;