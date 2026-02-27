"use client";

export default function Footer() {
  return (
    <footer className="border-t border-dark-border py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <p className="text-xl font-bold tracking-tight mb-4">
              NORD<span className="text-accent">FIT</span>
            </p>
            <p className="text-gray text-sm leading-relaxed max-w-sm">
              Премиальная фитнес-студия в центре города.
              Современное оборудование, профессиональные тренеры
              и атмосфера, которая мотивирует.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Навигация</h4>
            <div className="flex flex-col gap-2">
              <a href="#programs" className="text-gray text-sm hover:text-white transition-colors">Направления</a>
              <a href="#trainers" className="text-gray text-sm hover:text-white transition-colors">Тренеры</a>
              <a href="#pricing" className="text-gray text-sm hover:text-white transition-colors">Тарифы</a>
              <a href="#booking" className="text-gray text-sm hover:text-white transition-colors">Запись</a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Контакты</h4>
            <div className="flex flex-col gap-2 text-gray text-sm">
              <a href="tel:+74951234567" className="hover:text-white transition-colors">
                +7 (495) 123-45-67
              </a>
              <a href="mailto:hello@nordfit.ru" className="hover:text-white transition-colors">
                hello@nordfit.ru
              </a>
              <p>ул. Большая Дмитровка, 15</p>
              <p>Москва, Россия</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-dark-border">
          <p className="text-gray text-xs">
            &copy; 2025 NordFit. Все права защищены.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-9 h-9 rounded-lg bg-dark-hover border border-dark-border flex items-center justify-center text-gray hover:text-accent hover:border-accent/30 transition-all"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-lg bg-dark-hover border border-dark-border flex items-center justify-center text-gray hover:text-accent hover:border-accent/30 transition-all"
              aria-label="Telegram"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-lg bg-dark-hover border border-dark-border flex items-center justify-center text-gray hover:text-accent hover:border-accent/30 transition-all"
              aria-label="WhatsApp"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
