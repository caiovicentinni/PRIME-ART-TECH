import React from 'react';
import { TrendingDown, Clock, XOctagon } from 'lucide-react';
import { Button } from './ui/Button';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { getWhatsAppUrl } from '../utils/whatsapp';

export default function ProblemSolution() {
  const { t, i18n } = useTranslation();
  const whatsappLink = getWhatsAppUrl(i18n.language);

  return (
    <section className="py-24 bg-surface text-accent relative" id="solucao">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-accent">
              {t('problem.title')}
            </h2>
            <p className="text-lg mb-10 text-accent/80 font-medium">
              {t('problem.desc')}
            </p>

            <div className="space-y-6">
              <div className="flex items-start bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                <Clock className="w-8 h-8 text-red-500 mr-5 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg">{t('problem.point1')}</h3>
                  <p className="text-accent/60 mt-1">{t('problem.desc1')}</p>
                </div>
              </div>
              <div className="flex items-start bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                <TrendingDown className="w-8 h-8 text-red-500 mr-5 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg">{t('problem.point2')}</h3>
                  <p className="text-accent/60 mt-1">{t('problem.desc2')}</p>
                </div>
              </div>
              <div className="flex items-start bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                <XOctagon className="w-8 h-8 text-red-500 mr-5 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg">{t('problem.point3')}</h3>
                  <p className="text-accent/60 mt-1">{t('problem.desc3')}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-accent text-white p-8 md:p-12 rounded-3xl relative overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-surface/10 rounded-full blur-3xl -ml-20 -mb-20"></div>
            
            <div className="relative z-10">
              <span className="bg-gold text-white text-xs font-bold px-3 py-1 uppercase tracking-widest rounded-full mb-6 inline-block">
                A Solução
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t('problem.solutionTitle')}
              </h2>
              <p className="text-gray-300 text-lg mb-10 leading-relaxed font-light">
                {t('problem.solutionDesc')}
              </p>

              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="border-l-2 border-gold pl-4">
                  <div className="text-3xl font-bold text-white mb-1">{t('problem.stat1')}</div>
                  <div className="text-sm text-gold font-medium uppercase tracking-wider">{t('problem.stat1Desc')}</div>
                </div>
                <div className="border-l-2 border-gold pl-4">
                  <div className="text-3xl font-bold text-white mb-1">{t('problem.stat2')}</div>
                  <div className="text-sm text-gold font-medium uppercase tracking-wider">{t('problem.stat2Desc')}</div>
                </div>
              </div>

              <Button href={whatsappLink} target="_blank" variant="gold" className="w-full">
                {t('problem.cta')}
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
