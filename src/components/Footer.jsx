import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-background pt-20 pb-10 border-t border-gray-200 relative overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <a href="#" className="flex items-center justify-center mb-8">
          <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Prime Art Tech" className="h-12 md:h-14 object-contain opacity-90 transition-opacity" />
        </a>
        <p className="text-textMuted font-light mb-12 max-w-lg mx-auto leading-relaxed">
          {t('footer.desc')}
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-12 mb-16 text-sm font-semibold uppercase tracking-widest text-accent/80">
          <a href="#solucao" className="hover:text-gold transition-colors">{t('footer.nav')}</a>
          <a href="#modelos" className="hover:text-gold transition-colors">{t('nav.models')}</a>
          <a href="#" className="hover:text-gold transition-colors">{t('footer.contact')}</a>
          <a href="mailto:contato@primearttech.com" className="hover:text-gold transition-colors lowercase tracking-normal font-normal">
            {t('footer.mail')}
          </a>
        </div>

        <div className="text-xs text-textMuted/60 font-light border-t border-gray-200 pt-8 max-w-2xl mx-auto">
          &copy; {new Date().getFullYear()} {t('footer.rights')}
        </div>
      </div>
    </footer>
  );
}
