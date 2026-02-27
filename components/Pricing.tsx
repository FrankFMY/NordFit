"use client";

import { motion } from "framer-motion";

const plans = [
  {
    name: "Старт",
    price: "14 990",
    period: "/ мес",
    description: "Для тех, кто начинает путь",
    features: [
      "8 групповых тренировок",
      "Доступ в зал с 10:00 до 18:00",
      "Вводная консультация тренера",
      "Раздевалка и душ",
    ],
    highlighted: false,
  },
  {
    name: "Про",
    price: "24 990",
    period: "/ мес",
    description: "Для серьёзных результатов",
    features: [
      "Безлимитные групповые тренировки",
      "4 персональные тренировки",
      "Полный доступ 06:00–23:00",
      "Программа питания",
      "Фитнес-тестирование",
    ],
    highlighted: true,
  },
  {
    name: "Безлимит",
    price: "39 990",
    period: "/ мес",
    description: "Максимум возможностей",
    features: [
      "Всё из тарифа «Про»",
      "8 персональных тренировок",
      "Круглосуточный доступ",
      "Спортивное питание",
      "Массаж — 2 сеанса",
      "Заморозка до 14 дней",
    ],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-accent" />
            <span className="text-accent text-sm font-mono uppercase tracking-widest">
              Тарифы
            </span>
            <div className="w-8 h-px bg-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Инвестиция в себя
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true, margin: "-60px" }}
              className={`relative rounded-2xl p-5 md:p-6 lg:p-8 border transition-all duration-500 ${
                plan.highlighted
                  ? "bg-accent/5 border-accent/40 shadow-[0_0_40px_rgba(59,130,246,0.1)]"
                  : "bg-dark-card border-dark-border hover:border-accent/20"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-medium px-4 py-1 rounded-full">
                  Популярный выбор
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-1">{plan.name}</h3>
                <p className="text-gray text-sm mb-6">{plan.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl lg:text-5xl font-bold">
                    {plan.price}
                  </span>
                  <span className="text-gray text-lg">₸{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-gray-light"
                  >
                    <svg
                      className="w-4 h-4 text-accent mt-0.5 shrink-0"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
                      <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#booking"
                className={`block text-center py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-accent hover:bg-accent-hover text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                    : "bg-dark-hover border border-dark-border hover:border-accent/30 text-white"
                }`}
              >
                Выбрать тариф
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
