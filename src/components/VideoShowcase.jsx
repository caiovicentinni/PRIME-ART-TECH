import React, { useState } from 'react';
import { Play, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function VideoShowcase() {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="py-24 bg-accent text-white relative overflow-hidden" id="video">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-gold font-bold tracking-[0.2em] text-sm uppercase mb-4 block">
              {t('video.eyebrow')}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              {t('video.title')}
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto font-light">
              {t('video.desc')}
            </p>
          </motion.div>

          {/* Embedded YouTube Player */}
          <motion.div
            className="relative rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(212,175,55,0.15)] border border-white/10"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="aspect-video w-full">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/rG345EOAq2E?rel=0&modestbranding=1&color=white"
                title="Latte Art Factory - Demonstração"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>

          {/* CTA to fullscreen */}
          <motion.div
            className="text-center mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <button 
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-3 text-gold hover:text-white transition-colors font-semibold tracking-wide group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full border-2 border-gold group-hover:border-white group-hover:bg-white/10 flex items-center justify-center transition-all">
                <Play className="w-5 h-5" fill="currentColor" />
              </div>
              {t('video.fullscreen')}
            </button>
          </motion.div>
        </div>
      </section>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            <button 
              className="absolute top-6 right-6 text-white/60 hover:text-white z-10 transition-colors cursor-pointer"
              onClick={() => setIsModalOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div
              className="w-full max-w-6xl aspect-video"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                className="w-full h-full rounded-xl"
                src="https://www.youtube.com/embed/rG345EOAq2E?autoplay=1&rel=0&modestbranding=1"
                title="Latte Art Factory - Tela Cheia"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
