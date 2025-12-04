"use client";

import { motion } from "motion/react";
import { Button } from "./ui/button";
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
          <div className="flex items-center gap-3">
            {/* YMCT Logo Symbol */}
            <div className="w-12 h-12 flex items-center justify-center">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Outer Circle */}
                <circle cx="24" cy="24" r="22" stroke="#FF6600" strokeWidth="2" fill="none" />
                {/* Outer Diamond (rotated square outline) */}
                <path d="M24 6 L38 24 L24 42 L10 24 Z" stroke="#FF6600" strokeWidth="2" fill="none" />
                {/* Inner Diamond (rotated square filled) */}
                <path d="M24 12 L32 24 L24 36 L16 24 Z" fill="#FF6600" />
              </svg>
            </div>
            {/* YMCT Text */}
            <span 
              className="text-[#FF6600] tracking-wide font-bold text-xl"
              style={{
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5), 1px 1px 2px rgba(255, 102, 0, 0.3)"
              }}
            >
              YMCT
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-zinc-300">
            <a href="#services" className="hover:text-[#D4AF37] transition-colors">Yйлчилгээ</a>
            <a href="#process" className="hover:text-[#D4AF37] transition-colors">Үйл явц</a>
            <a href="#about-us" className="hover:text-[#D4AF37] transition-colors">Бидний тухай</a>
            <a href="#contact" className="hover:text-[#D4AF37] transition-colors">Холбоо барих</a>
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
              Баталгаажсан Алт Шалгах Лаборатори
              </span>
            </motion.div>

            <h1 className="text-white mb-6 text-5xl md:text-6xl font-bold">
            Найдвартай, өндөр нарийвчлалтай алтны шинжилгээ
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
                Алтаа шалгуулах
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#D4AF37]/10 rounded-xl px-8"
              >
                Үйлчилгээ үзэх
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-zinc-700">
              <div>
                <div className="text-[#D4AF37] mb-1 text-2xl font-bold">99.9%</div>
                <div className="text-zinc-500">Нарийвчлал</div>
              </div>
              <div>
                <div className="text-[#D4AF37] mb-1 text-2xl font-bold">24ц</div>
                <div className="text-zinc-500">Хурдан үр дүн</div>
              </div>
              <div>
                <div className="text-[#D4AF37] mb-1 text-2xl font-bold">15K+</div>
                <div className="text-zinc-500">Хийсэн шинжилгээ</div>
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
                
                {/* 3D Gold Bar Container with Perspective */}
                <div 
                  className="relative w-96 h-64"
                  style={{ 
                    perspective: "1200px",
                    perspectiveOrigin: "50% 50%"
                  }}
                >
                  {/* 3D Gold Bar Wrapper - Rotating */}
                  <motion.div
                    animate={{ 
                      rotateY: [0, 360]
                    }}
                    transition={{ 
                      duration: 14, 
                      repeat: Infinity, 
                      ease: "linear"
                    }}
                    style={{ 
                      transformStyle: "preserve-3d",
                      width: "320px",
                      height: "200px",
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      marginTop: "-100px",
                      marginLeft: "-160px",
                      transform: "rotateX(20deg)"
                    }}
                  >
                    {/* Front Face - Main surface with text */}
                    <div 
                      style={{ 
                        position: "absolute",
                        width: "320px",
                        height: "200px",
                        background: `
                          radial-gradient(ellipse at 30% 30%, rgba(255, 215, 0, 0.8) 0%, transparent 50%),
                          radial-gradient(ellipse at 70% 70%, rgba(184, 148, 31, 0.6) 0%, transparent 50%),
                          linear-gradient(135deg, 
                            #FFD700 0%, 
                            #F7C331 10%, 
                            #F4C430 20%, 
                            #F7C331 30%, 
                            #FFD700 40%,
                            #F4C430 50%,
                            #F7C331 60%,
                            #FFD700 70%,
                            #F4C430 80%,
                            #F7C331 90%,
                            #FFD700 100%
                          )
                        `,
                        borderRadius: "8px",
                        transform: "translateZ(50px)",
                        boxShadow: `
                          inset 0 2px 10px rgba(255, 215, 0, 0.4),
                          inset 0 -2px 10px rgba(184, 148, 31, 0.3),
                          0 0 50px rgba(255, 215, 0, 0.5),
                          0 10px 40px rgba(247, 195, 49, 0.4)
                        `,
                        border: "1px solid rgba(255, 215, 0, 0.4)"
                      }}
                    >
                      {/* Engraved text effect */}
                      <div className="h-full flex flex-col items-center justify-center text-center p-6 relative z-10">
                        <div 
                          className="text-xl font-bold mb-2"
                          style={{
                            color: "#8B4513",
                            textShadow: `
                              2px 2px 4px rgba(0, 0, 0, 0.5),
                              inset 0 1px 2px rgba(139, 69, 19, 0.8),
                              0 0 8px rgba(139, 69, 19, 0.3)
                            `,
                            letterSpacing: "2px"
                          }}
                        >
                          FINE GOLD
                        </div>
                        <div 
                          className="text-6xl font-bold mb-2"
                          style={{
                            color: "#6B3410",
                            textShadow: `
                              3px 3px 6px rgba(0, 0, 0, 0.6),
                              inset 0 2px 4px rgba(107, 52, 16, 0.9),
                              0 0 12px rgba(107, 52, 16, 0.4)
                            `,
                            letterSpacing: "4px"
                          }}
                        >
                          999.9
                        </div>
                        <div 
                          className="text-sm"
                          style={{
                            color: "#8B4513",
                            textShadow: `
                              1px 1px 3px rgba(0, 0, 0, 0.5),
                              inset 0 1px 2px rgba(139, 69, 19, 0.8)
                            `,
                            letterSpacing: "1px"
                          }}
                        >
                          NET WT 1000g
                        </div>
                      </div>
                    </div>

                    {/* Back Face */}
                    <div 
                      style={{ 
                        position: "absolute",
                        width: "320px",
                        height: "200px",
                        background: `
                          radial-gradient(ellipse at 50% 50%, rgba(212, 175, 55, 0.4) 0%, transparent 70%),
                          linear-gradient(135deg, 
                            #D4AF37 0%, 
                            #C9A227 15%, 
                            #B8941F 30%, 
                            #A67C1A 45%,
                            #B8941F 60%,
                            #C9A227 75%,
                            #D4AF37 100%
                          )
                        `,
                        borderRadius: "8px",
                        transform: "rotateY(180deg) translateZ(50px)",
                        boxShadow: `
                          inset 0 2px 10px rgba(212, 175, 55, 0.3),
                          inset 0 -2px 10px rgba(166, 124, 26, 0.2),
                          0 0 30px rgba(212, 175, 55, 0.3)
                        `,
                        border: "1px solid rgba(212, 175, 55, 0.3)"
                      }}
                    />

                    {/* Top Face */}
                    <div 
                      style={{ 
                        position: "absolute",
                        width: "320px",
                        height: "70px",
                        background: `
                          linear-gradient(90deg, 
                            #FFD700 0%, 
                            #F7C331 20%, 
                            #F4C430 40%,
                            #F7C331 60%,
                            #FFD700 80%,
                            #F7C331 100%
                          )
                        `,
                        borderRadius: "8px",
                        transform: "rotateX(90deg) translateZ(100px)",
                        transformOrigin: "center bottom",
                        top: "0",
                        left: "0",
                        boxShadow: "0 0 25px rgba(255, 215, 0, 0.4)",
                        border: "1px solid rgba(255, 215, 0, 0.3)"
                      }}
                    />

                    {/* Bottom Face */}
                    <div 
                      style={{ 
                        position: "absolute",
                        width: "320px",
                        height: "70px",
                        background: `
                          linear-gradient(90deg, 
                            #C9A227 0%, 
                            #B8941F 20%, 
                            #A67C1A 40%,
                            #B8941F 60%,
                            #C9A227 80%,
                            #B8941F 100%
                          )
                        `,
                        borderRadius: "8px",
                        transform: "rotateX(-90deg) translateZ(100px)",
                        transformOrigin: "center top",
                        top: "130px",
                        left: "0",
                        boxShadow: "0 0 20px rgba(184, 148, 31, 0.3)",
                        border: "1px solid rgba(184, 148, 31, 0.3)"
                      }}
                    />

                    {/* Right Face */}
                    <div 
                      style={{ 
                        position: "absolute",
                        width: "70px",
                        height: "200px",
                        background: `
                          linear-gradient(180deg, 
                            #FFD700 0%, 
                            #F7C331 15%, 
                            #F4C430 30%,
                            #F7C331 45%,
                            #FFD700 60%,
                            #F7C331 75%,
                            #F4C430 90%,
                            #F7C331 100%
                          )
                        `,
                        borderRadius: "8px",
                        transform: "rotateY(90deg) translateZ(160px)",
                        transformOrigin: "left center",
                        top: "0",
                        left: "250px",
                        boxShadow: "0 0 30px rgba(255, 215, 0, 0.4)",
                        border: "1px solid rgba(255, 215, 0, 0.3)"
                      }}
                    />

                    {/* Left Face */}
                    <div 
                      style={{ 
                        position: "absolute",
                        width: "70px",
                        height: "200px",
                        background: `
                          linear-gradient(180deg, 
                            #C9A227 0%, 
                            #B8941F 15%, 
                            #A67C1A 30%,
                            #B8941F 45%,
                            #C9A227 60%,
                            #B8941F 75%,
                            #A67C1A 90%,
                            #B8941F 100%
                          )
                        `,
                        borderRadius: "8px",
                        transform: "rotateY(-90deg) translateZ(160px)",
                        transformOrigin: "right center",
                        top: "0",
                        left: "0",
                        boxShadow: "0 0 25px rgba(184, 148, 31, 0.3)",
                        border: "1px solid rgba(184, 148, 31, 0.3)"
                      }}
                    />

                    {/* Highlight/Shine Effect on Front */}
                    <div 
                      style={{ 
                        position: "absolute",
                        width: "320px",
                        height: "200px",
                        background: `
                          linear-gradient(135deg, 
                            rgba(255, 255, 255, 0.5) 0%, 
                            rgba(255, 255, 255, 0.2) 20%,
                            transparent 40%,
                            transparent 100%
                          )
                        `,
                        borderRadius: "8px",
                        transform: "translateZ(51px)",
                        mixBlendMode: "overlay",
                        pointerEvents: "none"
                      }}
                    />
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

