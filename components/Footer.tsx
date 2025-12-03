"use client";

import { motion } from "motion/react";
import { Sparkles, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer id="contact" className="bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white pt-20 pb-10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-zinc-900" />
              </div>
              <span className="tracking-wide font-semibold">GoldTest Lab</span>
            </div>
            <p className="text-zinc-400 mb-6">
              Your trusted partner in precision gold testing and quality assurance. Certified, accurate, and reliable.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-white/5 hover:bg-[#D4AF37]/20 rounded-lg flex items-center justify-center border border-white/10 hover:border-[#D4AF37]/30 transition-all duration-300"
                >
                  <Icon className="w-5 h-5 text-zinc-400 hover:text-[#D4AF37]" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-white mb-6 font-semibold">Services</h3>
            <ul className="space-y-3">
              {[
                "Gold Purity Testing",
                "XRF Analysis",
                "Jewelry Verification",
                "Lab Certification",
                "Precious Metal Testing",
                "Consultation Services",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-zinc-400 hover:text-[#D4AF37] transition-colors flex items-center gap-2"
                  >
                    <div className="w-1 h-1 bg-[#D4AF37] rounded-full" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="text-white mb-6 font-semibold">Support</h3>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "#about-us" },
                { label: "FAQ", href: "#" },
                { label: "Testing Process", href: "#process" },
                { label: "Pricing", href: "#" },
                { label: "Certifications", href: "#" },
                { label: "Privacy Policy", href: "#" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-zinc-400 hover:text-[#D4AF37] transition-colors flex items-center gap-2"
                  >
                    <div className="w-1 h-1 bg-[#D4AF37] rounded-full" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-white mb-6 font-semibold">Contact Us</h3>
            <div className="space-y-4 mb-6">
              <a
                href="tel:+1234567890"
                className="flex items-center gap-3 text-zinc-400 hover:text-[#D4AF37] transition-colors"
              >
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <span>+1 (234) 567-890</span>
              </a>
              <a
                href="mailto:info@goldtestlab.com"
                className="flex items-center gap-3 text-zinc-400 hover:text-[#D4AF37] transition-colors"
              >
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <span>info@goldtestlab.com</span>
              </a>
              <div className="flex items-start gap-3 text-zinc-400">
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <span>123 Laboratory Street,<br />Tech City, TC 12345</span>
              </div>
            </div>

            {/* WhatsApp Button */}
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white border-0 rounded-xl">
              <Phone className="w-4 h-4 mr-2" />
              WhatsApp Us
            </Button>
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-12 mb-12"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-white mb-3 text-xl font-semibold">Stay Updated</h3>
            <p className="text-zinc-400 mb-6">
              Subscribe to our newsletter for gold market insights and testing tips
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/5 border-white/10 text-white placeholder:text-zinc-500 rounded-xl h-12 focus:ring-[#D4AF37] focus:border-[#D4AF37]"
              />
              <Button className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] hover:from-[#FFD700] hover:to-[#D4AF37] text-zinc-900 border-0 rounded-xl px-6">
                Subscribe
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Certifications/Partners */}
        <div className="border-t border-white/10 pt-12 mb-12">
          <div className="text-center mb-6">
            <span className="text-zinc-500">Certified & Accredited By</span>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {["ISO 9001:2015", "NABL Accredited", "BIS Certified", "Lab Quality Plus"].map((cert) => (
              <div
                key={cert}
                className="px-6 py-3 bg-white/5 rounded-xl border border-white/10 text-zinc-400 hover:border-[#D4AF37]/30 transition-colors"
              >
                {cert}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-500">
              © 2025 GoldTest Lab. All rights reserved.
            </p>
            <div className="flex gap-6 text-zinc-500">
              <a href="#" className="hover:text-[#D4AF37] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-[#D4AF37] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#D4AF37] transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
    </footer>
  );
}

