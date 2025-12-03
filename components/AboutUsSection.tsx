"use client";

import { motion } from "motion/react";
import { Building2, Target, Users, Award, Shield, Heart } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const values = [
  {
    icon: Shield,
    title: "Integrity First",
    description: "We maintain the highest ethical standards in every test we perform, ensuring complete transparency and honesty.",
  },
  {
    icon: Target,
    title: "Precision Excellence",
    description: "Our commitment to accuracy drives us to use only the most advanced testing equipment and methodologies.",
  },
  {
    icon: Heart,
    title: "Customer Focus",
    description: "Your trust is our priority. We provide personalized service and clear communication throughout the testing process.",
  },
  {
    icon: Award,
    title: "Continuous Innovation",
    description: "We stay at the forefront of testing technology, constantly upgrading our methods and equipment.",
  },
];

const milestones = [
  {
    year: "2014",
    title: "Foundation",
    description: "GoldTest Lab was established with a vision to provide accurate, accessible gold testing services.",
  },
  {
    year: "2017",
    title: "ISO Certification",
    description: "Achieved ISO 9001:2015 certification, demonstrating our commitment to quality management.",
  },
  {
    year: "2020",
    title: "Technology Upgrade",
    description: "Invested in state-of-the-art XRF spectrometers, expanding our testing capabilities.",
  },
  {
    year: "2024",
    title: "15,000+ Tests",
    description: "Reached a milestone of over 15,000 successful tests, serving customers across the region.",
  },
];

export function AboutUsSection() {
  return (
    <section id="about-us" className="py-24 bg-gradient-to-b from-white to-zinc-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#D4AF37] mb-4 block tracking-wide">Бидний тухай</span>
          <h2 className="text-zinc-900 mb-4 text-4xl md:text-5xl font-bold">
          ЧАНАР- СЭТГЭЛ ХАНАМЖ
          </h2>
          <p className="text-zinc-600 max-w-3xl mx-auto text-lg">
          “Үнэт металлын сорьцийн төв” ХХК-ийн үнэт металлын сорьц тогтоох
лаборатори нь 2024 онд үүсгэн байгуулагдсан.
Манай лаборатори нь үнэт металлыг хайлж гулдмайлах, үнэт металл болон
тэдгээрээр хийсэн эдлэлд сорьц тогтоох шинжилгээ хийдэг.
MNS ISO/IEC 17025:2018 “Сорилтын болон шалгалт тохируулгын
лабораторийн чадавхид тавих ерөнхий шаардлага” стандартын шаардлагыг бүрэн
хангаж Үндэсний Итгэмжлэлийн Төвөөр магадлан итгэмжлэгдсэн.
          </p>
        </motion.div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWJvcmF0b3J5JTIwc2NpZW50aXN0JTIwd29ya2luZ3xlbnwxfHx8fDE3NjMzNDYwNzd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Laboratory scientist working"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/40 to-transparent" />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#D4AF37]/20 to-[#FFD700]/20 rounded-3xl blur-2xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-xl flex items-center justify-center">
                <Building2 className="w-6 h-6 text-zinc-900" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900">МЭРГЭЖЛИЙН ӨНДӨР УР ЧАДВАРТАЙ БАГ ХАМТ ОЛОН</h3>
            </div>
            <p className="text-zinc-600 mb-6 text-lg leading-relaxed">
            1983-2015 онуудад Геологийн төв лабораторид химич, Сангийн яамны
Улсын сорьц хяналтын хэлтэст улсын байцаагч, Үнэт Металлын Сорьцын
лабораторид химич, лабораторид эрхлэгч, Стандартчилал Хэмжил Зүйн Газрын
Сорьцын хяналтын хэлтэст химичээр ажиллаж байсан туршлагатай Зөвлөх-Химич
мөн СХЗГ-ын ҮМСГазарт 2-3 жил ажилласан туршлагатай Химич-Шинжээч болон
хайлагчаар боловсон хүчний багаа бүрдүүлсэн бөгөөд найдвартай хурдан шуурхай
үйлчилнэ.
            </p>
            <div className="flex items-center gap-6 pt-6 border-t border-zinc-200">
              <div>
                <div className="text-[#D4AF37] text-3xl font-bold">10+</div>
                <div className="text-zinc-600">Years Experience</div>
              </div>
              <div>
                <div className="text-[#D4AF37] text-3xl font-bold">15K+</div>
                <div className="text-zinc-600">Tests Completed</div>
              </div>
              <div>
                <div className="text-[#D4AF37] text-3xl font-bold">99.9%</div>
                <div className="text-zinc-600">Accuracy Rate</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 shadow-lg border border-zinc-100"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37]/10 to-[#FFD700]/10 rounded-2xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-[#D4AF37]" />
            </div>
            <h3 className="text-2xl font-bold text-zinc-900 mb-4">Our Mission</h3>
            <p className="text-zinc-600 leading-relaxed">
              To provide the most accurate, reliable, and accessible gold testing services while 
              maintaining the highest standards of integrity and customer service. We empower our 
              clients with precise information they can trust for their most important decisions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-3xl p-8 shadow-lg border border-zinc-100"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37]/10 to-[#FFD700]/10 rounded-2xl flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-[#D4AF37]" />
            </div>
            <h3 className="text-2xl font-bold text-zinc-900 mb-4">Our Vision</h3>
            <p className="text-zinc-600 leading-relaxed">
              To become the global standard for gold testing excellence, recognized for our 
              innovation, accuracy, and unwavering commitment to customer trust. We envision a 
              future where everyone has access to professional-grade testing services.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <span className="text-[#D4AF37] mb-4 block tracking-wide">OUR VALUES</span>
            <h3 className="text-3xl font-bold text-zinc-900">What Drives Us</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-zinc-100 group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#D4AF37]/10 to-[#FFD700]/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-[#D4AF37]" />
                  </div>
                  <h4 className="text-zinc-900 font-semibold mb-2">{value.title}</h4>
                  <p className="text-zinc-600 text-sm">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <span className="text-[#D4AF37] mb-4 block tracking-wide">OUR JOURNEY</span>
            <h3 className="text-3xl font-bold text-zinc-900">Milestones & Achievements</h3>
          </div>
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#D4AF37]/30 via-[#FFD700]/30 to-[#D4AF37]/30 transform -translate-x-1/2" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Year Badge */}
                  <div className="flex-shrink-0 w-32 text-center md:text-left">
                    <div className="inline-block px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-zinc-900 rounded-xl font-bold text-lg shadow-lg">
                      {milestone.year}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg border border-zinc-100 md:max-w-md">
                    <h4 className="text-zinc-900 font-bold text-xl mb-2">{milestone.title}</h4>
                    <p className="text-zinc-600">{milestone.description}</p>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-shrink-0 w-32" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

