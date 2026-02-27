"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const trainers = [
  {
    name: "Алексей Воронов",
    role: "Функциональный тренинг, кроссфит",
    experience: "8 лет опыта",
    image:
      "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&q=80",
  },
  {
    name: "Марина Ким",
    role: "Йога, стретчинг",
    experience: "6 лет опыта",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&q=80",
  },
  {
    name: "Дмитрий Сагатов",
    role: "Бокс, ударная техника",
    experience: "10 лет опыта",
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&q=80",
  },
];

export default function Trainers() {
  return (
    <section id="trainers" className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-accent" />
            <span className="text-accent text-sm font-mono uppercase tracking-widest">
              Команда
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-2xl">
            Тренеры, которым доверяют
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {trainers.map((trainer, i) => (
            <motion.div
              key={trainer.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true, margin: "-60px" }}
              className="group relative bg-dark-card border border-dark-border rounded-2xl overflow-hidden hover:border-accent/30 transition-all duration-500"
            >
              <div className="relative h-72 sm:h-80 overflow-hidden">
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-1">{trainer.name}</h3>
                <p className="text-accent text-sm mb-2">{trainer.role}</p>
                <p className="text-gray text-sm">{trainer.experience}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
