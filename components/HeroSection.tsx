"use client";

import { motion } from "motion/react";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const GoldIngotCanvas = dynamic(() => import("./GoldIngotCanvas"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-32 h-32 border-4 border-[#fa9906]/30 border-t-[#fa9906] rounded-full animate-spin" />
    </div>
  ),
});

export function HeroSection() {
  const [particles, setParticles] = useState<
    Array<{ id: number; x: number; y: number; delay: number }>
  >([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
    }));
    setParticles(newParticles);
    // Model preloading is handled in GoldIngotCanvas.tsx to avoid duplication
  }, []);

  return (
    <div className="relative min-h-[90vh] overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-[#fa9906] rounded-full"
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-24">
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
              <span className="px-4 py-2 bg-[#fa9906]/10 border border-[#fa9906]/30 rounded-full text-[#fa9906] backdrop-blur-sm">
              MNS ISO/IEC 17025:2018 стандартаар итгэмжлэгдсэн
              </span>
            </motion.div>

            <h1 className="text-white mb-6 text-5xl md:text-6xl font-bold">
            Чанар - Сэтгэл Ханамж
            </h1>

            <p className="text-zinc-400 mb-8 max-w-xl text-md">
            Олон улсын MNS ISO/IEC 17025:2018 стандартаар итгэмжлэгдсэн үнэт металл хайлах, сорьц тогтоох  лаборатори. Бид найдвартай, хурдан шуурхай үйлчилгээг санал болгож байна.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#fa9906] to-[#FFD700] hover:from-[#FFD700] hover:to-[#fa9906] text-zinc-900 border-0 rounded-xl px-8 shadow-lg shadow-[#fa9906]/20"
                asChild
              >
                <a
                  href="/ҮЙЛЧИЛГЭЭНИЙ ҮНЭ ТАРИФ.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Үнэ Тариф
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#fa9906]/50 text-[#fa9906] hover:bg-[#fa9906]/10 rounded-xl px-8"
                asChild
              >
                <a
                  href="https://maps.app.goo.gl/YKHkwZRGEXD5dSz16"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Байршил
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-zinc-700">
              <div>
                <div className="text-[#fa9906] mb-1 text-2xl font-bold">
                  99.9%
                </div>
                <div className="text-zinc-500">Нарийвчлал</div>
              </div>
              <div>
                <div className="text-[#fa9906] mb-1 text-2xl font-bold">
                  2-4 цагт
                </div>
                <div className="text-zinc-500">Хурдан үр дүн</div>
              </div>
              <div>
                <div className="text-[#fa9906] mb-1 text-2xl font-bold">
                  500+
                </div>
                <div className="text-zinc-500">Хийсэн шинжилгээ</div>
              </div>
            </div>
          </motion.div>

          {/* 3D Gold Ingot Visual */}
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
                className="absolute inset-0 bg-gradient-to-br from-[#fa9906]/20 to-transparent rounded-[3rem] backdrop-blur-sm border border-[#fa9906]/20"
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
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 rounded-[4rem] blur-[80px]"
                  style={{
                    background:
                      "radial-gradient(ellipse at center, #F7C331 0%, #F7882F 50%, transparent 70%)",
                  }}
                />

                {/* Three.js 3D Gold Ingot */}
                <div className="relative w-full h-full min-h-[400px] aspect-square z-10">
                  <GoldIngotCanvas />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-24"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C300,100 900,20 1200,60 L1200,120 L0,120 Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
}
