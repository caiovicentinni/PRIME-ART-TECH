import React from 'react';
import { Star, MessageSquareQuote } from 'lucide-react';
import { Button } from './ui/Button';
import { useTranslation } from 'react-i18next';
import { getWhatsAppUrl } from '../utils/whatsapp';

export default function Testimonials() {
  const { t, i18n } = useTranslation();
  const whatsappLink = getWhatsAppUrl(i18n.language);

  const testimonials = [
    {
      text: t('testimonials.t1Text'),
      author: t('testimonials.t1Author'),
      role: t('testimonials.t1Role'),
      rating: 5
    },
    {
      text: t('testimonials.t2Text'),
      author: t('testimonials.t2Author'),
      role: t('testimonials.t2Role'),
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-surface" id="depoimentos">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-accent">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-textMuted max-w-2xl mx-auto font-light">
            {t('testimonials.desc')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {testimonials.map((test, idx) => (
            <div key={idx} className="bg-surface p-10 rounded-2xl relative shadow-sm border border-gray-100">
              <MessageSquareQuote className="absolute top-8 right-8 w-12 h-12 text-gold/20" />
              <div className="flex space-x-1 mb-6">
                {[...Array(test.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-lg md:text-xl text-accent/80 font-medium italic leading-relaxed mb-8 relative z-10">
                "{test.text}"
              </p>
              <div>
                <div className="font-bold text-accent text-lg">{test.author}</div>
                <div className="text-gold font-medium text-sm tracking-wide uppercase mt-1">{test.role}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA Block */}
        <div className="bg-accent rounded-3xl p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[200%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/20 via-transparent to-transparent opacity-50 block"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
              {t('testimonials.finalTitle')}
            </h2>
            <p className="text-xl text-gray-300 font-light mb-12">
              {t('testimonials.finalDesc')}
            </p>
            <Button href={whatsappLink} target="_blank" variant="gold" className="px-12 py-5 text-lg w-full sm:w-auto shadow-[0_0_40px_rgba(212,175,55,0.3)] hover:shadow-[0_0_60px_rgba(212,175,55,0.5)]">
              {t('testimonials.finalCta')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
