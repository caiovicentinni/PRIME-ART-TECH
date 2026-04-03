import React from 'react';
import { Droplets, Thermometer, Sparkles, Sprout, Cloud, Coffee } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Features() {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Droplets className="w-7 h-7" />,
      title: t('features.f1Title'),
      desc: t('features.f1Desc')
    },
    {
      icon: <Thermometer className="w-7 h-7" />,
      title: t('features.f2Title'),
      desc: t('features.f2Desc')
    },
    {
      icon: <Sparkles className="w-7 h-7" />,
      title: t('features.f3Title'),
      desc: t('features.f3Desc')
    },
    {
      icon: <Sprout className="w-7 h-7" />,
      title: t('features.f4Title'),
      desc: t('features.f4Desc')
    },
    {
      icon: <Cloud className="w-7 h-7" />,
      title: t('features.f5Title'),
      desc: t('features.f5Desc')
    },
    {
      icon: <Coffee className="w-7 h-7" />,
      title: t('features.f6Title'),
      desc: t('features.f6Desc')
    }
  ];

  return (
    <section className="py-24 bg-white" id="diferenciais">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-6">
            {t('features.title')}
          </h2>
          <p className="text-xl text-textMuted max-w-2xl mx-auto font-light">
            {t('features.desc')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, idx) => (
            <motion.div 
              key={idx}
              className="bg-surface p-8 rounded-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-300 border border-gray-100 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                {feat.icon}
              </div>
              <h3 className="text-xl font-bold text-accent mb-4">{feat.title}</h3>
              <p className="text-textMuted leading-relaxed">
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
