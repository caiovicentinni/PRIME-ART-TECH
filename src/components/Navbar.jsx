import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';
import { useTranslation } from 'react-i18next';
import { getWhatsAppUrl } from '../utils/whatsapp';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
  };

  const whatsappLink = getWhatsAppUrl(i18n.language);
  const currentLang = i18n.resolvedLanguage || i18n.language || 'pt-BR';
  const isEn = currentLang.startsWith('en');

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'glass py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Prime Art Tech" className="h-10 md:h-12 object-contain" />
        </a>

        {/* Desktop Controls */}
        <div className="hidden md:flex items-center">
          {/* Language Switcher */}
          <div className="flex items-center space-x-3 mr-6 pr-6 border-r border-accent/20">
            <button onClick={() => handleLanguageChange('pt-BR')} className={`text-xl transition-all hover:scale-110 ${currentLang === 'pt-BR' ? 'drop-shadow-md scale-110' : 'opacity-60 grayscale-[0.5]'}`} title="Português (Brasil)">🇧🇷</button>
            <button onClick={() => handleLanguageChange('pt-PT')} className={`text-xl transition-all hover:scale-110 ${currentLang === 'pt-PT' ? 'drop-shadow-md scale-110' : 'opacity-60 grayscale-[0.5]'}`} title="Português (Portugal)">🇵🇹</button>
            <button onClick={() => handleLanguageChange('en')} className={`text-xl transition-all hover:scale-110 ${isEn ? 'drop-shadow-md scale-110' : 'opacity-60 grayscale-[0.5]'}`} title="English (US)">🇺🇸</button>
          </div>

          {/* Desktop Menu */}
          <div className="flex items-center space-x-8 text-[13px] font-semibold uppercase tracking-[0.15em] text-accent">
            <a href="#solucao" className="hover:text-gold transition-colors block py-2">{t('nav.solution')}</a>
            <a href="#diferenciais" className="hover:text-gold transition-colors block py-2">{t('nav.features')}</a>
            <a href="#modelos" className="hover:text-gold transition-colors block py-2">{t('nav.models')}</a>
            <Button href={whatsappLink} target="_blank" variant={scrolled ? "primary" : "gold"} className="ml-4 shadow-lg !py-3">{t('nav.cta')}</Button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-accent p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass absolute top-full left-0 w-full p-8 flex flex-col space-y-6 shadow-2xl border-t border-white/20">
          <div className="flex items-center justify-center space-x-6 pb-6 border-b border-accent/10">
            <button onClick={() => {handleLanguageChange('pt-BR'); setIsOpen(false);}} className={`text-3xl ${currentLang === 'pt-BR' ? '' : 'opacity-50'}`}>🇧🇷</button>
            <button onClick={() => {handleLanguageChange('pt-PT'); setIsOpen(false);}} className={`text-3xl ${currentLang === 'pt-PT' ? '' : 'opacity-50'}`}>🇵🇹</button>
            <button onClick={() => {handleLanguageChange('en'); setIsOpen(false);}} className={`text-3xl ${isEn ? '' : 'opacity-50'}`}>🇺🇸</button>
          </div>
          <a href="#solucao" className="font-semibold text-lg uppercase tracking-wider text-center" onClick={() => setIsOpen(false)}>{t('nav.solution')}</a>
          <a href="#diferenciais" className="font-semibold text-lg uppercase tracking-wider text-center" onClick={() => setIsOpen(false)}>{t('nav.features')}</a>
          <a href="#modelos" className="font-semibold text-lg uppercase tracking-wider text-center" onClick={() => setIsOpen(false)}>{t('nav.models')}</a>
          <Button href={whatsappLink} target="_blank" variant="primary" className="w-full mt-4">{t('nav.cta')}</Button>
        </div>
      )}
    </nav>
  );
}
