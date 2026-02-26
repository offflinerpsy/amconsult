
import React from 'react';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const PHONE = '+79818062383';
const PHONE_DISPLAY = '+7 981 806 2383';
const EMAIL = 'info@alina-makeeva.ru';
const TG_LINK = 'https://t.me/alina_makeeva'; // TODO: уточнить username TG
// Координаты офиса: ул. Матроса Железняка, 57, СПб
const YANDEX_MAPS_LINK = 'https://yandex.ru/maps/?pt=30.312154,59.996165&z=16&l=map';

const Contact: React.FC = () => {
  return (
    <section
      id="contacts"
      className="bg-white dark:bg-neutral-900 py-20 md:py-32 px-6 md:px-10 lg:px-40 font-display border-t border-gray-100"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-16">
          <span className="text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Локация</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-main dark:text-white">Наши контакты</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">

          {/* Контактные данные */}
          <div className="space-y-10">
            <ContactInfoItem
              icon={<MapPin size={22} />}
              label="Адрес"
              value="Санкт-Петербург, ул. Матроса Железняка 57"
            />
            <ContactInfoItem
              icon={<Phone size={22} />}
              label="Телефон"
              href={`tel:${PHONE}`}
              value={PHONE_DISPLAY}
            />
            <ContactInfoItem
              icon={<Mail size={22} />}
              label="Email"
              href={`mailto:${EMAIL}`}
              value={EMAIL}
            />
            <ContactInfoItem
              icon={<MessageCircle size={22} />}
              label="Telegram"
              href={TG_LINK}
              value="Написать в Telegram"
              external
            />
          </div>

          {/* Яндекс.Карты — кликабельная карточка */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <a
              href={YANDEX_MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-6 p-10 bg-[#F8F6F2] rounded-3xl border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all duration-500"
            >
              <div className="flex items-center gap-5">
                {/* Яндекс.Карты иконка */}
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#C9A66B"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-1">Открыть на карте</p>
                  <p className="font-serif text-xl font-bold text-text-main">A.M. Consult</p>
                </div>
              </div>
              <p className="text-text-secondary text-sm font-light leading-relaxed">
                Санкт-Петербург, ул. Матроса Железняка, 57.<br/>
                Нажмите, чтобы открыть маршрут в Яндекс.Картах.
              </p>
              <div className="flex items-center gap-2 text-primary text-[11px] font-black uppercase tracking-[0.3em] group-hover:gap-4 transition-all">
                <span>Проложить маршрут</span>
                <span>→</span>
              </div>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

interface ContactInfoItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}

const ContactInfoItem: React.FC<ContactInfoItemProps> = ({ icon, label, value, href, external }) => {
  const inner = (
    <div className="flex gap-5 md:gap-7 group cursor-pointer">
      <div className="size-12 md:size-16 rounded-xl md:rounded-[1.5rem] bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-dark transition-all duration-500">
        {icon}
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-[8px] md:text-[9px] font-black text-gray-400 uppercase tracking-[0.3em] mb-1">{label}</p>
        <p className="text-base md:text-xl lg:text-2xl text-text-main dark:text-white font-serif tracking-tight leading-tight group-hover:text-primary transition-colors">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
        {inner}
      </a>
    );
  }
  return inner;
};

export default Contact;
