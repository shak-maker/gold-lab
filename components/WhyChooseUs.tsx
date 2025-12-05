"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Award, Clock, Users, Heart } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Чанартай, найдвартай үйлчилгээ",
    description: "Харилцагч, үйлчлүүлэгч нарт чанартай, найдвартай үйлчилгээг шуурхай үзүүлнэ.",
  },
  {
    icon: Clock,
    title: "Хурдан үр дүн",
    description: "Ажлын цаг эрт эхэлдэг тул сорилтын дүнг тухайн өдрөө гаргана.",
  },
  {
    icon: Users,
    title: "Мэргэжлийн боловсон хүчин",
    description: "Туршлагатай, мэргэжлийн боловсон хүчний баг танд найдвартай үйлчилгээ үзүүлнэ.",
  },
  {
    icon: Heart,
    title: "Тохь тухтай орчин",
    description: "Тохь тухтай орчин, найрсаг хамт олон.",
  },
];

export function WhyChooseUs() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden h-[600px]">
              <Image
                src="/why-us.png"
                alt="Modern laboratory technology"
                fill
                className="object-cover"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent" />
              
              {/* Floating Stat Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/20"
              >
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-[#fa9906] mb-1 font-bold text-xl">15K+</div>
                    <div className="text-zinc-600 text-sm">Шинжилгээ</div>
                  </div>
                  <div className="text-center border-x border-zinc-200">
                    <div className="text-[#fa9906] mb-1 font-bold text-xl">10+</div>
                    <div className="text-zinc-600 text-sm">Жил</div>
                  </div>
                  <div className="text-center">
                    <div className="text-[#fa9906] mb-1 font-bold text-xl">100%</div>
                    <div className="text-zinc-600 text-sm">Баталгаажсан</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#fa9906]/20 to-[#FFD700]/20 rounded-3xl blur-2xl -z-10" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-[#FFD700]/20 to-[#fa9906]/20 rounded-3xl blur-2xl -z-10" />
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#fa9906] mb-4 block tracking-wide">ЯАГААД БИДНИЙГ СОНГОХ ВЭ</span>
            <h2 className="text-zinc-900 mb-6 text-4xl font-bold">
            </h2>
            <p className="text-zinc-600 mb-8 text-lg">
              Арваас дээш жилийн туршлагатай мэргэжлийн боловсон хүчний баг, дэвшилтэт технологи бүхий үйлчлүүлэгчдийнхээ тав тухыг хангасан орчинд алт хайлж гулдмайлах, сорьц тогтоох шинжилгээг найдвартай, түргэн шуурхай гүйцэтгэж байна. 
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#fa9906]/10 to-[#FFD700]/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-[#fa9906]" />
                    </div>
                    <div>
                      <h3 className="text-zinc-900 mb-1 font-semibold">{feature.title}</h3>
                      <p className="text-zinc-600">{feature.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-10 pt-8 border-t border-zinc-200"
            >
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

