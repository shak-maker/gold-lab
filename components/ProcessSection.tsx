"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

const processes = [
  {
    id: 1,
    image: "/process-1.jpg",
    title: "Хайлуулах & Акт авах",
    description: "Үйлчлүүлэгч үнэт металл хайлах цехэд металлаа хайлуулж, гулдмай болгон хайлалтын акт авна.",
    color: "#fa9906",
  },
  {
    id: 2,
    image: "/process-2.jpg",
    title: "Дээж авах & Хуваарилах",
    description: "Дээж хүлээн авах өрөөнд гулдмайнаас дээж авна. Үүнийг хоёр чиглэлд хуваарилна:",
    details: [
      { label: "Гулдмай:", text: "Зориулалтын уутанд хийж битүүмжлэн Банк руу илгээнэ." },
      { label: "Дээж:", text: "Химийн шинжилгээний лаборатори руу шилжүүлнэ." },
    ],
    color: "#FFD700",
  },
  {
    id: 3,
    image: "/process-3.jpg",
    title: "Лабораторийн шинжилгээ",
    description: "Лабораторид химийн шинжилгээ хийж, тэмдэглэл хөтлөн, үр дүнг олон улсын стандартын дагуу боловсруулна.",
    color: "#fa9906",
  },
  {
    id: 4,
    image: "/process-4.jpg",
    title: "Баталгаажуулалт & Бүртгэл",
    description: "Лабораторийн эрхлэгч сорилтын үр дүнг журналд бүртгэж, эцсийн байдлаар хянаж баталгаажуулна.",
    color: "#FFD700",
  },
  {
    id: 5,
    image: "/process-5.jpg",
    title: "Төлбөр & Хариу олгох",
    description: "Үйлчлүүлэгч төлбөр тооцоог хийнэ. Сорилтын үр дүнгийн хуудсыг үйлчлүүлэгчээр гарын үсэг зуруулж 2 хувийг олгоно. (Үлдэх хувь лабораторид хадгалагдана)",
    color: "#fa9906",
  },
  {
    id: 6,
    image: "/process-6.jpg",
    title: "Дээж буцаан олгох",
    description: "Монгол банкнаас экспортод гаргасан үнэт металлын хариу ирсэний дараа хүсэлт гаргагчид шинжилгээнд ашигласан дээжийн үлдэгдлийг буцаан олгож, бүртгэлд гарын үсэг зуруулна.",
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
          className="text-center mb-20"
        >
          <h2 className="text-zinc-900 mb-4 text-4xl font-bold">Сорьц тогтоох үйл явц</h2>
          <p className="text-zinc-600 max-w-2xl mx-auto text-lg">
            Таны үнэт металл бидний хяналтад дараах дамжлагаар баталгааждаг
          </p>
        </motion.div>

        <div className="relative">
          {/* Central Vertical Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#fa9906] transform -translate-x-1/2 z-0" />

          <div className="relative space-y-16 md:space-y-20">
            {processes.map((process, index) => {
              const isEven = index % 2 === 0;
              const isLast = index === processes.length - 1;
              // Even steps: image left, text right
              // Odd steps: image right, text left

              return (
                <motion.div
                  key={process.id}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative flex items-center"
                >
                  {/* Image Card - Left (Even steps) */}
                  {isEven && (
                    <motion.div
                      className="hidden md:block flex-1"
                      initial={{ opacity: 0, x: -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <motion.div
                        className="bg-white rounded-2xl overflow-hidden shadow-lg border border-zinc-200 hover:shadow-2xl transition-all duration-300 group"
                        onMouseEnter={() => setHoveredId(process.id)}
                        onMouseLeave={() => setHoveredId(null)}
                        whileHover={{ y: -6 }}
                      >
                        <div className="relative w-full aspect-[4/3] overflow-hidden">
                          <Image
                            src={process.image}
                            alt={process.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              target.parentElement!.style.background = `linear-gradient(135deg, ${process.color}15, ${process.color}05)`;
                            }}
                          />
                        </div>
                      </motion.div>
                    </motion.div>
                  )}

                  {/* Center Timeline Node */}
                  <div className="hidden md:flex flex-shrink-0 items-center justify-center w-16 h-16 relative z-10">
                    <motion.div
                      className="w-6 h-6 bg-[#fa9906] rounded-full border-4 border-white shadow-xl"
                      whileHover={{ scale: 1.3 }}
                      transition={{ duration: 0.2 }}
                    />
                    {!isLast && (
                      <motion.div
                        className="absolute top-full w-0.5 h-20 bg-[#fa9906]"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                      />
                    )}
                  </div>

                  {/* Text Content - Right (Even steps) */}
                  {isEven && (
                    <motion.div
                      className="hidden md:block flex-1 flex justify-start"
                      initial={{ opacity: 0, x: 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <div className="pl-8 max-w-lg w-full">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-[#fa9906] rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold text-base">
                              {String(process.id).padStart(2, "0")}
                            </span>
                          </div>
                          <h3 className="text-zinc-900 font-bold text-2xl leading-tight text-left">
                            {process.title}
                          </h3>
                        </div>
                        <p className="text-zinc-600 text-base leading-relaxed mb-4 text-left">
                          {process.description}
                        </p>
                        {process.details && (
                          <ul className="text-zinc-600 text-sm space-y-2">
                            {process.details.map((detail, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-[#fa9906] mt-1 flex-shrink-0">•</span>
                                <span className="text-left"><strong>{detail.label}</strong> {detail.text}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </motion.div>
                  )}

                  {/* Text Content - Left (Odd steps) */}
                  {!isEven && (
                    <motion.div
                      className="hidden md:block flex-1 flex justify-end"
                      initial={{ opacity: 0, x: -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <div className="pr-8 max-w-lg w-full">
                        <div className="flex items-center justify-end gap-4 mb-4">
                          <h3 className="text-zinc-900 font-bold text-2xl leading-tight text-right">
                            {process.title}
                          </h3>
                          <div className="w-12 h-12 bg-[#fa9906] rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold text-base">
                              {String(process.id).padStart(2, "0")}
                            </span>
                          </div>
                        </div>
                        <p className="text-zinc-600 text-base leading-relaxed mb-4 text-right">
                          {process.description}
                        </p>
                        {process.details && (
                          <ul className="text-zinc-600 text-sm space-y-2">
                            {process.details.map((detail, idx) => (
                              <li key={idx} className="flex items-start gap-2 justify-end">
                                <span className="text-right"><strong>{detail.label}</strong> {detail.text}</span>
                                <span className="text-[#fa9906] mt-1 flex-shrink-0">•</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </motion.div>
                  )}

                  {/* Image Card - Right (Odd steps) */}
                  {!isEven && (
                    <motion.div
                      className="hidden md:block flex-1"
                      initial={{ opacity: 0, x: 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <motion.div
                        className="bg-white rounded-2xl overflow-hidden shadow-lg border border-zinc-200 hover:shadow-2xl transition-all duration-300 group"
                        onMouseEnter={() => setHoveredId(process.id)}
                        onMouseLeave={() => setHoveredId(null)}
                        whileHover={{ y: -6 }}
                      >
                        <div className="relative w-full aspect-[4/3] overflow-hidden">
                          <Image
                            src={process.image}
                            alt={process.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              target.parentElement!.style.background = `linear-gradient(135deg, ${process.color}15, ${process.color}05)`;
                            }}
                          />
                        </div>
                      </motion.div>
                    </motion.div>
                  )}

                  {/* Mobile Layout */}
                  <div className="md:hidden w-full">
                    <motion.div
                      className="bg-white rounded-2xl overflow-hidden shadow-lg border border-zinc-200"
                      onMouseEnter={() => setHoveredId(process.id)}
                      onMouseLeave={() => setHoveredId(null)}
                    >
                      {/* Image */}
                      <div className="relative w-full h-56 overflow-hidden">
                        <Image
                          src={process.image}
                          alt={process.title}
                          fill
                          className="object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            target.parentElement!.style.background = `linear-gradient(135deg, ${process.color}15, ${process.color}05)`;
                          }}
                        />
                      </div>
                      
                      {/* Content */}
                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 bg-[#fa9906] rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold text-sm">
                              {String(process.id).padStart(2, "0")}
                            </span>
                          </div>
                          <h3 className="text-zinc-900 font-bold text-lg flex-1">
                            {process.title}
                          </h3>
                        </div>
                        <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                          {process.description}
                        </p>
                        {process.details && (
                          <ul className="text-zinc-600 text-sm space-y-2">
                            {process.details.map((detail, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-[#fa9906] mt-1">•</span>
                                <span><strong>{detail.label}</strong> {detail.text}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

