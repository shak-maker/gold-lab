"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Алтны шинжилгээ хэр удаан үргэлжилдэг вэ?",
    answer: "Бидний стандарт шинжилгээ нь ихэвчлэн 24-48 цагийн дотор дуусдаг. Яаралтай шинжилгээний хувьд 6-12 цагийн дотор үр дүнг өгөх боломжтой. Нарийвчилсан шинжилгээний хувьд 3-5 хоног шаардлагатай."
  },
  {
    question: "Шинжилгээний үр дүн хэр найдвартай вэ?",
    answer: "Манай лаборатори нь ISO 9001:2015 стандартад нийцсэн, NABL баталгаажсан. Бидний шинжилгээний нарийвчлал 99.9% байдаг. Бүх шинжилгээ нь олон удаагийн баталгаажуулалтаар дамжин, нарийвчилсан тайлан гаргадаг."
  },
  {
    question: "Ямар төрлийн алтны бүтээгдэхүүнийг шинжилж чадах вэ?",
    answer: "Бид алтны бүх төрлийн бүтээгдэхүүнийг шинжилдэг: гоёл чимэглэл, зоос, хайлш, гулдмай, алтны утас, алтны сав баглаа боодол гэх мэт. Мөн мөнгө, платинум, паллади зэрэг бусад үнэт металлуудыг ч шинжилдэг."
  },
  {
    question: "Шинжилгээний үнэ хэд вэ?",
    answer: "Шинжилгээний үнэ нь бүтээгдэхүүний төрөл, хэмжээ, шаардлагатай шинжилгээний төрлөөс хамаарна. Бидний үндсэн шинжилгээ 50,000₮-аас эхэлнэ. Нарийвчилсан үнийн мэдээллийг авахын тулд бидэнтэй холбогдоно уу."
  },
  {
    question: "Шинжилгээний явцад бүтээгдэхүүн гэмтэх эрсдэлтэй юу?",
    answer: "Бидний ихэнх шинжилгээ нь устгахгүй аргаар (non-destructive) хийгддэг тул таны бүтээгдэхүүн гэмтэхгүй. Зарим тохиолдолд химийн шинжилгээ хийх шаардлагатай бол бага хэмжээний дээж авах шаардлагатай бөгөөд энэ нь бүтээгдэхүүний үнэ цэнийг ихээхэн бууруулахгүй."
  },
  {
    question: "Шинжилгээний тайланг хаана ашиглаж болох вэ?",
    answer: "Манай баталгаажсан тайланг даатгал, хууль эрх зүйн зорилгоор, худалдаа, банкны зээл авах, үнэлгээ хийх зэрэг олон зорилгоор ашиглаж болно. Тайлан нь ISO стандартад нийцсэн, хууль ёсны хүчинтэй баримт бичиг юм."
  },
  {
    question: "Би бүтээгдэхүүнээ хэрхэн илгээх вэ?",
    answer: "Та бүтээгдэхүүнээ лабораторид шууд авчрахаас гадна, бид аюулгүй тээвэрлэлтийн үйлчилгээ санал болгодог. Бүтээгдэхүүн нь даатгалд хамрагдаж, аюулгүй байдлаар хадгалагдана. Дэлгэрэнгүй мэдээллийг бидэнтэй холбогдоно уу."
  },
  {
    question: "Онлайн захиалга хийх боломжтой юу?",
    answer: "Тийм ээ, та манай вэбсайтаас онлайн захиалга хийж болно. Захиалга хийсний дараа бид танд баталгаажуулах имэйл илгээх бөгөөд бүтээгдэхүүнийг хүлээн авсны дараа шинжилгээ эхэлнэ. Үр дүнг онлайн харах боломжтой."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-white to-zinc-50">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#D4AF37]/20 to-[#FFD700]/20 rounded-2xl mb-6">
            <HelpCircle className="w-8 h-8 text-[#D4AF37]" />
          </div>
          <span className="text-[#D4AF37] mb-4 block tracking-wide font-medium">Түгээмэл асуултууд</span>
          <h2 className="text-zinc-900 mb-4 text-4xl md:text-5xl font-bold">
            Асуулт хариулт
          </h2>
          <p className="text-zinc-600 max-w-2xl mx-auto text-lg">
            Алтны шинжилгээний талаарх түгээмэл асуултуудын хариултууд
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 md:px-8 py-6 flex items-center justify-between text-left group"
              >
                <h3 className="text-zinc-900 font-semibold text-lg md:text-xl pr-8 group-hover:text-[#D4AF37] transition-colors">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-zinc-400 group-hover:text-[#D4AF37] transition-colors" />
                </motion.div>
              </button>
              
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 md:px-8 pb-6">
                  <div className="pt-2 border-t border-zinc-100">
                    <p className="text-zinc-600 leading-relaxed mt-4">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 p-8 bg-gradient-to-r from-zinc-900 to-zinc-800 rounded-3xl text-center"
        >
          <h3 className="text-white mb-3 text-2xl font-semibold">
            Өөр асуулт байна уу?
          </h3>
          <p className="text-zinc-300 mb-6 max-w-2xl mx-auto">
            Бидний мэргэжилтнүүд танд туслахдаа баяртай байх болно
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-zinc-900 rounded-xl hover:from-[#FFD700] hover:to-[#D4AF37] transition-all duration-300 font-semibold shadow-lg shadow-[#D4AF37]/20"
          >
            Бидэнтэй холбогдох
          </a>
        </motion.div>
      </div>
    </section>
  );
}

