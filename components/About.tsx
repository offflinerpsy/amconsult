
import React, { useState, useRef } from 'react';
import { Gavel, Building2, Quote, Upload, RefreshCw, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  // Пробуем загрузить founder.jpg по умолчанию
  const [imgSrc, setImgSrc] = useState<string>(`founder.jpg?v=${Date.now()}`);
  const [imgError, setImgError] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Функция для ручного выбора файла с компьютера
  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Создаем ссылку на локальный файл пользователя
      const url = URL.createObjectURL(file);
      setImgSrc(url);
      setImgError(false);
    }
  };

  // Функция для повторной попытки загрузки по имени файла
  const handleRetryAuto = () => {
    setImgError(false);
    setImgSrc(`founder.jpg?v=${Date.now()}`);
  };

  return (
    <section className="bg-white py-20 md:py-32 px-6 md:px-10 lg:px-40 border-b border-gray-100" id="about">
      {/* Скрытый инпут для выбора файла */}
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleFileSelect} 
        accept="image/*" 
        className="hidden" 
      />

      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 md:gap-24 items-center">
          
          {/* Image Column */}
          <div className="relative w-full lg:w-5/12 max-w-[500px] lg:max-w-none">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.25)] group border-8 border-white bg-brand-red"
            >
              {/* Логика отображения */}
              {!imgError ? (
                <img 
                  src={imgSrc}
                  alt="Алина Макеева"
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                  onError={() => setImgError(true)}
                />
              ) : (
                /* ИНТЕРФЕЙС ЗАГРУЗКИ, ЕСЛИ ФОТО НЕ НАЙДЕНО */
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-brand-red p-8 text-center">
                  <span className="font-serif text-white/5 text-9xl block mb-4 absolute top-10 select-none">A.M.</span>
                  
                  <div className="relative z-10 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 w-full max-w-xs shadow-2xl">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 mb-4 mx-auto text-white">
                      <AlertCircle size={24} />
                    </div>
                    
                    <p className="text-white font-bold mb-2 text-sm">Фото не найдено</p>
                    <p className="text-white/70 text-xs mb-6 leading-relaxed">
                      Автоматический поиск файла "founder.jpg" не удался. Выберите фото вручную:
                    </p>
                    
                    <div className="space-y-3">
                      <button 
                        onClick={() => fileInputRef.current?.click()}
                        className="w-full py-3 bg-white text-brand-red text-xs font-black uppercase tracking-widest rounded-lg hover:bg-primary hover:text-white transition-all shadow-lg flex items-center justify-center gap-2"
                      >
                        <Upload size={14} />
                        Выбрать файл
                      </button>
                      
                      <button 
                        onClick={handleRetryAuto}
                        className="w-full py-3 bg-transparent border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest rounded-lg hover:bg-white/5 transition-colors flex items-center justify-center gap-2"
                      >
                        <RefreshCw size={12} />
                        Искать снова
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Элемент декора поверх фото */}
              <div className="absolute top-6 right-6 text-white/20 pointer-events-none">
                <Quote size={40} />
              </div>
              
              {/* Плавный градиент внизу для читаемости плашки */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
            </motion.div>
            
            {/* Статистическая плашка */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -bottom-8 -right-4 md:-bottom-10 md:-right-10 bg-brand-red p-8 md:p-10 rounded-3xl shadow-2xl z-20 border-t border-white/10"
            >
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-serif font-bold text-primary mb-1">10</p>
                <p className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] text-white/80">лет в праве</p>
              </div>
            </motion.div>

            {/* Декоративная рамка сзади */}
            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-primary/20 rounded-[2.5rem] -z-10 hidden md:block"></div>
          </div>

          {/* Content Column */}
          <div className="flex-1 text-left mt-16 lg:mt-0">
            <div className="flex items-center gap-4 mb-8">
              <span className="h-px w-12 bg-primary"></span>
              <span className="text-[11px] font-black uppercase tracking-[0.5em] text-primary">Основатель кабинета</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-text-main mb-10 leading-tight">
              Алина Макеева
            </h2>
            
            <div className="relative mb-12">
              <p className="text-xl md:text-2xl text-text-main font-serif italic leading-relaxed pl-10">
                «Мы не просто решаем юридические задачи. Мы создаем правовой щит, который позволяет вашему бизнесу и семье чувствовать себя в полной безопасности.»
              </p>
              <span className="absolute left-0 top-0 text-primary opacity-20 text-6xl font-serif">“</span>
            </div>

            <div className="space-y-8 text-text-secondary leading-relaxed text-lg font-light max-w-2xl">
              <p>Как ведущий юрист с многолетним стажем, я убеждена: в праве не бывает мелочей. Мой кабинет специализируется на защите сложных активов и разрешении нестандартных корпоративных споров.</p>
              <p>Мы предлагаем уровень экспертизы, который обычно доступен только в крупных международных фирмах, сохраняя при этом персональную вовлеченность и абсолютную конфиденциальность семейного офиса.</p>
            </div>

            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex items-start gap-5">
                <div className="p-4 rounded-2xl bg-primary/10 text-primary">
                  <Gavel size={28} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-text-main mb-1 tracking-tight">Арбитраж</h4>
                  <p className="text-sm text-text-secondary font-light">Защита интересов в сложнейших судебных процессах.</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="p-4 rounded-2xl bg-primary/10 text-primary">
                  <Building2 size={28} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-text-main mb-1 tracking-tight">Корпорации</h4>
                  <p className="text-sm text-text-secondary font-light">Сопровождение сделок и структурирование бизнеса.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
