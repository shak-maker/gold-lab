"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { Calculator, TrendingUp } from "lucide-react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export function PurityCalculator() {
  const [weight, setWeight] = useState("");
  const [karat, setKarat] = useState("24");
  const [goldPrice] = useState(62.50); // Price per gram in USD

  const karatPurity: Record<string, number> = {
    "24": 99.9,
    "22": 91.6,
    "18": 75.0,
    "14": 58.3,
    "10": 41.7,
  };

  const calculateValue = () => {
    if (!weight || parseFloat(weight) <= 0) return 0;
    const purity = karatPurity[karat] / 100;
    const pureGold = parseFloat(weight) * purity;
    return pureGold * goldPrice;
  };

  const value = calculateValue();

  return (
    <section className="py-24 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #D4AF37 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#D4AF37] mb-4 block tracking-wide">GOLD VALUE ESTIMATOR</span>
          <h2 className="text-white mb-4 text-4xl font-bold">Calculate Your Gold's Worth</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Get an instant estimate of your gold's value based on current market rates
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Calculator Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-xl flex items-center justify-center">
                  <Calculator className="w-6 h-6 text-zinc-900" />
                </div>
                <h3 className="text-zinc-900 text-xl font-semibold">Gold Purity Calculator</h3>
              </div>

              <div className="space-y-6">
                {/* Weight Input */}
                <div>
                  <Label htmlFor="weight" className="text-zinc-700 mb-2 block">
                    Weight (grams)
                  </Label>
                  <Input
                    id="weight"
                    type="number"
                    placeholder="Enter weight in grams"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="h-12 border-zinc-300 rounded-xl focus:ring-[#D4AF37] focus:border-[#D4AF37]"
                  />
                </div>

                {/* Karat Selection */}
                <div>
                  <Label className="text-zinc-700 mb-2 block">Gold Purity (Karat)</Label>
                  <div className="grid grid-cols-5 gap-2">
                    {Object.keys(karatPurity).map((k) => (
                      <button
                        key={k}
                        onClick={() => setKarat(k)}
                        className={`py-3 rounded-xl transition-all duration-300 font-semibold ${
                          karat === k
                            ? "bg-gradient-to-br from-[#D4AF37] to-[#FFD700] text-zinc-900 shadow-lg"
                            : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
                        }`}
                      >
                        {k}K
                      </button>
                    ))}
                  </div>
                  <p className="text-zinc-500 mt-2 text-sm">
                    Purity: {karatPurity[karat]}%
                  </p>
                </div>

                {/* Current Gold Price Info */}
                <div className="p-4 bg-zinc-50 rounded-xl border border-zinc-200">
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-600">Current Gold Price:</span>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-green-600" />
                      <span className="text-zinc-900 font-semibold">${goldPrice}/gram</span>
                    </div>
                  </div>
                </div>

                {/* Result */}
                <div className="pt-6 border-t border-zinc-200">
                  <div className="text-center">
                    <p className="text-zinc-600 mb-2">Estimated Value</p>
                    <motion.div
                      key={value}
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-[#D4AF37] text-4xl font-bold"
                    >
                      ${value.toFixed(2)}
                    </motion.div>
                    <p className="text-zinc-500 mt-2 text-sm">
                      *Estimation only. Get certified testing for accurate valuation.
                    </p>
                  </div>
                </div>

                <button className="w-full py-4 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] hover:from-[#FFD700] hover:to-[#D4AF37] text-zinc-900 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl font-semibold">
                  Book Professional Testing
                </button>
              </div>
            </div>
          </motion.div>

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-white mb-4 text-2xl font-semibold">Understanding Gold Purity</h3>
              <p className="text-zinc-400 mb-6">
                Gold purity is measured in karats, with 24K being pure gold. Lower karat values 
                indicate gold alloyed with other metals for strength and color variation.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { karat: "24K", purity: "99.9%", desc: "Pure gold, soft and malleable" },
                { karat: "22K", purity: "91.6%", desc: "Common for jewelry, good durability" },
                { karat: "18K", purity: "75.0%", desc: "Popular for fine jewelry" },
                { karat: "14K", purity: "58.3%", desc: "Durable, everyday wear" },
              ].map((item, index) => (
                <motion.div
                  key={item.karat}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-[#D4AF37]/30 transition-colors"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#D4AF37]/20 to-[#FFD700]/20 rounded-xl flex items-center justify-center">
                    <span className="text-[#D4AF37] font-bold">{item.karat}</span>
                  </div>
                  <div>
                    <div className="text-white mb-1 font-semibold">{item.purity} Pure Gold</div>
                    <p className="text-zinc-400 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="p-6 bg-[#D4AF37]/10 backdrop-blur-sm rounded-2xl border border-[#D4AF37]/30">
              <p className="text-zinc-300">
                💡 <strong className="text-white">Pro Tip:</strong> Always verify gold purity through 
                professional laboratory testing. Our XRF technology provides accurate results without 
                damaging your items.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

