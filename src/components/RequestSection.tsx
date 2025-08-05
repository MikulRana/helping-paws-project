const RequestSection = () => {
  return (
    <section id="request" className="py-20 bg-warm-neutral">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Request a Device
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-healing-blue to-caring-green mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              If your dog needs an assistive device, we're here to help. Our application process is simple 
              and designed to gather the information we need to create the perfect solution for your furry friend. 
              All devices are provided completely free of charge.
            </p>
          </div>

          {/* Information Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-gentle">
              <h3 className="text-xl font-bold text-foreground mb-4">What We Need</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-healing-blue rounded-full mt-2 flex-shrink-0"></div>
                  <span>Veterinary assessment and recommendation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-caring-green rounded-full mt-2 flex-shrink-0"></div>
                  <span>Dog's measurements and photos</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-healing-blue rounded-full mt-2 flex-shrink-0"></div>
                  <span>Medical history and current condition</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-caring-green rounded-full mt-2 flex-shrink-0"></div>
                  <span>Contact information for follow-up</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-gentle">
              <h3 className="text-xl font-bold text-foreground mb-4">Our Process</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-healing-blue text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                  <span>Submit application with required information</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-caring-green text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                  <span>Our team reviews and approves application</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-healing-blue text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                  <span>Custom device design and manufacturing</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-caring-green text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</div>
                  <span>Free shipping and fitting support</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Form Placeholder */}
          <div className="bg-white rounded-2xl p-8 shadow-gentle">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Application Form
            </h3>
            <div className="bg-gray-100 rounded-lg p-12 text-center">
              <p className="text-muted-foreground mb-4">
                Please embed your Google Form here by replacing this placeholder with your form's embed code.
              </p>
              <div className="bg-white rounded-lg p-6 border-2 border-dashed border-gray-300">
                <p className="text-sm text-gray-500 italic">
                  [Google Form Embed Area]<br/>
                  Copy and paste your Google Form embed code here to replace this placeholder.
                </p>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Applications are typically processed within 5-7 business days. 
                We'll contact you with any questions or updates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequestSection;