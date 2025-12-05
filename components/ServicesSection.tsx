"use client";

import { motion } from "motion/react";
import { Microscope, ScanLine, Gem, FileCheck } from "lucide-react";

const services = [
  {
    icon: Microscope,
    title: "Алтны хайлшид химийн шинжилгээ хийх",
    description: "Олон төрлийн шинжилгээний арга ашиглан алтны агууламж, каратыг нарийвчлалтай тогтоох цогц шинжилгээ.",
    features: ["Галт шинжилгээ", "Тоосон чулууны арга", "24 цагийн үр дүн"],
  },
  {
    icon: ScanLine,
    title: "Мөнгөн гулдмайд шинжилгээ хийх",
    description: "Мөнгөн гулдмайн сорьц, цэвэршилт болон найрлагыг нарийвчлалтай тогтоож, бодит үнэлгээг баталгаажуулсан шинжилгээ.",
    features: ["Гэмтээхгүй", "Олон элемент", "Шууд үр дүн"],
  },
  {
    icon: Gem,
    title: "Үнэт металл хайлж гулдмайлах",
    description: "Алтны гоёл чимэглэл, зоос, үнэт металлын бүтээгдэхүүний бүрэн баталгаажуулалт, чанарын үнэлгээ.",
    features: ["Жинхэнэ эсэхийг шалгах", "Тамга баталгаажуулалт", "Нарийвчилсан тайлан"],
  },
  {
    icon: FileCheck,
    title: "Лабораторийн баталгаажуулалтын тайлан",
    description: "Нарийвчилсан шинжилгээ бүхий албан ёсны баталгаажсан баримт бичиг, хууль эрх зүйн болон даатгалын зорилгоор тохиромжтой.",
    features: ["ISO баталгаажсан", "Хууль ёсны хүчинтэй", "Цахим болон хэвлэмэл"],
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-zinc-50 to-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#fa9906] mb-4 block tracking-wide">Бидний Yйлчилгээ</span>
          <h2 className="text-zinc-900 mb-4 text-4xl font-bold">Бүтээгдэхүүнүүдийн дэлгэрэнгүй шинжилгээ</h2>
          <p className="text-zinc-600 max-w-2xl mx-auto">
            Үнэт металлын сорьц тогтоох лабораторийн дэлгэрэнгүй шинжилгээ
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <motion.div
                  className="relative h-full bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-zinc-100 overflow-hidden"
                  whileHover={{ y: -8 }}
                >
                  {/* Gradient Background on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#fa9906]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Icon Container */}
                  <motion.div
                    className="relative w-20 h-20 mb-6 bg-gradient-to-br from-zinc-100 to-zinc-50 rounded-2xl flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#fa9906]/20 to-[#FFD700]/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Icon className="w-10 h-10 text-[#fa9906] relative z-10" />
                  </motion.div>

                  <h3 className="text-zinc-900 mb-3 text-xl font-semibold">{service.title}</h3>
                  <p className="text-zinc-600 mb-6">{service.description}</p>

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#fa9906]" />
                        <span className="text-zinc-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#fa9906] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 p-8 bg-gradient-to-r from-zinc-900 to-zinc-800 rounded-3xl text-center"
        >
          <h3 className="text-white mb-3 text-2xl font-semibold">Урьдчилсан захиалгат үйлчилгээний цаг захиалах</h3>
          <p className="text-zinc-300 mb-6 max-w-2xl mx-auto">
            Манай байгууллагын VIP үйлчлүүлэгч болсноор урьдчилсан захиалгат үйлчилгээний цаг захиалах боломжтой.
          </p>
          <button className="px-8 py-3 bg-white text-zinc-900 rounded-xl hover:bg-zinc-100 transition-colors">
            VIP үйлчлүүлэгч болох
          </button>
        </motion.div>
      </div>
    </section>
  );
}

