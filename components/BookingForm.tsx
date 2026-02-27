"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const programs = [
  "Функциональный тренинг",
  "Йога",
  "Бокс",
  "Кроссфит",
];

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="booking" className="py-24 md:py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-accent" />
            <span className="text-accent text-sm font-mono uppercase tracking-widest">
              Запись
            </span>
            <div className="w-8 h-px bg-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Начни сегодня
          </h2>
          <p className="text-gray text-lg">
            Первая пробная тренировка — бесплатно
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true, margin: "-60px" }}
          className="bg-dark-card border border-dark-border rounded-2xl p-6 md:p-10"
        >
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-accent"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Заявка отправлена!</h3>
              <p className="text-gray">
                Мы свяжемся с вами в течение 30 минут
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Имя
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="Как вас зовут?"
                  className="w-full bg-dark border border-dark-border rounded-lg px-4 py-3 text-sm text-white placeholder:text-gray focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium mb-2"
                >
                  Телефон
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  placeholder="+7 (___) ___-__-__"
                  className="w-full bg-dark border border-dark-border rounded-lg px-4 py-3 text-sm text-white placeholder:text-gray focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="program"
                  className="block text-sm font-medium mb-2"
                >
                  Направление
                </label>
                <select
                  id="program"
                  required
                  defaultValue=""
                  className="w-full bg-dark border border-dark-border rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-accent transition-colors appearance-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%2371717A' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 16px center",
                  }}
                >
                  <option value="" disabled>
                    Выберите направление
                  </option>
                  {programs.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-accent hover:bg-accent-hover text-white py-4 rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
              >
                Записаться на пробную тренировку
              </button>

              <p className="text-center text-gray text-xs">
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
