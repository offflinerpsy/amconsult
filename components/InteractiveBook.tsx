
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
      portrait: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=500&fit=crop',
      author: 'Юстиниан I'
    },
    {
      title: 'БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ',
      icon: 'phone_in_talk',
      desc: 'Первичный анализ ситуации. Честный прогноз исхода дела и проектирование фундамента будущей защиты.',
      btn: 'ЗАПИСАТЬСЯ',
      portrait: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=400&h=500&fit=crop',
      latin: 'SALUS POPULI SUPREMA LEX EST',
      author: 'Цицерон'
    },
    {
      title: 'АУДИТ ДЛЯ БИЗНЕСА',
      icon: 'verified',
      desc: 'Анализ скрытых рисков в контрактах. Мы строим безопасную архитектуру вашего предприятия.',
      btn: 'B2B ПРИОРИТЕТ',
      portrait: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=500&fit=crop',
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
                {/* SVG LOGO - AM MONOGRAM ONLY */}
                <div className="w-56 h-40 sm:w-72 sm:h-52 mb-8 flex items-center justify-center opacity-90 drop-shadow-[0_0_15px_rgba(236,146,19,0.5)]">
                    <svg viewBox="220 290 160 90" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto fill-[#ec9213]">
                        <g>
                          <path d="M329.586,296.519c0.186-0.237,0.284-0.532,0.207-0.971c-0.077-0.406-0.256-0.478-0.655-0.555
                            c-0.938-0.186-1.979-0.125-2.932-0.142c-0.834-0.015-1.615-0.118-2.562-0.074c-2.883,0.13-3.741,1.412-4.337,2.922
                            c-4.307,10.91-8.713,22.451-13.019,33.152l-1.722,4.274c-2.606,6.477-5.236,12.947-7.913,19.543l-2.277,5.616
                            c-1.601-3.857-5.514-13.426-10.375-25.434c0.352-0.005,0.704-0.009,1.044-0.009c2.044,0,3.575,0.023,4.531,0.164
                            c0.302,0.04,0.596-0.074,0.781-0.309c0.186-0.235,0.233-0.551,0.126-0.832l-0.789-2.481c-0.123-0.603-0.616-0.802-0.925-0.926
                            c-1.167-0.467-6.127-0.586-8.695-0.467c-5.635,0.263-11.675,1.408-11.734,1.422c-16.087,3.602-30.455,17.141-36.688,23.644
                            l19.942-49.558l1.68,4.204c1.776,4.445,3.427,8.582,5.103,12.711c0.581,1.436,1.173,2.869,1.761,4.304
                            c1.842-0.699,3.967-1.43,6.285-2.102l-4.649-11.525c-1.56-3.862-3.148-7.711-4.809-11.732l-2.466-5.975
                            c-0.127-0.308-0.423-0.512-0.755-0.522c-0.384-0.02-0.642,0.18-0.782,0.48c-0.28,0.587-0.526,1.085-0.744,1.528
                            c-0.404,0.822-0.723,1.471-0.997,2.15c-8.276,20.523-16.549,41.049-24.794,61.584c-1.354,3.374-2.631,6.558-6.166,8.243
                            c-0.356,0.168-0.547,0.561-0.46,0.944c0.087,0.383,0.427,0.657,0.821,0.657c0,0,7.997,0,8.021,0c0.465,0,0.842-0.378,0.842-0.843
                            c0-0.299-0.155-0.559-0.39-0.709c-1.358-1.335-2.046-2.367-0.716-5.625c2.134-4.001,4.415-6.76,8.814-10.615l0.577-0.51
                            c4.913-4.318,9.763-7.711,23.196-13.714c1.049-0.467,2.244-0.824,3.494-1.172c1.005,2.46,9.608,23.974,10.528,26.808
                            c0.425,1.303-0.232,3.354-2.676,4.784c-0.331,0.191-0.487,0.58-0.388,0.948c0.097,0.366,0.431,0.62,0.813,0.62
                            c1.485,0,3.841,0.009,6.325,0.02c2.754,0.012,5.662,0.023,7.7,0.023c0.399,0,0.743-0.28,0.825-0.669
                            c0.081-0.389-0.121-0.783-0.485-0.942c-3.472-1.524-4.71-4.605-6.022-7.865L270.968,335.9c2.018-0.31,4.075-0.543,6.086-0.711
                            l1.589,3.956c1.995,4.975,3.992,9.949,5.992,14.919c1.489,3.697,2.997,7.386,4.604,11.32l2.182,4.642
                            c0.13,0.317,0.585,0.596,0.929,0.596c0.63,0,0.83-0.41,0.96-0.729c4.775-11.841,9.416-22.874,14.167-34.48
                            c4.147-10.138,8.424-20.586,12.581-30.859c0.095,10.731-0.179,42.185-0.319,58.173l-0.018,1.919
                            c-0.014,1.459-0.623,3.298-3.363,4.398c-0.354,0.14-0.487,0.578-0.391,0.946c0.1,0.368,0.433,0.624,0.814,0.624l12.279-0.031
                            c0.379,0,0.715-0.259,0.813-0.631c0.098-0.368-0.07-0.758-0.403-0.946c-2.253-1.261-2.69-3.135-2.687-5.94
                            c0.01-10.309,0.007-21.68,0.003-31.99c0-8.305-0.003-16.611,0-24.916c0-0.526-0.014-1.058-0.031-1.59
                            c-0.053-1.673-0.158-3.431,0.406-5.037c0.28-0.801,0.732-1.524,1.353-2.107C328.889,297.074,329.323,296.851,329.586,296.519z"/>
                          <path d="M258.364,297.208c0.41,0.269,0.924,0.441,1.308,0.607c0.906,0.39,1.697,0.993,2.348,1.73
                            c1.278,1.446,1.99,3.281,2.697,5.048c0,0,0.373,0.934,0.373,0.934c2.395,5.882,4.764,11.777,7.136,17.672
                            c2.185-0.435,4.457-0.765,6.755-0.932L269,297.701c-0.412-1.018-1.469-2.584-2.689-2.729c-0.97-0.112-2.03-0.163-3.339-0.163
                            c-0.694,0-1.39,0.013-2.088,0.027c-0.686,0.014-1.371,0.028-2.056,0.028c-0.522,0-1.128,0.667-1.151,1.181
                            C257.653,296.583,257.958,296.942,258.364,297.208z"/>
                          <path d="M270.405,368.87c-0.902-0.529-1.98-0.982-2.677-1.792c-0.318-0.37-0.504-0.818-0.667-1.277
                            c-0.455-1.277-0.223-4.763-0.285-4.882c-0.022-0.043-0.044-0.089-0.065-0.131c-0.395-0.781-0.791-1.559-1.185-2.34
                            c-0.686-1.354-1.374-2.711-2.058-4.065c-0.71-1.404-3.192-6.304-3.3-6.517c-0.069-0.137-0.3-0.698-0.37-0.347
                            c-0.049,0.246-0.055,1.664-0.055,2.004c0,0.647,0,1.294,0,1.942c0,1.222,0,2.443,0,3.665c0,2.572,0.001,5.147,0.003,7.719
                            c0.002,2.843-0.437,4.74-2.686,6.019c-0.334,0.189-0.5,0.585-0.402,0.96c0.096,0.375,0.431,0.636,0.814,0.636h12.509
                            c0.379,0,0.716-0.257,0.813-0.63C270.894,369.459,270.734,369.064,270.405,368.87z"/>
                        </g>
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

          {/* Гравюра в центре */}
          <div className="relative w-full flex-1 max-h-[280px] mb-4 mt-2 rounded-lg overflow-hidden bg-[#e8e4da] border border-primary/10">
            {/* Изображение */}
            <img 
              src={content.portrait} 
              alt="Engraving" 
              className="w-full h-full object-cover opacity-90"
              style={{ filter: 'grayscale(80%) sepia(30%) contrast(1.1)' }}
              loading="eager"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
            {/* Виньетка по краям */}
            <div className="absolute inset-0 shadow-[inset_0_0_40px_15px_rgba(244,240,230,0.9)] pointer-events-none" />
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
