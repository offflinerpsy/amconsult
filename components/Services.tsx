
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Scale, Building, Briefcase, Users, Home, Lock } from 'lucide-react';

const services = [
  {
    icon: <Scale size={24} />,
    title: 'Арбитражные споры',
    desc: 'Защищаем интересы вашего бизнеса в суде. Эффективное взыскание задолженности и разрешение споров по договорам для восстановления ваших прав.',
  },
  {
    icon: <Briefcase size={24} />,
    title: 'Банкротство физических и юридических лиц',
    desc: 'Полное сопровождение процедуры банкротства. Защитим ваши интересы и имущество на любой стадии — от подачи заявления до завершения расчетов с кредиторами.',
  },
  {
    icon: <Building size={24} />,
    title: 'Абонентское юридическое обслуживание',
    desc: 'Полное правовое сопровождение вашего бизнеса. Решаем текущие задачи и предупреждаем риски, чтобы вы могли сосредоточиться на развитии компании.',
  },
  {
    icon: <Building size={24} />,
    title: 'Корпоративное право',
    desc: 'Юридический фундамент для стабильности и роста вашей компании. От создания бизнеса и регистрации изменений до сопровождения сделок и урегулирования конфликтов между собственниками.',
  },
  {
    icon: <Users size={24} />,
    title: 'Семейное право',
    desc: 'Защищаем ваши интересы в самых деликатных ситуациях: от цивилизованного развода и раздела имущества до составления брачных договоров и разрешения споров.',
  },
  {
    icon: <Home size={24} />,
    title: 'Недвижимость и сделки',
    desc: 'Юридическая чистота вашей недвижимости — наша забота. Проводим комплексную проверку объектов и сопровождаем сделки, чтобы покупка или продажа прошла безопасно.',
  },
];

const Services: React.FC = () => {
  return (
    <>
      <section className="bg-background-light dark:bg-background-dark py-32 px-6 md:px-10 lg:px-40 font-display" id="services">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-24">
            <span className="text-primary text-[10px] font-black uppercase tracking-[0.4em] block mb-6">Направления практики</span>
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-text-main dark:text-white leading-tight">Ключевые направления</h2>
            <div className="w-24 h-1.5 bg-primary mx-auto mt-10 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <ServiceItem key={idx} icon={service.icon} title={service.title} desc={service.desc} />
            ))}
          </div>

          {/* Плашка «не нашли свою ситуацию» */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-16 bg-brand-red rounded-3xl p-10 md:p-14 text-white text-center"
          >
            <p className="font-serif text-2xl md:text-3xl font-bold mb-4 leading-snug">
              Это лишь ключевые направления нашей работы
            </p>
            <p className="text-white/70 text-lg font-light max-w-2xl mx-auto leading-relaxed">
              Если вы не нашли свою ситуацию в списке — просто опишите её нам. Мы специализируемся на комплексных правовых решениях и обязательно найдём способ вам помочь.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Блок конфиденциальность (перенесён из Benefits) */}
      <section className="bg-white dark:bg-neutral-900 py-16 px-6 md:px-10 lg:px-40 border-t border-gray-100 font-display">
        <div className="max-w-[1440px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col md:flex-row items-center gap-8 md:gap-14"
          >
            <div className="flex-shrink-0 w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <Lock size={36} strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-text-main mb-3 tracking-tight">Конфиденциальность</h3>
              <p className="text-text-secondary text-lg font-light leading-relaxed max-w-2xl">
                Абсолютная конфиденциальность. Ваши секреты находятся под защитой закона и нашей профессиональной этики.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

interface ServiceItemProps {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ title, desc, icon }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="group bg-white dark:bg-neutral-900/40 p-8 rounded-3xl border border-gray-100 dark:border-white/5 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 cursor-pointer"
  >
    <div className="flex items-start gap-5">
      <div className="mt-1 text-primary opacity-60 group-hover:opacity-100 transition-opacity shrink-0">
        {icon}
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-start mb-3">
          <h4 className="text-xl font-bold text-text-main dark:text-white tracking-tight font-display leading-tight pr-4">{title}</h4>
          <ArrowUpRight size={20} className="text-gray-300 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 shrink-0 mt-1" />
        </div>
        <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed font-light">{desc}</p>
      </div>
    </div>
  </motion.div>
);

export default Services;
