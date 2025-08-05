import { Button } from "@/components/ui/button";

const DonationSection = () => {
  return (
    <section id="donate" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Make a Difference
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-healing-blue to-caring-green mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your generous donation helps us provide free assistive devices to dogs in need. 
              Every contribution makes a real difference in a dog's life.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Donation Options */}
            <div className="bg-white rounded-2xl p-8 shadow-gentle text-center border-2 border-transparent hover:border-healing-blue transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-healing-blue to-caring-green rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">$25</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Support Materials</h3>
              <p className="text-muted-foreground mb-6">
                Helps cover the cost of materials for one assistive device component.
              </p>
              <Button variant="gentle" className="w-full">
                Donate $25
              </Button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-caring text-center border-2 border-healing-blue transform scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-healing-blue to-caring-green rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">$75</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Fund a Device</h3>
              <p className="text-muted-foreground mb-6">
                Covers the full cost of creating one custom assistive device.
              </p>
              <Button variant="caring" className="w-full">
                Donate $75
              </Button>
              <div className="mt-3">
                <span className="bg-healing-blue text-white text-xs px-3 py-1 rounded-full">Most Popular</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-gentle text-center border-2 border-transparent hover:border-healing-blue transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-healing-blue to-caring-green rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-lg">$150</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Sponsor a Dog</h3>
              <p className="text-muted-foreground mb-6">
                Sponsors a complete device plus ongoing support and adjustments.
              </p>
              <Button variant="gentle" className="w-full">
                Donate $150
              </Button>
            </div>
          </div>

          {/* Custom Amount */}
          <div className="bg-warm-neutral rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Choose Your Own Amount</h3>
            <p className="text-muted-foreground mb-6">
              Every donation, no matter the size, helps us continue our mission to help dogs in need.
            </p>
            <Button variant="caring" size="lg">
              Make a Custom Donation
            </Button>
          </div>

          {/* Impact Stats */}
          <div className="grid md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-healing-blue mb-2">250+</div>
              <p className="text-muted-foreground">Dogs Helped</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-caring-green mb-2">100%</div>
              <p className="text-muted-foreground">Free of Charge</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-healing-blue mb-2">15</div>
              <p className="text-muted-foreground">States Served</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-caring-green mb-2">98%</div>
              <p className="text-muted-foreground">Success Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;