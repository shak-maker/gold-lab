"use client";

import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ариунзаяа Бат-Өлзий",
    role: "Үйлчлүүлэгч",
    image: "https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzMxODg4N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    content: "Хэрэглэгчдийнхээ тав тухыг хангасан орчин бүрдүүлсэн танай хамт олонд талархлаа илэрхийлж байна. Зөөлөн буйдан дээр тухлан сууж телевиз үзэн, цай, кофе уунгаа үйлчилгээ авах үнэхээр СУУУУПЕЕРРРР байлаа",
    rating: 5,
  },
  {
    name: "Бат-Эрдэнэ Маналайбаатар",
    role: "Алтны худалдаачин",
    image: "/test-1.jpg",
    content: "Хариу өгөх хугацаа гайхалтай. 2-4 цагийн дотор нарийвчилсан тайлан авдаг нь манай бизнест маш чухал. Та бүхэнд амжилт хүсье!",
    rating: 5,
  },
  {
    name: "Э.Гантөмөр",
    role: "Судалгааны эрдэмтэн",
    image: "https://images.unsplash.com/photo-1576670158706-8d5b044b61da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzY2llbnRpc3QlMjB3b21hbnxlbnwxfHx8fDE3NjMzNDYwNzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    content: "Металлургийн мэргэжилтэн болохын хувьд би тэдний нарийвчлал, орчин үеийн шинжилгээний аргад зориулсан хүчин чармайлтыг үнэлдэг. Тэдний дэвшилтэт тоног төхөөрөмж, ISO баталгаажуулалт нь тэднийг онцлох болгодог.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#fa9906] mb-4 block tracking-wide">ҮЙЛЧЛҮҮЛЭГЧДИЙН СЭТГЭГДЭЛ</span>
          <h2 className="text-zinc-900 mb-4 text-4xl font-bold">Манай үйлчлүүлэгчид юу хэлж байна</h2>
          <p className="text-zinc-600 max-w-2xl mx-auto">
            Бүс нутаг даяарх гоёл чимэглэлийн дэлгүүр, худалдаачин, хувь хүмүүст итгэлтэй
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <motion.div
                className="bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 h-full flex flex-col border border-zinc-100"
                whileHover={{ y: -8 }}
              >
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-gradient-to-br from-[#fa9906]/10 to-[#FFD700]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Quote className="w-6 h-6 text-[#fa9906]" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#fa9906] text-[#fa9906]"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-zinc-700 mb-6 flex-grow leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-zinc-100">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-[#fa9906]/30 group-hover:ring-[#fa9906] transition-all duration-300">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#fa9906] rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-zinc-900" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <div className="text-zinc-900 mb-1 font-semibold">{testimonial.name}</div>
                    <div className="text-zinc-500 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { label: "ISO баталгаажсан", value: "9001:2015" },
            { label: "Хийсэн шинжилгээ", value: ":500+" },
            { label: "Үйлчлүүлэгчийн сэтгэл ханамж", value: "99.8%" },
            { label: "Хариу өгөх хугацаа", value: "<2-4 цаг" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="text-center p-6 bg-white rounded-2xl border border-zinc-100"
            >
              <div className="text-[#fa9906] mb-2 font-bold text-xl">{stat.value}</div>
              <div className="text-zinc-600 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

