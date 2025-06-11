// app/components/ContactSection.tsx
'use client';
import React from 'react';
import { motion } from 'framer-motion';

const ContactSection: React.FC = () => (
  <section className="py-20 px-4">
    <div className="max-w-4xl mx-auto text-center space-y-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent"
      >
        Vamos Conversar?
      </motion.h2>
      <p className="text-gray-600">
        Para parcerias ou dúvidas sobre meus serviços, me chame no WhatsApp!
      </p>
      <a
        href="https://wa.me/5591985735084?text=Olá%20Louick%21%20Gostaria%20de%20saber%20mais%20sobre%20seu%20trabalho."
        target="_blank"
        className="inline-flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full font-medium hover:opacity-90 transition-opacity shadow-lg"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.52,3.48A11.87,11.87,0,0,0,2.19,9.6l...Z" />
        </svg>
        Contate-me no WhatsApp
      </a>
    </div>
  </section>
);

export default ContactSection;
