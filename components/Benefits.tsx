
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ShieldCheck, Hourglass, Scale, Lock } from 'lucide-react';

const benefits = [
  {
    icon: <ShieldCheck size={32} />,
    title: "Стратегия защиты",
    description: "Мы не действуем шаблонно. Каждое дело — это шахматная партия, где мы просчитываем ходы наперед."
  },
  {
    icon: <Lock size={32} />,
    title: "Адвокатская тайна",
    description: "Абсолютная конфиденциальность. Ваши секреты находятся под защитой закона и нашей профессиональной этики."
  },
  {
    icon: <Scale size={32} />,
    title: "Честный прогноз",
    description: "Мы не обещаем невозможного. Вы получаете объективную оценку перспектив дела на первой консультации."
  },
  {
    icon: <Hourglass size={32} />,
    title: "Контроль времени",
    description: "В праве сроки решают всё. Мы работаем оперативно, чтобы вы не потеряли драгоценное время."
  }
];

const Benefits: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} id="benefits" className="py-24 md:py-36 bg-[#F3F2EF] overflow-hidden font-display relative">
      {/* Декоративный фон (большая буква) */}
      <div className="absolute top-0 right-0 opacity-[0.03] pointer-events-none select-none overflow-hidden">
        <span className="text-[40rem] font-serif leading-none font-bold text-brand-red">A</span>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-40 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
               <span className="h-px w-12 bg-brand-red"></span>
               <span className="text-brand-red text-[10px] font-black uppercase tracking-[0.4em]">Наши ценности</span>
            </div>
            <h2 className="font-serif text-4xl md:text-6xl text-text-main font-bold leading-tight">
              Почему доверители <br/> <span className="text-primary italic">выбирают нас</span>
            </h2>
          </div>
          <div className="hidden md:block pb-4">
             <p className="text-text-secondary text-sm max-w-xs font-light leading-relaxed border-l border-gray-300 pl-6">
               Мы создаем правовую среду, в которой ваш бизнес и семья находятся в полной безопасности.
             </p>
          </div>
        </div>

        {/* Desktop & Mobile Wrapper */}
        <div className="w-full">
          {/* Mobile: Horizontal Scroll (Snap) | Desktop: Grid */}
          <div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 pb-8 md:pb-0 scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0">
            
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative shrink-0 w-[85vw] sm:w-[350px] md:w-auto snap-center"
              >
                {/* Акцентная карточка */}
                <div className="h-full bg-brand-red text-white p-8 md:p-10 rounded-t-[2rem] rounded-br-[2rem] shadow-2xl hover:shadow-[0_20px_40px_rgba(99,9,17,0.3)] transition-all duration-500 hover:-translate-y-2 border border-white/10 flex flex-col justify-between min-h-[380px]">
                  
                  {/* Верхняя часть с иконкой */}
                  <div>
                    <div className="mb-8 flex justify-between items-start">
                      {/* Золотая печать для иконки */}
                      <div className="w-16 h-16 rounded-full border border-primary/30 bg-gradient-to-br from-primary/20 to-transparent flex items-center justify-center text-primary relative overflow-hidden group-hover:scale-110 transition-transform duration-500">
                        <div className="absolute inset-0 bg-primary/10 blur-md"></div>
                        <div className="relative z-10 drop-shadow-lg">
                          {benefit.icon}
                        </div>
                      </div>
                      <span className="text-primary/20 font-serif text-5xl font-bold italic">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="text-2xl font-serif font-bold mb-6 tracking-wide group-hover:text-primary transition-colors duration-300">
                      {benefit.title}
                    </h3>
                  </div>

                  {/* Описание */}
                  <div className="relative">
                    <div className="w-12 h-px bg-primary/50 mb-6 group-hover:w-full transition-all duration-700"></div>
                    <p className="text-white/70 font-light text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default Benefits;
