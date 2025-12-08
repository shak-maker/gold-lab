"use client";

import { motion } from "motion/react";
import { Building2, Target, Users } from "lucide-react";

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
          <span className="text-[#fa9906] mb-4 block tracking-wide">Бидний тухай</span>
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
              <img
                src="/lobby.jpg"
                alt="Laboratory scientist working"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/40 to-transparent" />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#fa9906]/20 to-[#FFD700]/20 rounded-3xl blur-2xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#fa9906] to-[#FFD700] rounded-xl flex items-center justify-center">
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
                <div className="text-[#fa9906] text-3xl font-bold">10+</div>
                <div className="text-zinc-600">Жилийн туршлага</div>
              </div>
              <div>
                <div className="text-[#fa9906] text-3xl font-bold">500+</div>
                <div className="text-zinc-600">Хийсэн шинжилгээ</div>
              </div>
              <div>
                <div className="text-[#fa9906] text-3xl font-bold">99.9%</div>
                <div className="text-zinc-600">Нарийвчлалын хувь</div>
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
            <div className="w-16 h-16 bg-gradient-to-br from-[#fa9906]/10 to-[#FFD700]/10 rounded-2xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-[#fa9906]" />
            </div>
            <h3 className="text-2xl font-bold text-zinc-900 mb-4">Бидний Эрхэм Зорилго</h3>
            <p className="text-zinc-600 leading-relaxed">
            Үнэт металл хайлж гулдмайлах, сорьц тогтоох шинжилгээний шинэлэг, найдвартай, шуурхай үйлчилгээг хүсэл тэмүүлэлтэйгээр үзүүлж үйлчлүүлэгчдийнхээ хүлээлтийг давах
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-3xl p-8 shadow-lg border border-zinc-100"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-[#fa9906]/10 to-[#FFD700]/10 rounded-2xl flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-[#fa9906]" />
            </div>
            <h3 className="text-2xl font-bold text-zinc-900 mb-4">Бидний Алсын Хараа</h3>
            <p className="text-zinc-600 leading-relaxed">
            Үнэт металлын сорьцын баталгаажуулалтын салбарт Монголын хамгийн итгэл хүлээсэн түнш байх
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

