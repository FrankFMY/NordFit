"use client";

import { motion } from "framer-motion";

const programs = [
  {
    title: "Функциональный тренинг",
    description:
      "Комплексные тренировки на все группы мышц. Развивает силу, выносливость и координацию в каждом движении.",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M6.5 6.5L17.5 17.5" />
        <path d="M3 9.5V3.5h6" />
        <path d="M21 14.5v6h-6" />
        <path d="M14.5 3h6v6" />
        <path d="M9.5 21H3.5v-6" />
      </svg>
    ),
  },
  {
    title: "Йога",
    description:
      "Баланс тела и разума. Хатха, виньяса и восстановительные практики для любого уровня подготовки.",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="12" cy="5" r="2" />
        <path d="M12 7v5" />
        <path d="M8 20l4-8 4 8" />
        <path d="M6 12l6 0" />
        <path d="M18 12h-6" />
      </svg>
    ),
  },
  {
    title: "Бокс",
    description:
      "Техника ударов, работа на мешках и спарринг. Сбрось стресс, прокачай реакцию и уверенность в себе.",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 11h-1a4 4 0 00-4 4v1a2 2 0 01-2 2H9a2 2 0 01-2-2v-3a8 8 0 018-8h3" />
        <path d="M18 7V4l3 3-3 3" />
      </svg>
    ),
  },
  {
    title: "Кроссфит",
    description:
      "Высокоинтенсивные тренировки, объединяющие тяжёлую атлетику, гимнастику и кардио. Для тех, кто готов.",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M12 2v4" />
        <path d="M12 18v4" />
        <path d="M4.93 4.93l2.83 2.83" />
        <path d="M16.24 16.24l2.83 2.83" />
        <path d="M2 12h4" />
        <path d="M18 12h4" />
        <path d="M4.93 19.07l2.83-2.83" />
        <path d="M16.24 7.76l2.83-2.83" />
      </svg>
    ),
  },
];

export default function Programs() {
  return (
    <section id="programs" className="py-24 md:py-32 px-6">
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
              Направления
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-2xl">
            Выбери свой путь к результату
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {programs.map((program, i) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true, margin: "-60px" }}
              className="group relative bg-dark-card border border-dark-border rounded-2xl p-6 lg:p-8 hover:border-accent/30 transition-all duration-500"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                  {program.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3">{program.title}</h3>
                <p className="text-gray text-sm leading-relaxed">
                  {program.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
