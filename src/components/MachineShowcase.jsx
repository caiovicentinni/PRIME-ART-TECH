import React from 'react';
import { Settings, Maximize, Zap, EyeOff, LayoutTemplate, Layers } from 'lucide-react';
import { Button } from './ui/Button';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { getWhatsAppUrl } from '../utils/whatsapp';

import classicPoster from '../assets/classic-poster.jpg';
import barPoster from '../assets/bar-poster.jpg';
import classicVideo from '../assets/classic.mp4';
import barVideo from '../assets/bar.mp4';

export default function MachineShowcase() {
  const { t, i18n } = useTranslation();
  const whatsappLink = getWhatsAppUrl(i18n.language);

  return (
    <section className="py-24 bg-surface text-accent" id="modelos">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('models.title')}
          </h2>
          <p className="text-xl text-textMuted max-w-2xl mx-auto font-light">
            {t('models.desc')}
          </p>
        </div>

        <div className="space-y-16">
          {/* Classic Model */}
          <div className="grid md:grid-cols-2 gap-12 items-center bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="relative h-80 md:h-[400px] rounded-2xl overflow-hidden shadow-inner group">
              <video
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src={classicVideo}
                poster={classicPoster}
                autoPlay
                loop
                muted
                playsInline
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/50 to-transparent mix-blend-multiply pointer-events-none"></div>
            </div>
            <div>
              <div className="inline-flex items-center space-x-2 bg-surface px-4 py-2 rounded-full text-gold font-bold text-sm tracking-widest mb-6">
                <Settings className="w-4 h-4" />
                <span>STANDALONE</span>
              </div>
              <h3 className="text-3xl font-bold mb-4">{t('models.classicTitle')}</h3>
              <p className="text-textMuted mb-8 text-lg">
                {t('models.classicDesc')}
              </p>
              <ul className="space-y-4 font-medium">
                <li className="flex items-center"><Zap className="w-5 h-5 text-gold mr-3" /> {t('models.classicFeat1')}</li>
                <li className="flex items-center"><Maximize className="w-5 h-5 text-gold mr-3" /> {t('models.classicFeat2')}</li>
                <li className="flex items-center"><LayoutTemplate className="w-5 h-5 text-gold mr-3" /> {t('models.classicFeat3')}</li>
              </ul>
              <Button href={whatsappLink} target="_blank" variant="primary" className="mt-10 px-10">
                {t('models.cta')}
              </Button>
            </div>
          </div>

          {/* Bar Model */}
          <div className="grid md:grid-cols-2 gap-12 items-center bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-gray-100 flex-col-reverse md:flex-row-reverse">
            <div className="relative h-80 md:h-[400px] rounded-2xl overflow-hidden shadow-inner bg-accent group">
              <video
                className="absolute inset-0 w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
                src={barVideo}
                poster={barPoster}
                autoPlay
                loop
                muted
                playsInline
              />
              <div className="absolute inset-0 bg-gradient-to-bl from-accent/80 to-transparent mix-blend-multiply pointer-events-none"></div>
              <p className="absolute bottom-6 left-6 text-white/50 text-sm italic font-light tracking-wide">
                *Modelo embutido sob o balcão
              </p>
            </div>
            <div>
              <div className="inline-flex items-center space-x-2 bg-surface px-4 py-2 rounded-full text-gold font-bold text-sm tracking-widest mb-6">
                <EyeOff className="w-4 h-4" />
                <span>INTEGRATION</span>
              </div>
              <h3 className="text-3xl font-bold mb-4">{t('models.barTitle')}</h3>
              <p className="text-textMuted mb-8 text-lg">
                {t('models.barDesc')}
              </p>
              <ul className="space-y-4 font-medium">
                <li className="flex items-center"><Layers className="w-5 h-5 text-gold mr-3" /> {t('models.barFeat1')}</li>
                <li className="flex items-center"><EyeOff className="w-5 h-5 text-gold mr-3" /> {t('models.barFeat2')}</li>
                <li className="flex items-center"><Settings className="w-5 h-5 text-gold mr-3" /> {t('models.barFeat3')}</li>
              </ul>
              <Button href={whatsappLink} target="_blank" variant="outline" className="mt-10 px-10 border-2">
                {t('models.cta')}
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
