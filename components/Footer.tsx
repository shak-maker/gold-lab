"use client";

import { motion } from "motion/react";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer id="contact" className="bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white pt-20 pb-10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              {/* YMCT Logo Symbol */}
              <div className="w-12 h-12 flex items-center justify-center">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Outer Circle */}
                  <circle cx="24" cy="24" r="22" stroke="#fa9906" strokeWidth="2" fill="none" />
                  {/* Outer Diamond (rotated square outline) */}
                  <path d="M24 6 L38 24 L24 42 L10 24 Z" stroke="#fa9906" strokeWidth="2" fill="none" />
                  {/* Inner Diamond (rotated square filled) */}
                  <path d="M24 12 L32 24 L24 36 L16 24 Z" fill="#fa9906" />
                </svg>
              </div>
              {/* YMCT Text */}
              <span 
                className="text-[#fa9906] tracking-wide font-bold text-xl"
                style={{
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5), 1px 1px 2px rgba(255, 102, 0, 0.3)"
                }}
              >
                YMCT
              </span>
            </div>
            <p className="text-zinc-400 mb-6">
Алт хайлж гулдмайлах, сорьц тогтоох шинжилгээний таны найдвартай түнш.
            </p>
            <div className="flex gap-3">
              {[Facebook].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-white/5 hover:bg-[#fa9906]/20 rounded-lg flex items-center justify-center border border-white/10 hover:border-[#fa9906]/30 transition-all duration-300"
                >
                  <Icon className="w-7 h-7 text-zinc-400 hover:text-[#fa9906]" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-white mb-6 font-semibold">Үйлчилгээ</h3>
            <ul className="space-y-3">
              {[
                { label: "Алтны сорьцийн шинжилгээ", href: "#services" },
                { label: "Лабораторийн баталгаажуулалт", href: "#services" },
                { label: "Үнэт металлын сорьцийн шинжилгээ", href: "#services" },
                { label: "Зөвлөх үйлчилгээ", href: "#services" },
              ].map((service) => (
                <li key={service.label}>
                  <a
                    href={service.href}
                    className="text-zinc-400 hover:text-[#fa9906] transition-colors flex items-center gap-2"
                  >
                    <div className="w-1 h-1 bg-[#fa9906] rounded-full" />
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="text-white mb-6 font-semibold">Дэмжлэг</h3>
            <ul className="space-y-3">
              {[
                { label: "Бидний тухай", href: "#about-us" },
                { label: "Түгээмэл асуулт", href: "#faq" },
                { label: "Шинжилгээний үйл явц", href: "#process" },
                { label: "Үнэ", href: "/ҮЙЛЧИЛГЭЭНИЙ ҮНЭ ТАРИФ.pdf" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-zinc-400 hover:text-[#fa9906] transition-colors flex items-center gap-2"
                  >
                    <div className="w-1 h-1 bg-[#fa9906] rounded-full" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-white mb-6 font-semibold">Холбоо барих</h3>
            <div className="space-y-4 mb-6">
              <a
                href="tel:+1234567890"
                className="flex items-center gap-3 text-zinc-400 hover:text-[#fa9906] transition-colors"
              >
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <span>99020319, 88010600</span>
              </a>
              <a
                href="mailto:info@goldtestlab.com"
                className="flex items-center gap-3 text-zinc-400 hover:text-[#fa9906] transition-colors"
              >
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <span>assaylabmon@gmail.com</span>
              </a>
              <a
                href="https://maps.app.goo.gl/YKHkwZRGEXD5dSz16"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-zinc-400 hover:text-[#fa9906] transition-colors"
              >
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <span>Хан-Уул дүүргийн 3-р хороо, Үйлдвэрийн баруун бүс
                17070 82 тоот. Тайгер цогцолборын В1 давхар.</span>
              </a>
            </div>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-500">
              © 2025 YMCT. Бүх эрх хуулиар хамгаалагдсан.
            </p>
            <p className="text-zinc-500 text-sm">
              Хөгжүүлсэн:{" "}
              <a
                href="https://www.gobitech.dev/mn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#fa9906] hover:text-[#FFD700] transition-colors"
              >
                Gobitech
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#fa9906] to-transparent" />
    </footer>
  );
}

