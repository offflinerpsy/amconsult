
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';

const PHONE = '+79818062383';
const PHONE_DISPLAY = '+7 981 806 2383';
const TG_LINK = 'https://t.me/MakeevaAlina88';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      window.scrollTo({
        top: element.offsetTop - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative w-full bg-background-light pt-48 pb-16 md:pb-32 lg:pb-48 px-6 md:px-10 lg:px-40 overflow-hidden min-h-screen flex items-center">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 lg:gap-16 items-start relative z-10 w-full">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-6 md:gap-8 lg:pr-10 order-2 lg:order-1"
        >
          {/* Trust Indicators */}
          <div className="flex items-center gap-12 mb-4">
            <div>
              <p className="text-3xl md:text-4xl font-serif text-primary mb-1">10+</p>
              <p className="text-[9px] md:text-[10px] font-bold text-text-secondary uppercase tracking-widest">Лет практики</p>
            </div>
            <div className="w-px h-10 bg-gray-200"></div>
            <div>
              <p className="text-3xl md:text-4xl font-serif text-primary mb-1">500+</p>
              <p className="text-[9px] md:text-[10px] font-bold text-text-secondary uppercase tracking-widest">Успешных дел</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 md:gap-6 text-left">
            <span className="inline-block w-fit px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] border border-primary/20">
              Центр правовых решений Макеевой А.А.
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif text-text-main leading-[1.1] tracking-tight">
              Ваш успех <br className="hidden md:block"/> по праву
            </h1>
            <p className="text-xl md:text-2xl lg:text-[1.7rem] text-text-secondary font-light max-w-xl leading-relaxed">
              Юридическое сопровождение бизнеса и частных лиц в Санкт-Петербурге.
            </p>
          </div>

          {/* Основные CTA */}
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <button
              onClick={() => scrollToSection('contacts')}
              className="w-full sm:w-auto px-10 py-5 bg-primary text-dark font-black uppercase tracking-[0.3em] text-[12px] md:text-[13px] rounded-none hover:shadow-2xl hover:shadow-primary/30 transition-all active:scale-95"
            >
              Консультация
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="w-full sm:w-auto px-10 py-5 border border-primary text-dark font-black uppercase tracking-[0.3em] text-[12px] md:text-[13px] rounded-none hover:bg-primary hover:text-dark transition-all active:scale-95"
            >
              Наши услуги
            </button>
          </div>

          {/* Кнопки связи */}
          <div className="flex items-center gap-4 mt-2">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-text-secondary">Связаться с нами:</span>
            <a
              href={`tel:${PHONE}`}
              className="flex items-center gap-2 px-5 py-2.5 border border-gray-200 rounded-none text-dark hover:border-primary hover:text-primary transition-all text-sm font-bold group"
              aria-label="Позвонить"
            >
              <Phone size={15} className="group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline text-[11px] tracking-wider">{PHONE_DISPLAY}</span>
            </a>
            <a
              href={TG_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 border border-gray-200 rounded-none text-dark hover:border-primary hover:text-primary transition-all text-sm font-bold group"
              aria-label="Написать в Telegram"
            >
              <MessageCircle size={15} className="group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline text-[11px] tracking-wider">Telegram</span>
            </a>
          </div>
        </motion.div>

        {/* Акции блок вместо фото */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative order-1 lg:order-2 w-full"
        >
          <div className="flex flex-col gap-4">
            {/* Заголовок блока */}
            <div className="flex items-center gap-4 mb-2">
              <span className="h-px w-10 bg-primary"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Специальные предложения</span>
            </div>

            {/* Акции — компактная сетка 2 колонки */}
            <div className="grid grid-cols-2 gap-3">
              {/* Акция 1 */}
              <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 group aspect-square flex flex-col justify-center">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors mb-3">
                  <span className="text-primary font-serif font-bold text-base">1</span>
                </div>
                <h3 className="font-bold text-base text-text-main tracking-tight mb-1.5 leading-tight">Бесплатная консультация</h3>
                <p className="text-text-secondary text-xs leading-relaxed font-light">
                  Первичный анализ ситуации и честный прогноз исхода дела.
                </p>
              </div>

              {/* Акция 2 */}
              <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 group aspect-square flex flex-col justify-center">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors mb-3">
                  <span className="text-primary font-serif font-bold text-base">2</span>
                </div>
                <h3 className="font-bold text-base text-text-main tracking-tight mb-1.5 leading-tight">Аудит договора</h3>
                <p className="text-text-secondary text-xs leading-relaxed font-light">
                  Бесплатный разбор шаблона. Выявим скрытые риски.
                </p>
              </div>
            </div>

            {/* Декоративная плашка */}
            <div className="bg-brand-red rounded-2xl p-6 text-white">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-2">Локация</p>
              <p className="font-serif text-xl font-bold mb-1">Санкт-Петербург</p>
              <p className="text-white/60 text-sm font-light">ул. Матроса Железняка, 57</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
