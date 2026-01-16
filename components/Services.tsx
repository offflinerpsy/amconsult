
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building, 
  User, 
  ArrowUpRight, 
  Scale as ScaleIcon, 
  TrendingUp, 
  Heart, 
  Home, 
  ScrollText 
} from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section className="bg-background-light dark:bg-background-dark py-32 px-6 md:px-10 lg:px-40 font-display" id="services">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-24">
          <span className="text-primary text-[10px] font-black uppercase tracking-[0.4em] block mb-6">Направления практики</span>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-text-main dark:text-white leading-tight">Сферы компетенций</h2>
          <div className="w-24 h-1.5 bg-primary mx-auto mt-10 rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Section: For Business */}
          <div>
            <div className="flex items-center gap-6 mb-12">
              <div className="p-5 rounded-2xl bg-primary/10 text-primary border border-primary/20">
                <Building size={36} strokeWidth={1.5} />
              </div>
              <h3 className="text-3xl md:text-4xl font-serif font-bold dark:text-white tracking-tight">Для бизнеса</h3>
            </div>
            
            <div className="space-y-6">
              <ServiceItem 
                icon={<ScaleIcon size={24} />}
                title="Арбитражные споры" 
                desc="Взыскание дебиторской задолженности, споры по договорам подряда и аренды, представление интересов в судах всех уровней."
              />
              <ServiceItem 
                icon={<Building size={24} />}
                title="Корпоративное право" 
                desc="M&A сделки, регистрация изменений, разрешение акционерных конфликтов и структурирование сложных активов."
              />
              <ServiceItem 
                icon={<TrendingUp size={24} />}
                title="Налоговый аудит" 
                desc="Защита при проверках ФНС, оптимизация налоговых рисков и построение безопасных финансовых моделей."
              />
            </div>
          </div>

          {/* Section: For Individuals */}
          <div>
            <div className="flex items-center gap-6 mb-12">
              <div className="p-5 rounded-2xl bg-primary/10 text-primary border border-primary/20">
                <User size={36} strokeWidth={1.5} />
              </div>
              <h3 className="text-3xl md:text-4xl font-serif font-bold dark:text-white tracking-tight">Для частных лиц</h3>
            </div>
            
            <div className="space-y-6">
              <ServiceItem 
                icon={<Heart size={24} />}
                title="Семейное право" 
                desc="Раздел сложного имущества, брачные контракты, семейные трасты и защита интересов детей при спорах."
              />
              <ServiceItem 
                icon={<Home size={24} />}
                title="Недвижимость" 
                desc="Юридическая проверка объектов, сопровождение элитных сделок, решение кадастровых вопросов и приватизация."
              />
              <ServiceItem 
                icon={<ScrollText size={24} />}
                title="Наследственное право" 
                desc="Планирование преемственности, оспаривание завещаний, трансграничное наследство и защита долей."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ServiceItemProps {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const ServiceItem: React.FC<ServiceItemProps> = ({title, desc, icon}) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="group bg-white dark:bg-neutral-900/40 p-8 rounded-3xl border border-gray-100 dark:border-white/5 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 cursor-pointer"
  >
    <div className="flex items-start gap-6">
      <div className={`mt-1 text-primary opacity-60 group-hover:opacity-100 transition-opacity`}>
        {icon}
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-center mb-3">
          <h4 className="text-2xl font-bold text-text-main dark:text-white tracking-tight font-display">{title}</h4>
          <ArrowUpRight size={20} className="text-gray-300 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
        </div>
        <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed font-light">{desc}</p>
      </div>
    </div>
  </motion.div>
);

export default Services;
