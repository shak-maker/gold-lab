"use client";

import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

export function HeroSection() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
      {/* Abstract Gold Molecular Structure Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#FFD700" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          
          {/* Molecular nodes */}
          <circle cx="200" cy="150" r="8" fill="url(#goldGradient)" />
          <circle cx="350" cy="200" r="8" fill="url(#goldGradient)" />
          <circle cx="500" cy="180" r="8" fill="url(#goldGradient)" />
          <circle cx="650" cy="250" r="8" fill="url(#goldGradient)" />
          <circle cx="800" cy="200" r="8" fill="url(#goldGradient)" />
          <circle cx="950" cy="280" r="8" fill="url(#goldGradient)" />
          <circle cx="300" cy="350" r="8" fill="url(#goldGradient)" />
          <circle cx="450" cy="400" r="8" fill="url(#goldGradient)" />
          <circle cx="600" cy="380" r="8" fill="url(#goldGradient)" />
          <circle cx="750" cy="450" r="8" fill="url(#goldGradient)" />
          
          {/* Connection lines */}
          <line x1="200" y1="150" x2="350" y2="200" stroke="url(#goldGradient)" strokeWidth="2" />
          <line x1="350" y1="200" x2="500" y2="180" stroke="url(#goldGradient)" strokeWidth="2" />
          <line x1="500" y1="180" x2="650" y2="250" stroke="url(#goldGradient)" strokeWidth="2" />
          <line x1="650" y1="250" x2="800" y2="200" stroke="url(#goldGradient)" strokeWidth="2" />
          <line x1="800" y1="200" x2="950" y2="280" stroke="url(#goldGradient)" strokeWidth="2" />
          <line x1="300" y1="350" x2="450" y2="400" stroke="url(#goldGradient)" strokeWidth="2" />
          <line x1="450" y1="400" x2="600" y2="380" stroke="url(#goldGradient)" strokeWidth="2" />
          <line x1="600" y1="380" x2="750" y2="450" stroke="url(#goldGradient)" strokeWidth="2" />
          <line x1="350" y1="200" x2="300" y2="350" stroke="url(#goldGradient)" strokeWidth="2" />
          <line x1="500" y1="180" x2="450" y2="400" stroke="url(#goldGradient)" strokeWidth="2" />
        </svg>
      </div>

      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-[#D4AF37] rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: particle.delay,
          }}
        />
      ))}

      {/* Navigation */}
      <nav className="relative z-20 px-6 py-6 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-lg flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-zinc-900" />
            </div>
            <span className="text-white tracking-wide">GoldTest Lab</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-zinc-300">
            <a href="#services" className="hover:text-[#D4AF37] transition-colors">Services</a>
            <a href="#process" className="hover:text-[#D4AF37] transition-colors">Process</a>
            <a href="#about-us" className="hover:text-[#D4AF37] transition-colors">About</a>
            <a href="#contact" className="hover:text-[#D4AF37] transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full text-[#D4AF37] backdrop-blur-sm">
                Certified Gold Testing Laboratory
              </span>
            </motion.div>

            <h1 className="text-white mb-6 text-5xl md:text-6xl font-bold">
              Precision Gold Testing You Can Trust
            </h1>
            
            <p className="text-zinc-400 mb-8 max-w-xl text-lg">
            Манай лаборатори нь үнэт металлыг хайлж гулдмайлах, 
            үнэт металл болон тэдгээрээр хийсэн эдлэлд сорьц тогтоох шинжилгээ хийдэг.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] hover:from-[#FFD700] hover:to-[#D4AF37] text-zinc-900 border-0 rounded-xl px-8 shadow-lg shadow-[#D4AF37]/20"
              >
                Test Your Gold
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#D4AF37]/10 rounded-xl px-8"
              >
                View Services
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-zinc-700">
              <div>
                <div className="text-[#D4AF37] mb-1 text-2xl font-bold">99.9%</div>
                <div className="text-zinc-500">Accuracy</div>
              </div>
              <div>
                <div className="text-[#D4AF37] mb-1 text-2xl font-bold">24hr</div>
                <div className="text-zinc-500">Fast Results</div>
              </div>
              <div>
                <div className="text-[#D4AF37] mb-1 text-2xl font-bold">15K+</div>
                <div className="text-zinc-500">Tests Done</div>
              </div>
            </div>
          </motion.div>

          {/* Abstract 3D Visual - Simplified version */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-full aspect-square">
              {/* Glassmorphism Card */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/20 to-transparent rounded-[3rem] backdrop-blur-sm border border-[#D4AF37]/20"
              />
              
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-12 bg-gradient-to-tr from-[#FFD700]/10 to-transparent rounded-[2rem] backdrop-blur-sm border border-[#FFD700]/20"
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-96 h-64">
                  {/* Premium golden glow */}
                  <motion.div
                    animate={{ 
                      scale: [1, 1.4, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 rounded-[4rem] blur-[80px]"
                    style={{
                      background: "radial-gradient(ellipse at center, #F7C331 0%, #F7882F 50%, transparent 70%)"
                    }}
                  />
                  
                  {/* Gold Bar Visual */}
                  <motion.div
                    animate={{ rotateY: [0, 360] }}
                    transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                    className="relative w-full h-full flex items-center justify-center"
                    style={{ 
                      transformStyle: "preserve-3d",
                      perspective: "2000px"
                    }}
                  >
                    <div 
                      className="w-64 h-40 rounded-lg"
                      style={{ 
                        background: "linear-gradient(135deg, #FFEAA7 0%, #F7C331 8%, #F39C12 18%, #E67E22 35%, #D35400 50%, #E67E22 65%, #F39C12 82%, #F7C331 92%, #FFEAA7 100%)",
                        boxShadow: "0 20px 60px rgba(247,136,47,0.5), 0 10px 30px rgba(247,195,49,0.4)"
                      }}
                    >
                      <div className="h-full flex flex-col items-center justify-center text-center p-6">
                        <div className="text-2xl font-bold text-[#8B4513] mb-2">FINE GOLD</div>
                        <div className="text-5xl font-bold text-[#6B3410] mb-2">999.9</div>
                        <div className="text-sm text-[#8B4513]">NET WT 1000g</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,60 C300,100 900,20 1200,60 L1200,120 L0,120 Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
}

