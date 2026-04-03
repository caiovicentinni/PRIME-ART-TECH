import React from 'react';
import { Play } from 'lucide-react';
import { Button } from './ui/Button';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { getWhatsAppUrl } from '../utils/whatsapp';

export default function Hero() {
  const { t, i18n } = useTranslation();
  const whatsappLink = getWhatsAppUrl(i18n.language);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-accent">
      <div className="absolute inset-0 z-0">
        <video 
          className="w-full h-full object-cover opacity-30"
          autoPlay 
          muted 
          loop 
          playsInline
          src={`${import.meta.env.BASE_URL}videoprincipal_compressed.mp4`}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 pt-20">
        <motion.div 
          className="text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-gold font-bold tracking-[0.2em] text-sm md:text-base uppercase mb-6 block">
            {t('hero.eyebrow')}
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-accent tracking-tight leading-[1.05] mb-8">
            {t('hero.title1')}<br />
            {t('hero.title2')}<br />
            <span className="text-textMuted">{t('hero.title3')}</span>
          </h1>
          <p className="text-lg md:text-xl text-textLight font-light mb-10 max-w-lg leading-relaxed mix-blend-color-burn">
            {t('hero.desc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-5">
            <Button href={whatsappLink} target="_blank" variant="primary" className="shadow-2xl shadow-accent/20">
              {t('hero.cta')}
            </Button>
            <Button href="#modelos" variant="outline" className="group bg-white/40 backdrop-blur-sm border-accent/20">
              <Play className="w-5 h-5 mr-3 text-gold group-hover:text-white" fill="currentColor" />
              {t('hero.videoCta')}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
