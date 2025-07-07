import React, { useState } from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Send } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-orange-400">DOTLES</h2>
            <p className="text-blue-200 leading-relaxed">
              Empowering students and educational institutions with expert guidance 
              and innovative solutions for academic and career success.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-blue-800 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-all duration-200 transform hover:scale-110"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <nav className="space-y-3">
              <a href="#about" className="block text-blue-200 hover:text-orange-400 transition-colors duration-200">
                About Us
              </a>
              <a href="#services" className="block text-blue-200 hover:text-orange-400 transition-colors duration-200">
                Services
              </a>
              <a href="#team" className="block text-blue-200 hover:text-orange-400 transition-colors duration-200">
                Our Team
              </a>
              <a href="#contact" className="block text-blue-200 hover:text-orange-400 transition-colors duration-200">
                Contact Us
              </a>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Stay Updated</h3>
            <p className="text-blue-200">
              Subscribe to our newsletter for the latest educational insights and updates.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-blue-800 border border-blue-700 rounded-l-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-blue-300"
                  required
                />
                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 px-4 py-3 rounded-r-lg transition-colors duration-200"
                >
                  <Send size={20} />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800 mt-12 pt-8 text-center">
          <p className="text-blue-200">
            © 2025 DOTLES. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;