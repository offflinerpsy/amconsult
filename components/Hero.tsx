
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';

const PHONE = '+79818062383';
const PHONE_DISPLAY = '+7 981 806 2383';
const TG_LINK = 'https://t.me/MakeevaAlina88';

const promos = [
  {
    title: 'Бесплатная консультация',
    desc: 'Первичный анализ вашей ситуации. Честный прогноз исхода дела и стратегия будущей защиты — без скрытых платежей.',
    icon: '→',
  },
  {
    title: 'Аудит договора для бизнеса',
    desc: 'Бесплатный экспертный разбор вашего договора. Выявим скрытые риски, «подводные камни» и слабые места.',
    icon: '⚖',
  },
  {
    title: 'Сопровождение сделок',
    desc: 'Полная юридическая поддержка на всех этапах сделки — от проверки контрагента до подписания документов.',
    icon: '✓',
  },
];

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
};

const PromosCarousel: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % promos.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + promos.length) % promos.length);
  }, []);

  // Автопрокрутка каждые 5 секунд
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const promo = promos[current];

  return (
    <div className="flex flex-col gap-5">
      {/* Заголовок */}
      <div className="flex items-center gap-4">
        <span className="h-px w-10 bg-primary"></span>
        <span className="text-[11px] font-black uppercase tracking-[0.4em] text-primary">Специальные предложения</span>
      </div>

      {/* Карусель — квадратная карточка */}
      <div className="relative bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden aspect-square">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 flex flex-col justify-center p-8 lg:p-10"
          >
            <span className="text-5xl lg:text-6xl mb-6 block">{promo.icon}</span>
            <h3 className="font-bold text-2xl lg:text-3xl text-text-main tracking-tight mb-4 leading-tight">{promo.title}</h3>
            <p className="text-text-secondary text-base lg:text-lg leading-relaxed font-light">
              {promo.desc}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Навигация */}
        <div className="absolute bottom-5 left-8 lg:left-10 right-8 lg:right-10 flex items-center justify-between">
          <div className="flex gap-2">
            {promos.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === current ? 'w-8 bg-primary' : 'w-3 bg-gray-200 hover:bg-gray-300'
                }`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button onClick={prev} className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
              <ChevronLeft size={16} />
            </button>
            <button onClick={next} className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Локация */}
      <div className="bg-brand-red rounded-2xl p-8 lg:p-10 text-white">
        <p className="text-[11px] font-black uppercase tracking-[0.4em] text-primary mb-3">Локация</p>
        <p className="font-serif text-2xl lg:text-3xl font-bold mb-2">Санкт-Петербург</p>
        <p className="text-white/60 text-base lg:text-lg font-light">ул. Матроса Железняка, 57</p>
      </div>
    </div>
  );
};

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
          {/* Большой логотип */}
          <div className="mb-2">
            <svg
              viewBox="180 260 240 160"
              xmlns="http://www.w3.org/2000/svg"
              className="h-40 sm:h-48 md:h-56 lg:h-64 w-auto"
            >
              <g>
                <text x="275" y="397" textAnchor="middle" fill="#630911" fontFamily="'Montserrat', 'Manrope', sans-serif" fontSize="14" fontWeight="600" letterSpacing="3">КОНСАЛТИНГ</text>
                <rect x="219.652" y="402.675" fill="#630911" width="110.66" height="0.961"/>
                <g>
                  <path fill="#630911" d="M224.542,412.083c0.22,0.252,0.33,0.58,0.33,0.984c0,0.529-0.188,0.932-0.561,1.215s-0.921,0.426-1.645,0.426h-2.691v-6.077h2.526c0.649,0,1.155,0.133,1.52,0.399c0.364,0.267,0.546,0.65,0.546,1.156c0,0.34-0.087,0.627-0.259,0.862c-0.175,0.235-0.418,0.41-0.729,0.525C224,411.662,224.322,411.831,224.542,412.083z M220.61,411.386h1.858c0.468,0,0.829-0.098,1.081-0.289s0.377-0.468,0.377-0.832s-0.126-0.643-0.377-0.834c-0.251-0.189-0.612-0.287-1.081-0.287h-1.858V411.386z M224.238,413.025c0-0.764-0.523-1.146-1.57-1.146h-2.058v2.316h2.058C223.715,414.195,224.238,413.806,224.238,413.025z"/>
                  <path fill="#630911" d="M230.367,413.084h-3.386l-0.729,1.624h-0.669l2.779-6.077h0.632l2.779,6.077h-0.677L230.367,413.084z M230.133,412.564l-1.459-3.263l-1.458,3.263H230.133z"/>
                  <path fill="#630911" d="M240.383,408.632v6.077h-7.447v-6.077h0.633v5.521h2.778v-5.521h0.633v5.521h2.77v-5.521H240.383z"/>
                  <path fill="#630911" d="M249.48,408.632l-2.762,5.113c-0.197,0.362-0.426,0.636-0.689,0.811c-0.263,0.175-0.551,0.266-0.863,0.266c-0.232,0-0.48-0.056-0.746-0.167l0.182-0.52c0.208,0.081,0.399,0.123,0.573,0.123c0.399,0,0.726-0.217,0.981-0.653l0.173-0.292l-2.465-4.681h0.686l2.118,4.115l2.171-4.115H249.48z"/>
                  <path fill="#630911" d="M251.454,414.361c-0.483-0.266-0.862-0.636-1.137-1.107c-0.275-0.471-0.413-1-0.413-1.585c0-0.583,0.138-1.111,0.413-1.583c0.274-0.471,0.655-0.841,1.141-1.107c0.485-0.266,1.031-0.399,1.633-0.399c0.45,0,0.868,0.077,1.25,0.226c0.382,0.152,0.706,0.369,0.972,0.66l-0.408,0.406c-0.475-0.478-1.074-0.718-1.797-0.718c-0.479,0-0.917,0.108-1.31,0.329c-0.395,0.219-0.702,0.52-0.925,0.904c-0.222,0.38-0.333,0.809-0.333,1.282c0,0.477,0.111,0.904,0.333,1.286c0.224,0.382,0.531,0.683,0.925,0.904c0.393,0.219,0.831,0.329,1.31,0.329c0.729,0,1.329-0.242,1.797-0.729l0.408,0.406c-0.266,0.291-0.592,0.512-0.977,0.664c-0.385,0.156-0.802,0.231-1.254,0.231C252.48,414.761,251.938,414.628,251.454,414.361z"/>
                  <path fill="#630911" d="M261.754,408.632v6.077h-0.633v-5.52h-3.845v5.52h-0.634v-6.077H261.754z"/>
                  <path fill="#630911" d="M268.1,414.153v0.555h-4.297v-6.077h4.167v0.557h-3.525v2.162h3.142v0.546h-3.142v2.256H268.1z"/>
                  <path fill="#630911" d="M269.506,408.632l1.727,2.405l1.719-2.405h0.755l-2.075,2.917l2.239,3.16h-0.755l-1.884-2.614l-1.883,2.614h-0.738l2.231-3.134l-2.075-2.943H269.506z"/>
                  <path fill="#630911" d="M276.858,412.086h2.274v0.54h-2.274V412.086z"/>
                  <path fill="#630911" d="M288.063,408.632v6.077h-0.632v-5.52h-3.846v5.52h-0.634v-6.077H288.063z"/>
                  <path fill="#630911" d="M291.141,414.356c-0.488-0.268-0.87-0.638-1.146-1.107c-0.275-0.468-0.412-0.995-0.412-1.58c0-0.583,0.137-1.111,0.412-1.58c0.275-0.468,0.657-0.837,1.146-1.105c0.491-0.27,1.035-0.405,1.636-0.405c0.603,0,1.146,0.133,1.629,0.399c0.482,0.266,0.864,0.636,1.14,1.107c0.279,0.473,0.417,1,0.417,1.583c0,0.585-0.138,1.114-0.417,1.585c-0.276,0.471-0.658,0.841-1.14,1.107c-0.483,0.267-1.026,0.399-1.629,0.399C292.176,414.761,291.631,414.626,291.141,414.356z M294.08,413.862c0.387-0.217,0.69-0.519,0.911-0.904c0.221-0.383,0.33-0.813,0.33-1.289c0-0.473-0.109-0.904-0.33-1.288c-0.221-0.385-0.523-0.685-0.911-0.902c-0.389-0.217-0.823-0.326-1.303-0.326s-0.915,0.108-1.307,0.326c-0.391,0.217-0.697,0.517-0.92,0.902c-0.222,0.384-0.334,0.814-0.334,1.288c0,0.477,0.112,0.906,0.334,1.289c0.223,0.385,0.529,0.687,0.92,0.904c0.392,0.217,0.827,0.326,1.307,0.326S293.691,414.08,294.08,413.862z"/>
                  <path fill="#630911" d="M304.886,408.632v6.077h-0.634v-5.52h-3.845v5.52h-0.635v-6.077H304.886z"/>
                  <path fill="#630911" d="M311.032,409.189c0.438,0.368,0.658,0.879,0.658,1.527c0,0.648-0.221,1.156-0.658,1.521c-0.441,0.37-1.048,0.554-1.821,0.554h-1.633v1.918h-0.645v-6.077h2.277C309.984,408.632,310.591,408.818,311.032,409.189z M310.571,411.831c0.319-0.263,0.479-0.634,0.479-1.114c0-0.494-0.159-0.871-0.479-1.135c-0.316-0.263-0.777-0.393-1.38-0.393h-1.613v3.038h1.613C309.794,412.227,310.255,412.093,310.571,411.831z"/>
                  <path fill="#630911" d="M316.596,413.084h-3.385l-0.729,1.624h-0.669l2.776-6.077h0.634l2.778,6.077h-0.678L316.596,413.084z M316.36,412.564l-1.457-3.263l-1.457,3.263H316.36z"/>
                  <path fill="#630911" d="M323.732,412.083c0.217,0.252,0.329,0.58,0.329,0.984c0,0.529-0.186,0.932-0.561,1.215c-0.371,0.284-0.921,0.426-1.643,0.426h-2.694v-6.077h2.529c0.645,0,1.152,0.133,1.517,0.399c0.365,0.267,0.547,0.65,0.547,1.156c0,0.34-0.088,0.627-0.259,0.862c-0.176,0.235-0.417,0.41-0.729,0.525C323.189,411.662,323.512,411.831,323.732,412.083z M319.798,411.386h1.86c0.466,0,0.827-0.098,1.079-0.289s0.379-0.468,0.379-0.832s-0.127-0.643-0.379-0.834c-0.252-0.189-0.613-0.287-1.079-0.287h-1.86V411.386z M323.428,413.025c0-0.764-0.525-1.146-1.569-1.146h-2.061v2.316h2.061C322.902,414.195,323.428,413.806,323.428,413.025z"/>
                  <path fill="#630911" d="M330.354,408.632l-2.761,5.113c-0.196,0.362-0.427,0.636-0.69,0.811c-0.263,0.175-0.55,0.266-0.861,0.266c-0.231,0-0.483-0.056-0.75-0.167l0.186-0.52c0.207,0.081,0.399,0.123,0.571,0.123c0.399,0,0.729-0.217,0.981-0.653l0.175-0.292l-2.466-4.681h0.687l2.115,4.115l2.173-4.115H330.354z"/>
                </g>
                <g>
                  <path fill="#630911" d="M329.586,296.519c0.186-0.237,0.284-0.532,0.207-0.971c-0.077-0.406-0.256-0.478-0.655-0.555c-0.938-0.186-1.979-0.125-2.932-0.142c-0.834-0.015-1.615-0.118-2.562-0.074c-2.883,0.13-3.741,1.412-4.337,2.922c-4.307,10.91-8.713,22.451-13.019,33.152l-1.722,4.274c-2.606,6.477-5.236,12.947-7.913,19.543l-2.277,5.616c-1.601-3.857-5.514-13.426-10.375-25.434c0.352-0.005,0.704-0.009,1.044-0.009c2.044,0,3.575,0.023,4.531,0.164c0.302,0.04,0.596-0.074,0.781-0.309c0.186-0.235,0.233-0.551,0.126-0.832l-0.789-2.481c-0.123-0.603-0.616-0.802-0.925-0.926c-1.167-0.467-6.127-0.586-8.695-0.467c-5.635,0.263-11.675,1.408-11.734,1.422c-16.087,3.602-30.455,17.141-36.688,23.644l19.942-49.558l1.68,4.204c1.776,4.445,3.427,8.582,5.103,12.711c0.581,1.436,1.173,2.869,1.761,4.304c1.842-0.699,3.967-1.43,6.285-2.102l-4.649-11.525c-1.56-3.862-3.148-7.711-4.809-11.732l-2.466-5.975c-0.127-0.308-0.423-0.512-0.755-0.522c-0.384-0.02-0.642,0.18-0.782,0.48c-0.28,0.587-0.526,1.085-0.744,1.528c-0.404,0.822-0.723,1.471-0.997,2.15c-8.276,20.523-16.549,41.049-24.794,61.584c-1.354,3.374-2.631,6.558-6.166,8.243c-0.356,0.168-0.547,0.561-0.46,0.944c0.087,0.383,0.427,0.657,0.821,0.657c0,0,7.997,0,8.021,0c0.465,0,0.842-0.378,0.842-0.843c0-0.299-0.155-0.559-0.39-0.709c-1.358-1.335-2.046-2.367-0.716-5.625c2.134-4.001,4.415-6.76,8.814-10.615l0.577-0.51c4.913-4.318,9.763-7.711,23.196-13.714c1.049-0.467,2.244-0.824,3.494-1.172c1.005,2.46,9.608,23.974,10.528,26.808c0.425,1.303-0.232,3.354-2.676,4.784c-0.331,0.191-0.487,0.58-0.388,0.948c0.097,0.366,0.431,0.62,0.813,0.62c1.485,0,3.841,0.009,6.325,0.02c2.754,0.012,5.662,0.023,7.7,0.023c0.399,0,0.743-0.28,0.825-0.669c0.081-0.389-0.121-0.783-0.485-0.942c-3.472-1.524-4.71-4.605-6.022-7.865L270.968,335.9c2.018-0.31,4.075-0.543,6.086-0.711l1.589,3.956c1.995,4.975,3.992,9.949,5.992,14.919c1.489,3.697,2.997,7.386,4.604,11.32l2.182,4.642c0.13,0.317,0.585,0.596,0.929,0.596c0.63,0,0.83-0.41,0.96-0.729c4.775-11.841,9.416-22.874,14.167-34.48c4.147-10.138,8.424-20.586,12.581-30.859c0.095,10.731-0.179,42.185-0.319,58.173l-0.018,1.919c-0.014,1.459-0.623,3.298-3.363,4.398c-0.354,0.14-0.487,0.578-0.391,0.946c0.1,0.368,0.433,0.624,0.814,0.624l12.279-0.031c0.379,0,0.715-0.259,0.813-0.631c0.098-0.368-0.07-0.758-0.403-0.946c-2.253-1.261-2.69-3.135-2.687-5.94c0.01-10.309,0.007-21.68,0.003-31.99c0-8.305-0.003-16.611,0-24.916c0-0.526-0.014-1.058-0.031-1.59c-0.053-1.673-0.158-3.431,0.406-5.037c0.28-0.801,0.732-1.524,1.353-2.107C328.889,297.074,329.323,296.851,329.586,296.519z"/>
                  <path fill="#630911" d="M258.364,297.208c0.41,0.269,0.924,0.441,1.308,0.607c0.906,0.39,1.697,0.993,2.348,1.73c1.278,1.446,1.99,3.281,2.697,5.048c0,0,0.373,0.934,0.373,0.934c2.395,5.882,4.764,11.777,7.136,17.672c2.185-0.435,4.457-0.765,6.755-0.932L269,297.701c-0.412-1.018-1.469-2.584-2.689-2.729c-0.97-0.112-2.03-0.163-3.339-0.163c-0.694,0-1.39,0.013-2.088,0.027c-0.686,0.014-1.371,0.028-2.056,0.028c-0.522,0-1.128,0.667-1.151,1.181C257.653,296.583,257.958,296.942,258.364,297.208z"/>
                </g>
                <path fill="#630911" d="M270.405,368.87c-0.902-0.529-1.98-0.982-2.677-1.792c-0.318-0.37-0.504-0.818-0.667-1.277c-0.455-1.277-0.223-4.763-0.285-4.882c-0.022-0.043-0.044-0.089-0.065-0.131c-0.395-0.781-0.791-1.559-1.185-2.34c-0.686-1.354-1.374-2.711-2.058-4.065c-0.71-1.404-3.192-6.304-3.3-6.517c-0.069-0.137-0.3-0.698-0.37-0.347c-0.049,0.246-0.055,1.664-0.055,2.004c0,0.647,0,1.294,0,1.942c0,1.222,0,2.443,0,3.665c0,2.572,0.001,5.147,0.003,7.719c0.002,2.843-0.437,4.74-2.686,6.019c-0.334,0.189-0.5,0.585-0.402,0.96c0.096,0.375,0.431,0.636,0.814,0.636h12.509c0.379,0,0.716-0.257,0.813-0.63C270.894,369.459,270.734,369.064,270.405,368.87z"/>
              </g>
            </svg>
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

        {/* Акции — карусель + локация */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative order-1 lg:order-2 w-full"
        >
          <PromosCarousel />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
