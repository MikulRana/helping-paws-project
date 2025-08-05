const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-warm-neutral">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Our Mission
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-healing-blue to-caring-green mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At Paws & Wheels, we believe that every dog deserves a chance at mobility and happiness, 
                regardless of their physical challenges. Our nonprofit organization is dedicated to providing 
                free custom assistive devices to injured dogs in need.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Founded with love and compassion, we work closely with veterinarians, rescue organizations, 
                and pet owners to ensure that no dog is left behind due to mobility issues.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Through the generosity of our donors and the dedication of our volunteers, we've helped 
                hundreds of dogs regain their freedom to run, play, and explore the world around them.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-gentle">
              <h3 className="text-2xl font-bold text-foreground mb-6">What We Provide</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-healing-blue rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Custom wheelchairs and mobility carts</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-caring-green rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Prosthetic limbs and orthotics</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-healing-blue rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Support harnesses and slings</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-caring-green rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Ongoing support and adjustments</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;