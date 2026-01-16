
import React from 'react';
import { motion } from 'framer-motion';

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
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start relative z-10 w-full">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-6 md:gap-8 lg:pr-10 order-2 lg:order-1"
        >
          {/* Trust Indicators at the top left based on screenshot */}
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
              Юридический кабинет А.А. Макеевой
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-serif text-text-main leading-[1.1] tracking-tight">
              Защита, <br className="hidden md:block"/> построенная <br className="hidden md:block"/> на <span className="text-primary italic">экспертизе</span>
            </h1>
            <p className="text-lg md:text-2xl text-text-secondary font-light max-w-xl leading-relaxed">
              Безупречное юридическое сопровождение бизнеса и частных лиц в Санкт-Петербурге.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <button 
              onClick={() => scrollToSection('cta-section')}
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
        </motion.div>

        {/* Hero Image - NO GRADIENT as requested */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative order-1 lg:order-2 h-[300px] md:h-[500px] lg:h-[600px] w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl group border border-gray-100"
        >
          <div 
            className="w-full h-full bg-cover bg-center transition-transform duration-2000 group-hover:scale-110" 
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')" }}
          ></div>
          <div className="absolute top-6 left-6 md:top-10 md:left-10 z-20 flex flex-col gap-1 bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-white/20">
            <p className="text-text-secondary text-[10px] font-black uppercase tracking-[0.3em] opacity-80">Локация</p>
            <p className="text-text-main text-xl md:text-2xl font-serif">Санкт-Петербург</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
