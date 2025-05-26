'use client';

import { motion } from 'framer-motion';

const ContactSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Vamos Criar Experiências Incríveis Juntos
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Pronto para tirar sua ideia do papel? Desenvolvo aplicativos modernos, rápidos e com foco total na experiência do usuário.
          </p>

          {/* Localização */}
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span>Belém - PA, Brasil</span>
          </div>

          {/* Botões de Contato */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/5591985735084?text=Ol%C3%A1%2C+vi+seu+portf%C3%B3lio+e+gostaria+de+conversar+sobre+um+projeto."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-full font-medium hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2 shadow-lg shadow-green-500/20"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.52 3.48A11.82 11.82 0 0012.01 0C5.37 0 .03 5.32 0 11.94a11.8 11.8 0 001.62 5.96L0 24l6.27-1.64a11.94 11.94 0 005.73 1.46h.01c6.64 0 12-5.34 12-11.97a11.86 11.86 0 00-3.49-8.37zM12 22a9.87 9.87 0 01-5.01-1.36l-.36-.22-3.73.97.99-3.64-.24-.37A9.92 9.92 0 012 11.93C2.02 6.93 6.49 2.5 12 2.5a9.86 9.86 0 016.99 2.9 9.88 9.88 0 012.92 7.04c0 5.5-4.48 10-10 10z" />
              </svg>
              Entrar em Contato
            </a>

            <a
              href="mailto:louickandrade@gmail.com"
              className="px-8 py-3 bg-gray-800 rounded-full font-medium hover:bg-gray-700 transition-colors inline-flex items-center justify-center gap-2 border border-gray-700"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Meu E-mail
            </a>
          </div>

          {/* Redes Sociais */}
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/louick"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-full"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.599.111.793-.26.793-.577v-2.234C6.207 20.605 5.4 18.5 5.4 18.5c-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.204.084 1.839 1.238 1.839 1.238 1.07 1.833 2.807 1.303 3.492.997.107-.775.418-1.304.762-1.604-2.664-.305-5.466-1.333-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.323 3.3 1.23a11.49 11.49 0 016.006 0c2.292-1.553 3.3-1.23 3.3-1.23.653 1.652.242 2.873.118 3.176.768.84 1.236 1.911 1.236 3.221 0 4.609-2.807 5.625-5.479 5.921.43.373.824 1.103.824 2.222v3.293c0 .319.192.694.8.576C20.565 21.796 24 17.299 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
