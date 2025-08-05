const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Mission */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-healing-blue to-caring-green rounded-full"></div>
              <span className="text-xl font-bold">Paws & Wheels</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Providing free assistive devices to injured dogs because every pup deserves 
              a second chance at mobility and happiness.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-healing-blue-light transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-caring-green-light transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.5 12.017c0-1.943 1.574-3.517 3.517-3.517s3.517 1.574 3.517 3.517-1.574 3.516-3.517 3.516S8.5 13.96 8.5 12.017zm10.326-3.543c-.454 0-.823-.369-.823-.823s.369-.823.823-.823.823.369.823.823-.369.823-.823.823zm-2.29-2.84H7.464c-1.747 0-3.168 1.42-3.168 3.168v8.608c0 1.747 1.42 3.168 3.168 3.168h8.608c1.747 0 3.168-1.42 3.168-3.168V8.802c0-1.747-1.42-3.168-3.168-3.168z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#devices" className="text-gray-300 hover:text-white transition-colors">Our Devices</a></li>
              <li><a href="#stories" className="text-gray-300 hover:text-white transition-colors">Success Stories</a></li>
              <li><a href="#request" className="text-gray-300 hover:text-white transition-colors">Request Device</a></li>
              <li><a href="#donate" className="text-gray-300 hover:text-white transition-colors">Donate</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>info@pawsandwheels.org</li>
              <li>(555) 123-PAWS</li>
              <li>123 Compassion Street<br/>Hope City, HC 12345</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Paws & Wheels. All rights reserved. | 
            <a href="#" className="hover:text-white transition-colors"> Privacy Policy</a> | 
            <a href="#" className="hover:text-white transition-colors"> Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;