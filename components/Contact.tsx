
import React, { useState } from 'react';
import { MapPin, Phone, Mail, CheckCircle2, User, PhoneCall, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import InteractiveBook from './InteractiveBook';

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isHotlineHovered, setIsHotlineHovered] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1800);
  };

  const ringVariants = {
    ring: {
      rotate: [0, -10, 10, -10, 10, -10, 10, 0],
      scale: [1, 1.1, 1],
      transition: { duration: 0.5, repeat: Infinity, ease: "easeInOut" }
    },
    idle: { rotate: 0, scale: 1 }
  };

  return (
    <>
      <section id="cta-section" className="w-full bg-[#0A0A0A] py-20 md:py-32 px-6 relative overflow-hidden font-display">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[160px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-20 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 text-primary text-[9px] font-black uppercase tracking-[0.4em] mb-8 border border-primary/30">
                <Sparkles size={12} />
                <span>Прямая связь</span>
              </div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 md:mb-10 text-white leading-tight">
                Готовы обсудить <br/> вашу задачу?
              </h2>
              <p className="text-lg md:text-2xl text-gray-400 font-light max-w-lg mb-10 md:mb-14 leading-relaxed">
                Заполните форму, и мы приступим к анализу вашего дела немедленно. 
              </p>
              
              <div 
                onMouseEnter={() => setIsHotlineHovered(true)}
                onMouseLeave={() => setIsHotlineHovered(false)}
                className="flex items-center gap-5 md:gap-6 group cursor-pointer w-fit"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-3xl bg-primary text-dark flex items-center justify-center shadow-xl shadow-primary/20 transition-all duration-500 transform group-hover:scale-110">
                  <motion.div animate={isHotlineHovered ? "ring" : "idle"} variants={ringVariants}>
                    <Phone size={28} className="md:w-8 md:h-8" strokeWidth={2.5} />
                  </motion.div>
                </div>
                <div>
                   <p className="text-[9px] md:text-xs text-primary uppercase font-black tracking-[0.3em] mb-1">Горячая линия</p>
                   <p className="text-white font-serif text-xl md:text-3xl group-hover:text-primary transition-colors tracking-tight">+7 (812) 000-00-00</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white/5 backdrop-blur-3xl p-8 md:p-16 rounded-[2.5rem] md:rounded-[4rem] border border-white/10 shadow-2xl relative">
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.form key="form" className="w-full space-y-10" onSubmit={handleSubmit}>
                      <div className="space-y-8">
                        <div className="relative group/field">
                          <div className="absolute left-0 bottom-0 h-[1px] bg-white/10 w-full z-10"></div>
                          <div className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-500"><User size={20} /></div>
                          <input className="w-full h-14 pl-10 bg-transparent border-none outline-none text-white text-lg font-light focus:ring-0" placeholder="Ваше имя" type="text" required />
                        </div>
                        <div className="relative group/field">
                          <div className="absolute left-0 bottom-0 h-[1px] bg-white/10 w-full z-10"></div>
                          <div className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-500"><PhoneCall size={20} /></div>
                          <input className="w-full h-14 pl-10 bg-transparent border-none outline-none text-white text-lg font-light focus:ring-0" placeholder="+7 (___) ___-__-__" type="tel" required />
                        </div>
                      </div>
                      <div className="space-y-6">
                        <button className="w-full h-16 md:h-20 bg-primary text-dark font-black rounded-2xl md:rounded-3xl uppercase tracking-[0.3em] text-[11px] md:text-[12px] shadow-xl shadow-primary/20 active:scale-[0.98]">
                          {isLoading ? "Обработка..." : "Связаться с юристом"}
                        </button>
                        <p className="text-[9px] text-gray-500 text-center uppercase tracking-[0.2em] opacity-60">Гарантируем конфиденциальность данных</p>
                      </div>
                    </motion.form>
                  ) : (
                    <motion.div key="success" className="text-center py-6">
                      <div className="w-20 h-20 bg-primary text-dark rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-primary/30">
                        <CheckCircle2 size={40} />
                      </div>
                      <h3 className="text-3xl font-serif text-white mb-4">Принято</h3>
                      <p className="text-gray-400 font-light text-base mb-8">Мы перезвоним вам в ближайшее время.</p>
                      <button onClick={() => setIsSubmitted(false)} className="text-primary text-[10px] font-black uppercase tracking-[0.3em] border-b border-primary/20 pb-1">Назад</button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-neutral-900 py-20 md:py-32 px-6 md:px-10 lg:px-40 font-display overflow-hidden border-b border-gray-100" id="contacts">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 md:gap-20 items-center">
            
            {/* Left Column */}
            <div className="lg:pr-10">
              <span className="text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Локация</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-main dark:text-white mb-10 md:mb-16">Наши контакты</h2>
              <div className="space-y-8 md:space-y-12">
                <ContactInfoItem icon={<MapPin size={22} />} label="Адрес" value="Санкт-Петербург, ул. Матроса Железняка 57" />
                <ContactInfoItem icon={<Phone size={22} />} label="Телефон" value="+7 (812) 000-00-00" />
                <ContactInfoItem icon={<Mail size={22} />} label="Email" value="office@am-consult.pro" />
              </div>
            </div>
            
            {/* Right Column */}
            <div className="w-full flex justify-center lg:justify-end items-center lg:pl-4">
              <InteractiveBook />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Moved from Footer */}
      <section className="w-full h-[400px] md:h-[500px] bg-gray-100 relative grayscale hover:grayscale-0 transition-all duration-700">
         <iframe 
          src="https://yandex.ru/map-widget/v1/?ll=30.312154%2C59.996165&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NjI4Mzc0NhI90KDQvtGB0YHQuNGPLCDQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQsywg0YPQu9C40YbQsCDQnNCw0YLRgNC-0YHQsCDQltC10LvQtdC30L3Rj9C60LAsIDU3IgoNx3H_QRUf_llC&z=16" 
          width="100%" 
          height="100%" 
          frameBorder="0" 
          allowFullScreen={true}
          style={{ border: 0 }}
          title="Yandex Map - A.M. Consult Office"
        ></iframe>
         
         {/* Map Overlay Badge */}
        <div className="absolute top-8 left-8 md:top-12 md:left-40 bg-white p-6 rounded-2xl shadow-2xl border border-primary/20 max-w-[280px] hidden md:block">
           <span className="text-primary text-[9px] font-black uppercase tracking-[0.3em] mb-2 block">Центральный офис</span>
           <h4 className="text-dark font-serif text-lg mb-2">A.M. Consult</h4>
           <p className="text-gray-500 text-xs leading-relaxed font-light">
             Санкт-Петербург, ул. Матроса Железняка, 57.<br/>
             Ждем вас на очную консультацию.
           </p>
        </div>
      </section>
    </>
  );
};

const ContactInfoItem: React.FC<{icon: React.ReactNode, label: string, value: string}> = ({icon, label, value}) => (
  <div className="flex gap-5 md:gap-7 group">
    <div className="size-12 md:size-16 rounded-xl md:rounded-[1.5rem] bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-dark transition-all duration-500">
      {icon}
    </div>
    <div className="flex flex-col justify-center">
      <p className="text-[8px] md:text-[9px] font-black text-gray-400 uppercase tracking-[0.3em] mb-1">{label}</p>
      <p className="text-base md:text-xl lg:text-2xl text-text-main dark:text-white font-serif tracking-tight leading-tight group-hover:text-primary transition-colors">{value}</p>
    </div>
  </div>
);

export default Contact;
