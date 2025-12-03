"use client";

import { motion } from "motion/react";
import { Package, Beaker, Scan, Award } from "lucide-react";
import { useState } from "react";

const processes = [
  {
    id: 1,
    icon: Package,
    title: "Sample Drop-off",
    description: "Submit your gold items at our secure laboratory with complete confidentiality and safety measures.",
    color: "#D4AF37",
  },
  {
    id: 2,
    icon: Beaker,
    title: "Chemical Analysis",
    description: "Our experts perform precise chemical testing using acid tests and other proven methodologies.",
    color: "#FFD700",
  },
  {
    id: 3,
    icon: Scan,
    title: "XRF Scanning",
    description: "Non-destructive X-ray fluorescence technology provides detailed elemental composition analysis.",
    color: "#D4AF37",
  },
  {
    id: 4,
    icon: Award,
    title: "Certification",
    description: "Receive your official certified report with detailed purity analysis and quality assurance seal.",
    color: "#FFD700",
  },
];

export function ProcessSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#D4AF37] mb-4 block tracking-wide">HOW IT WORKS</span>
          <h2 className="text-zinc-900 mb-4 text-4xl font-bold">Our Testing Process</h2>
          <p className="text-zinc-600 max-w-2xl mx-auto">
            A transparent, professional four-step process ensuring accurate gold purity analysis
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent transform -translate-y-1/2 z-0" />

          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {processes.map((process, index) => {
              const Icon = process.icon;
              return (
                <motion.div
                  key={process.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredId(process.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="relative"
                >
                  <motion.div
                    className="bg-white rounded-2xl p-6 shadow-lg border border-zinc-100 hover:border-[#D4AF37]/30 transition-all duration-300 h-full"
                    whileHover={{ y: -8, scale: 1.02 }}
                  >
                    {/* Step Number */}
                    <div className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-zinc-900 font-bold">{process.id}</span>
                    </div>

                    {/* Icon Container */}
                    <motion.div
                      className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-zinc-50 to-zinc-100 rounded-2xl flex items-center justify-center relative overflow-hidden"
                      animate={{
                        scale: hoveredId === process.id ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/20 to-[#FFD700]/20"
                        animate={{
                          opacity: hoveredId === process.id ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      />
                      <Icon
                        className="w-8 h-8 relative z-10"
                        style={{ color: process.color }}
                      />
                    </motion.div>

                    <h3 className="text-zinc-900 text-center mb-2 font-semibold">{process.title}</h3>
                    <p className="text-zinc-600 text-center text-sm">{process.description}</p>

                    {/* Hover Line Effect */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] rounded-b-2xl"
                      initial={{ scaleX: 0 }}
                      animate={{
                        scaleX: hoveredId === process.id ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-zinc-600 mb-4">
            Ready to test your gold items?
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] hover:from-[#FFD700] hover:to-[#D4AF37] text-zinc-900 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl font-semibold">
            Start Your Test
          </button>
        </motion.div>
      </div>
    </section>
  );
}

