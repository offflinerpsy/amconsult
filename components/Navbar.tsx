
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const LogoAM: React.FC<{ scrolled: boolean }> = ({ scrolled }) => {
  // На белом фоне (scrolled=false) логотип бордовый.
  // На бордовом фоне (scrolled=true) логотип белый.
  const color = scrolled ? "#FFFFFF" : "#630911";

  return (
    <svg 
      viewBox="180 260 240 145"
      xmlns="http://www.w3.org/2000/svg"
      className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto transition-all duration-300" 
    >
      <g>
        <text x="275" y="397" textAnchor="middle" fill={color} fontFamily="'Montserrat', 'Manrope', sans-serif" fontSize="14" fontWeight="600" letterSpacing="3">АМ КОНСАЛТИНГ</text>
        <rect x="219.652" y="402.675" fill={color} width="110.66" height="0.961"/>
        <g>
          <path fill={color} d="M329.586,296.519c0.186-0.237,0.284-0.532,0.207-0.971c-0.077-0.406-0.256-0.478-0.655-0.555
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
          <path fill={color} d="M258.364,297.208c0.41,0.269,0.924,0.441,1.308,0.607c0.906,0.39,1.697,0.993,2.348,1.73
            c1.278,1.446,1.99,3.281,2.697,5.048c0,0,0.373,0.934,0.373,0.934c2.395,5.882,4.764,11.777,7.136,17.672
            c2.185-0.435,4.457-0.765,6.755-0.932L269,297.701c-0.412-1.018-1.469-2.584-2.689-2.729c-0.97-0.112-2.03-0.163-3.339-0.163
            c-0.694,0-1.39,0.013-2.088,0.027c-0.686,0.014-1.371,0.028-2.056,0.028c-0.522,0-1.128,0.667-1.151,1.181
            C257.653,296.583,257.958,296.942,258.364,297.208z"/>
        </g>
        <path fill={color} d="M270.405,368.87c-0.902-0.529-1.98-0.982-2.677-1.792c-0.318-0.37-0.504-0.818-0.667-1.277
          c-0.455-1.277-0.223-4.763-0.285-4.882c-0.022-0.043-0.044-0.089-0.065-0.131c-0.395-0.781-0.791-1.559-1.185-2.34
          c-0.686-1.354-1.374-2.711-2.058-4.065c-0.71-1.404-3.192-6.304-3.3-6.517c-0.069-0.137-0.3-0.698-0.37-0.347
          c-0.049,0.246-0.055,1.664-0.055,2.004c0,0.647,0,1.294,0,1.942c0,1.222,0,2.443,0,3.665c0,2.572,0.001,5.147,0.003,7.719
          c0.002,2.843-0.437,4.74-2.686,6.019c-0.334,0.189-0.5,0.585-0.402,0.96c0.096,0.375,0.431,0.636,0.814,0.636h12.509
          c0.379,0,0.716-0.257,0.813-0.63C270.894,369.459,270.734,369.064,270.405,368.87z"/>
      </g>
    </svg>
  );
};

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'О нас', id: 'about' },
    { name: 'Услуги', id: 'services' },
    { name: 'Контакты', id: 'contacts' }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 font-display ${
        scrolled 
          ? 'py-2 bg-brand-red shadow-2xl' 
          : 'py-4 bg-white shadow-sm'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-40 flex items-center justify-between">
        
        {/* Logo Section */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center outline-none group"
        >
          <LogoAM scrolled={scrolled} />
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-12">
          <ul className="flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className={`relative text-[11px] font-black uppercase tracking-[0.4em] transition-colors group py-2 ${
                    scrolled ? 'text-white' : 'text-dark hover:text-primary'
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    scrolled ? 'bg-primary' : 'bg-brand-red'
                  }`} />
                </button>
              </li>
            ))}
          </ul>

          <button 
            onClick={() => scrollToSection('contacts')}
            className="px-10 py-4 bg-primary text-dark font-black uppercase tracking-[0.3em] text-[11px] rounded-none hover:bg-white transition-all duration-500 shadow-xl active:scale-95 flex items-center gap-3 group"
          >
            <span>Консультация</span>
            <ChevronRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden p-2 ${scrolled ? 'text-primary' : 'text-brand-red'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden absolute top-full left-0 w-full bg-brand-red shadow-2xl border-t border-white/10"
          >
            <div className="flex flex-col p-8 gap-8">
              {navLinks.map((link) => (
                <button 
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-2xl font-serif font-bold text-left text-white hover:text-primary transition-colors tracking-wide"
                >
                  {link.name}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('contacts')}
                className="w-full py-5 bg-primary text-dark font-black uppercase tracking-[0.4em] text-xs flex items-center justify-center gap-3 rounded-none"
              >
                Заказать звонок
                <ChevronRight size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
