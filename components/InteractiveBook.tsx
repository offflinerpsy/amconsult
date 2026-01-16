
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InteractiveBook: React.FC = () => {
  const [flippedPages, setFlippedPages] = useState<boolean[]>([false, false, false]);

  const handleToggle = (index: number) => {
    const isFlipped = flippedPages[index];
    const newFlipped = [...flippedPages];

    if (!isFlipped) {
      for (let i = 0; i < index; i++) {
        if (!flippedPages[i]) return;
      }
      newFlipped[index] = true;
    } else {
      for (let i = index + 1; i < flippedPages.length; i++) {
        if (flippedPages[i]) return;
      }
      newFlipped[index] = false;
    }
    setFlippedPages(newFlipped);
  };

  const pages = [
    {
      type: 'cover',
      title: 'A.M. CONSULT',
      subtitle: 'Юридическая консультация',
      est: 'EST. 2010',
      location: 'Санкт-Петербург',
      latin: 'IUSTITIA EST CONSTANS ET PERPETUA VOLUNTAS',
      portrait: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Meister_von_San_Vitale_in_Ravenna_003.jpg/440px-Meister_von_San_Vitale_in_Ravenna_003.jpg',
      author: 'Юстиниан I'
    },
    {
      title: 'БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ',
      icon: 'phone_in_talk',
      desc: 'Первичный анализ ситуации. Честный прогноз исхода дела и проектирование фундамента будущей защиты.',
      btn: 'ЗАПИСАТЬСЯ',
      portrait: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Cicero_-_Musei_Capitolini.JPG/440px-Cicero_-_Musei_Capitolini.JPG',
      latin: 'SALUS POPULI SUPREMA LEX EST',
      author: 'Цицерон'
    },
    {
      title: 'АУДИТ ДЛЯ БИЗНЕСА',
      icon: 'verified',
      desc: 'Анализ скрытых рисков в контрактах. Мы строим безопасную архитектуру вашего предприятия.',
      btn: 'B2B ПРИОРИТЕТ',
      portrait: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Sanzio_01_Plato_Aristotle.jpg/440px-Sanzio_01_Plato_Aristotle.jpg',
      latin: 'PACTA SUNT SERVANDA',
      author: 'Гай'
    },
    {
      title: 'СУДЕБНАЯ ПРАКТИКА',
      icon: 'balance',
      desc: 'Представление интересов в арбитражных судах. Математическая точность в каждом процессуальном действии.',
      btn: 'УЗНАТЬ БОЛЬШЕ',
      latin: 'DURA LEX SED LEX'
    }
  ];

  return (
    <div className="relative w-full flex flex-col items-center justify-center py-4 md:py-10 perspective-[3000px] select-none scale-[0.9] sm:scale-100 transition-transform">
      <div className="relative w-[320px] h-[480px] sm:w-[420px] sm:h-[580px] md:w-[480px] md:h-[650px] preserve-3d">
        
        {/* Последняя статичная страница (Правая часть разворота) */}
        <div className="absolute inset-0 bg-[#fdfaf2] rounded-r-2xl shadow-inner border-l-8 border-gray-200 overflow-hidden">
           <div className="absolute inset-0 opacity-15 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/old-map.png')]" />
           <div className="h-full p-10 sm:p-14 flex flex-col justify-center items-center text-center relative z-10">
              <div className="text-primary/40 mb-10">
                <span className="material-symbols-outlined text-7xl sm:text-9xl">{pages[3].icon}</span>
              </div>
              <h3 className="font-serif text-3xl sm:text-5xl font-bold mb-8 text-dark tracking-wider uppercase leading-tight">{pages[3].title}</h3>
              <div className="w-20 h-px bg-primary/40 mb-8" />
              <p className="text-gray-900 text-xl sm:text-2xl leading-relaxed mb-12 font-serif italic max-w-sm">{pages[3].desc}</p>
              <button className="bg-dark text-primary border-2 border-primary/20 px-10 py-5 rounded-none font-bold uppercase text-[11px] tracking-[0.4em] hover:bg-primary hover:text-dark transition-all duration-700 shadow-2xl active:scale-95">
                {pages[3].btn}
              </button>
              <p className="absolute bottom-10 text-[12px] text-primary/60 font-serif tracking-[0.3em] font-bold">{pages[3].latin}</p>
           </div>
        </div>

        {/* Динамические страницы */}
        <Page 
          index={2} 
          isFlipped={flippedPages[2]} 
          onToggle={() => handleToggle(2)}
          content={pages[2]}
          zIndex={10}
        />
        <Page 
          index={1} 
          isFlipped={flippedPages[1]} 
          onToggle={() => handleToggle(1)}
          content={pages[1]}
          zIndex={20}
        />
        <Page 
          index={0} 
          isFlipped={flippedPages[0]} 
          onToggle={() => handleToggle(0)}
          content={pages[0]}
          zIndex={30}
          isCover={true}
        />
      </div>

      <div className="mt-14 flex items-center gap-5 text-primary/50 text-[11px] uppercase tracking-[0.5em] font-black italic">
        <span className="material-symbols-outlined text-xl animate-pulse">auto_stories</span>
        <span>Интерактивное издание · Листайте в обе стороны</span>
      </div>
    </div>
  );
};

interface PageProps {
  index: number;
  isFlipped: boolean;
  onToggle: () => void;
  content: any;
  zIndex: number;
  isCover?: boolean;
}

const Page: React.FC<PageProps> = ({ index, isFlipped, onToggle, content, zIndex, isCover }) => {
  return (
    <motion.div
      className="absolute inset-0 preserve-3d cursor-pointer origin-left"
      style={{ zIndex: isFlipped ? (100 + index) : zIndex }}
      animate={{ 
        rotateY: isFlipped ? -178 : 0,
        x: isFlipped ? -4 : 0,
        z: isFlipped ? index * 3 : 0
      }}
      transition={{ duration: 1.1, ease: [0.645, 0.045, 0.355, 1] }}
      onClick={onToggle}
      whileHover={!isFlipped ? { rotateY: -12 } : { rotateY: -168 }}
    >
      {/* ЛИЦЕВАЯ СТОРОНА (ПРАВАЯ СТРАНИЦА ПРИ ПЕРЕЛИСТЫВАНИИ) */}
      <div className={`absolute inset-0 backface-hidden rounded-r-2xl shadow-2xl flex flex-col border-l-2 border-gray-200/20 ${isCover ? 'bg-[#2d2418] border-r-4 border-[#ec9213]/40' : 'bg-[#fdfaf2]'}`}>
        {isCover ? (
          <div className="h-full w-full p-10 flex flex-col justify-between items-center text-white relative overflow-hidden">
             <div className="absolute inset-0 opacity-25 bg-[url('https://www.transparenttextures.com/patterns/leather.png')]" />
             
             <div className="w-full flex justify-between items-center opacity-40 relative z-10">
                <div className="h-px bg-[#ec9213] flex-1" />
                <span className="px-5 text-[11px] uppercase tracking-[0.6em] font-black">{content.est}</span>
                <div className="h-px bg-[#ec9213] flex-1" />
              </div>
              
              <div className="flex flex-col items-center relative z-10 mt-8">
                {/* SVG LOGO REPLACING GAVEL */}
                <div className="w-56 h-32 sm:w-72 sm:h-40 mb-8 flex items-center justify-center opacity-90 drop-shadow-[0_0_15px_rgba(236,146,19,0.5)]">
                    <svg viewBox="180 260 240 160" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto fill-[#ec9213]">
                        <g>
                            <path d="M234.05,394.323c-1.413,1.044-2.962,1.55-4.737,1.55c-5.015,0-7.299-4.048-7.299-7.809
                                c0-3.619,1.992-7.274,6.444-7.274c1.629,0,3.522,0.545,5.474,1.576l0.504,0.268v-2.585l-0.276-0.054
                                c-1.555-0.313-3.116-0.471-4.64-0.471c-7.239,0-10.48,4.533-10.48,9.028c0,5.11,3.891,8.678,9.464,8.678
                                c2.375,0,4.53-0.662,6.23-1.913l0.258-0.191l-0.645-1.021L234.05,394.323z"/>
                            <path d="M243.031,379.523c-5.216,0-9.002,3.738-9.002,8.888c0,5.098,3.786,8.795,9.002,8.795
                                s9.002-3.708,9.002-8.817C252.033,383.253,248.247,379.523,243.031,379.523z M242.2,380.722c4.636,0,7.139,4.425,7.139,8.59
                                c0,3.335-1.694,6.698-5.476,6.698c-4.681,0-7.207-4.39-7.207-8.52C236.656,384.12,238.371,380.722,242.2,380.722z"/>
                            <polygon points="267.902,394.775 256.406,379.986 253.77,379.986 253.77,396.884 254.991,396.884 254.991,382.621 
                                266.161,396.884 269.099,396.884 269.099,379.986 267.902,379.986 	"/>
                            <path d="M278.753,386.047c-2.422-0.922-4.711-1.787-4.711-3.178c0-1.772,2.602-1.962,3.719-1.962
                                c1.801,0,4.316,0.564,6.569,1.473l0.469,0.191v-2.521l-0.273-0.056c-1.603-0.331-3.349-0.517-4.919-0.517
                                c-5.104,0-7.916,1.615-7.916,4.547c0,2.354,3.081,3.559,6.057,4.726c2.791,1.093,5.672,2.221,5.672,4.141
                                c0,1.588-1.986,2.657-4.941,2.657c-2.237,0-4.712-0.683-6.154-1.267l-0.471-0.193v2.516l0.265,0.061
                                c0.869,0.202,2.642,0.54,4.764,0.54c5.386,0,8.474-2.076,8.474-5.701C285.357,388.551,281.847,387.22,278.753,386.047z"/>
                            <path d="M300.025,391.645c0,3.095-2.351,4.505-4.53,4.505c-2.191,0-4.549-1.41-4.549-4.505v-11.659h-2.997v10.852
                                c0,4.43,3.791,6.416,7.546,6.416c3.747,0,7.527-1.986,7.527-6.416v-10.852h-2.997V391.645z"/>
                            <polygon points="308.613,379.986 305.616,379.986 305.616,396.884 317.825,396.884 317.825,395.665 
                                308.613,395.665 	"/>
                            <polygon points="313.211,379.986 313.211,381.181 320.278,381.181 320.278,396.907 323.277,396.907 
                                323.277,381.181 330.318,381.181 330.318,379.986 	"/>
                            <rect x="219.652" y="402.675" width="110.66" height="0.961"/>
                            <g>
                                <path d="M224.542,412.083c0.22,0.252,0.33,0.58,0.33,0.984c0,0.529-0.188,0.932-0.561,1.215
                                    s-0.921,0.426-1.645,0.426h-2.691v-6.077h2.526c0.649,0,1.155,0.133,1.52,0.399c0.364,0.267,0.546,0.65,0.546,1.156
                                    c0,0.34-0.087,0.627-0.259,0.862c-0.175,0.235-0.418,0.41-0.729,0.525C224,411.662,224.322,411.831,224.542,412.083z
                                    M220.61,411.386h1.858c0.468,0,0.829-0.098,1.081-0.289s0.377-0.468,0.377-0.832s-0.126-0.643-0.377-0.834
                                    c-0.251-0.189-0.612-0.287-1.081-0.287h-1.858V411.386z M224.238,413.025c0-0.764-0.523-1.146-1.57-1.146h-2.058v2.316h2.058
                                    C223.715,414.195,224.238,413.806,224.238,413.025z"/>
                                <path d="M230.367,413.084h-3.386l-0.729,1.624h-0.669l2.779-6.077h0.632l2.779,6.077h-0.677L230.367,413.084z
                                    M230.133,412.564l-1.459-3.263l-1.458,3.263H230.133z"/>
                                <path d="M240.383,408.632v6.077h-7.447v-6.077h0.633v5.521h2.778v-5.521h0.633v5.521h2.77v-5.521H240.383z"/>
                                <path d="M249.48,408.632l-2.762,5.113c-0.197,0.362-0.426,0.636-0.689,0.811c-0.263,0.175-0.551,0.266-0.863,0.266
                                    c-0.232,0-0.48-0.056-0.746-0.167l0.182-0.52c0.208,0.081,0.399,0.123,0.573,0.123c0.399,0,0.726-0.217,0.981-0.653l0.173-0.292
                                    l-2.465-4.681h0.686l2.118,4.115l2.171-4.115H249.48z"/>
                                <path d="M251.454,414.361c-0.483-0.266-0.862-0.636-1.137-1.107c-0.275-0.471-0.413-1-0.413-1.585
                                    c0-0.583,0.138-1.111,0.413-1.583c0.274-0.471,0.655-0.841,1.141-1.107c0.485-0.266,1.031-0.399,1.633-0.399
                                    c0.45,0,0.868,0.077,1.25,0.226c0.382,0.152,0.706,0.369,0.972,0.66l-0.408,0.406c-0.475-0.478-1.074-0.718-1.797-0.718
                                    c-0.479,0-0.917,0.108-1.31,0.329c-0.395,0.219-0.702,0.52-0.925,0.904c-0.222,0.38-0.333,0.809-0.333,1.282
                                    c0,0.477,0.111,0.904,0.333,1.286c0.224,0.382,0.531,0.683,0.925,0.904c0.393,0.219,0.831,0.329,1.31,0.329
                                    c0.729,0,1.329-0.242,1.797-0.729l0.408,0.406c-0.266,0.291-0.592,0.512-0.977,0.664c-0.385,0.156-0.802,0.231-1.254,0.231
                                    C252.48,414.761,251.938,414.628,251.454,414.361z"/>
                                <path d="M261.754,408.632v6.077h-0.633v-5.52h-3.845v5.52h-0.634v-6.077H261.754z"/>
                                <path d="M268.1,414.153v0.555h-4.297v-6.077h4.167v0.557h-3.525v2.162h3.142v0.546h-3.142v2.256H268.1z"/>
                                <path d="M269.506,408.632l1.727,2.405l1.719-2.405h0.755l-2.075,2.917l2.239,3.16h-0.755l-1.884-2.614
                                    l-1.883,2.614h-0.738l2.231-3.134l-2.075-2.943H269.506z"/>
                                <path d="M276.858,412.086h2.274v0.54h-2.274V412.086z"/>
                                <path d="M288.063,408.632v6.077h-0.632v-5.52h-3.846v5.52h-0.634v-6.077H288.063z"/>
                                <path d="M291.141,414.356c-0.488-0.268-0.87-0.638-1.146-1.107c-0.275-0.468-0.412-0.995-0.412-1.58
                                    c0-0.583,0.137-1.111,0.412-1.58c0.275-0.468,0.657-0.837,1.146-1.105c0.491-0.27,1.035-0.405,1.636-0.405
                                    c0.603,0,1.146,0.133,1.629,0.399c0.482,0.266,0.864,0.636,1.14,1.107c0.279,0.473,0.417,1,0.417,1.583
                                    c0,0.585-0.138,1.114-0.417,1.585c-0.276,0.471-0.658,0.841-1.14,1.107c-0.483,0.267-1.026,0.399-1.629,0.399
                                    C292.176,414.761,291.631,414.626,291.141,414.356z M294.08,413.862c0.387-0.217,0.69-0.519,0.911-0.904
                                    c0.221-0.383,0.33-0.813,0.33-1.289c0-0.473-0.109-0.904-0.33-1.288c-0.221-0.385-0.523-0.685-0.911-0.902
                                    c-0.389-0.217-0.823-0.326-1.303-0.326s-0.915,0.108-1.307,0.326c-0.391,0.217-0.697,0.517-0.92,0.902
                                    c-0.222,0.384-0.334,0.814-0.334,1.288c0,0.477,0.112,0.906,0.334,1.289c0.223,0.385,0.529,0.687,0.92,0.904
                                    c0.392,0.217,0.827,0.326,1.307,0.326S293.691,414.08,294.08,413.862z"/>
                                <path d="M304.886,408.632v6.077h-0.634v-5.52h-3.845v5.52h-0.635v-6.077H304.886z"/>
                                <path d="M311.032,409.189c0.438,0.368,0.658,0.879,0.658,1.527c0,0.648-0.221,1.156-0.658,1.521
                                    c-0.441,0.37-1.048,0.554-1.821,0.554h-1.633v1.918h-0.645v-6.077h2.277C309.984,408.632,310.591,408.818,311.032,409.189z
                                    M310.571,411.831c0.319-0.263,0.479-0.634,0.479-1.114c0-0.494-0.159-0.871-0.479-1.135c-0.316-0.263-0.777-0.393-1.38-0.393
                                    h-1.613v3.038h1.613C309.794,412.227,310.255,412.093,310.571,411.831z"/>
                                <path d="M316.596,413.084h-3.385l-0.729,1.624h-0.669l2.776-6.077h0.634l2.778,6.077h-0.678L316.596,413.084z
                                    M316.36,412.564l-1.457-3.263l-1.457,3.263H316.36z"/>
                                <path d="M323.732,412.083c0.217,0.252,0.329,0.58,0.329,0.984c0,0.529-0.186,0.932-0.561,1.215
                                    c-0.371,0.284-0.921,0.426-1.643,0.426h-2.694v-6.077h2.529c0.645,0,1.152,0.133,1.517,0.399c0.365,0.267,0.547,0.65,0.547,1.156
                                    c0,0.34-0.088,0.627-0.259,0.862c-0.176,0.235-0.417,0.41-0.729,0.525C323.189,411.662,323.512,411.831,323.732,412.083z
                                    M319.798,411.386h1.86c0.466,0,0.827-0.098,1.079-0.289s0.379-0.468,0.379-0.832s-0.127-0.643-0.379-0.834
                                    c-0.252-0.189-0.613-0.287-1.079-0.287h-1.86V411.386z M323.428,413.025c0-0.764-0.525-1.146-1.569-1.146h-2.061v2.316h2.061
                                    C322.902,414.195,323.428,413.806,323.428,413.025z"/>
                                <path d="M330.354,408.632l-2.761,5.113c-0.196,0.362-0.427,0.636-0.69,0.811c-0.263,0.175-0.55,0.266-0.861,0.266
                                    c-0.231,0-0.483-0.056-0.75-0.167l0.186-0.52c0.207,0.081,0.399,0.123,0.571,0.123c0.399,0,0.729-0.217,0.981-0.653l0.175-0.292
                                    l-2.466-4.681h0.687l2.115,4.115l2.173-4.115H330.354z"/>
                            </g>
                            <path d="M270.405,368.87c-0.902-0.529-1.98-0.982-2.677-1.792c-0.318-0.37-0.504-0.818-0.667-1.277
                                c-0.455-1.277-0.223-4.763-0.285-4.882c-0.022-0.043-0.044-0.089-0.065-0.131c-0.395-0.781-0.791-1.559-1.185-2.34
                                c-0.686-1.354-1.374-2.711-2.058-4.065c-0.71-1.404-3.192-6.304-3.3-6.517c-0.069-0.137-0.3-0.698-0.37-0.347
                                c-0.049,0.246-0.055,1.664-0.055,2.004c0,0.647,0,1.294,0,1.942c0,1.222,0,2.443,0,3.665c0,2.572,0.001,5.147,0.003,7.719
                                c0.002,2.843-0.437,4.74-2.686,6.019c-0.334,0.189-0.5,0.585-0.402,0.96c0.096,0.375,0.431,0.636,0.814,0.636h12.509
                                c0.379,0,0.716-0.257,0.813-0.63C270.894,369.459,270.734,369.064,270.405,368.87z"/>
                        </g>
                        <rect x="191" y="273.575" fill="none" width="171.918" height="171.918"/>
                    </svg>
                </div>
                <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-[0.3em] mb-6 text-center leading-tight drop-shadow-2xl">{content.title}</h1>
                <div className="w-16 h-px bg-primary/60 mb-6" />
                <p className="text-[#ec9213] text-[14px] uppercase tracking-[0.2em] font-bold">{content.subtitle}</p>
              </div>

              <div className="text-[11px] uppercase tracking-[0.5em] text-white/50 font-black relative z-10">
                {content.location}
              </div>

              <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-[#ec9213]/30 to-transparent rounded-br-2xl" />
          </div>
        ) : (
          <div className="h-full p-10 sm:p-14 flex flex-col justify-center items-center text-center relative overflow-hidden">
             <div className="absolute inset-0 opacity-15 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/handmade-paper.png')]" />
             <div className="text-primary/40 mb-10 relative z-10">
               <span className="material-symbols-outlined text-7xl sm:text-9xl">{content.icon}</span>
             </div>
             <h3 className="font-serif text-3xl sm:text-5xl font-bold mb-8 text-dark tracking-wide uppercase leading-tight relative z-10">{content.title}</h3>
             <div className="w-20 h-px bg-primary/40 mb-8 relative z-10" />
             <p className="text-gray-900 text-xl sm:text-2xl leading-relaxed mb-12 font-serif italic relative z-10 max-w-sm">{content.desc}</p>
             <button className="relative z-10 border-2 border-primary/30 text-dark px-10 py-5 font-black uppercase text-[11px] tracking-[0.4em] hover:bg-primary transition-all duration-700">
               {content.btn}
             </button>
             <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-black/5 to-transparent rounded-br-2xl" />
          </div>
        )}
      </div>

      {/* ОБРАТНАЯ СТОРОНА (ЛЕВАЯ СТРАНИЦА РАЗВОРОТА) */}
      <div 
        className="absolute inset-0 backface-hidden rounded-l-2xl bg-[#f4f0e6] shadow-2xl border-r-8 border-gray-300/30 overflow-hidden"
        style={{ transform: 'rotateY(180deg)' }}
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]" />
        
        <div className="h-full w-full flex flex-col justify-between items-center p-12 sm:p-16 relative">
          
          {/* Цитата сверху */}
          <div className="text-center relative z-20 w-full mb-4">
             <span className="text-primary/20 text-6xl font-serif absolute -top-10 left-0">“</span>
             <p className="font-serif text-dark/90 text-2xl sm:text-3xl tracking-[0.15em] italic leading-tight font-bold">
               {content.latin}
             </p>
             <div className="mt-4 flex items-center justify-center gap-4">
                <div className="h-px bg-primary/20 w-8" />
                <span className="text-[10px] uppercase tracking-[0.4em] text-primary/60 font-black">{content.author}</span>
                <div className="h-px bg-primary/20 w-8" />
             </div>
          </div>

          {/* Гравюра в центре - ГАРАНТИРОВАННО РАБОЧИЙ МЕТОД: БЕЛЫЙ ФОН + MULTIPLY */}
          <div className="relative w-full flex-1 max-h-[320px] mb-6 mt-4 rounded-2xl bg-white overflow-hidden">
            {/* Изображение с режимом наложения Multiply */}
            <img 
              src={content.portrait} 
              alt="Engraving" 
              className="w-full h-full object-cover mix-blend-multiply"
              style={{ filter: 'grayscale(100%) contrast(1.4) brightness(1.1) sepia(0.2)' }}
            />
            {/* Текстура */}
            <div className="absolute inset-0 opacity-40 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')] z-20" />
            
            {/* Дополнительный слой для сглаживания краев если картинка не идеальна */}
            <div className="absolute inset-0 shadow-[inset_0_0_20px_20px_#f4f0e6] pointer-events-none z-10" />
          </div>

          {/* Декор снизу */}
          <div className="flex justify-center gap-3 opacity-30">
            <span className="material-symbols-outlined text-primary text-xl">stat_3</span>
            <span className="material-symbols-outlined text-primary text-xl">stat_3</span>
            <span className="material-symbols-outlined text-primary text-xl">stat_3</span>
          </div>
        </div>

        {/* Тень в корешке книги */}
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black/25 via-black/5 to-transparent z-40" />
      </div>
    </motion.div>
  );
};

export default InteractiveBook;
