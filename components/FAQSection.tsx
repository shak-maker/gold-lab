"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Сорьц тогтоох шинжилгээний хариу хэр хурдан гардаг вэ?",
    answer: "Бидний стандарт шинжилгээ нь ихэвчлэн 2-4 цагийн дотор дуусдаг. Яаралтай шинжилгээний хувьд 2 цагийн дотор үр дүнг өгөх боломжтой."
  },
  {
    question: "Шинжилгээний үр дүн хэр найдвартай вэ?",
    answer: "Манай лаборатори нь ISO 17025:2018 стандартад нийцсэн. Бидний шинжилгээний нарийвчлал 99.9% байдаг. Бүх шинжилгээ нь олон удаагийн баталгаажуулалтаар дамжин, нарийвчилсан тайлан гаргадаг."
  },
  {
    question: "Ямар бүтээгдэхүүн шинжилдэг вэ?",
    answer: "Бид үнэт металл болох алт болон мөнгөн гулдмайн сорьц тогтоох шинжилгээг хийдэг."
  },
  {
    question: "Шинжилгээний тайланг хаана ашиглаж болох вэ?",
    answer: "Манай баталгаажсан /тайлан/ -г лабраторийн шинжилгээний сорилтын үр дүнг Монголбанк болон арилжааны банкуудад алт худалдах, банкны зээл авах, үнэлгээ хийх зэрэг олон зорилгоор ашиглаж болно."
  },
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
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#fa9906]/20 to-[#FFD700]/20 rounded-2xl mb-6">
            <HelpCircle className="w-8 h-8 text-[#fa9906]" />
          </div>
          <span className="text-[#fa9906] mb-4 block tracking-wide font-medium">Түгээмэл асуултууд</span>
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
                <h3 className="text-zinc-900 font-semibold text-lg md:text-xl pr-8 group-hover:text-[#fa9906] transition-colors">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-zinc-400 group-hover:text-[#fa9906] transition-colors" />
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
      </div>
    </section>
  );
}

