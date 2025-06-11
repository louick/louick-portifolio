// app/components/HeroSection.tsx
'use client';
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-16 sm:py-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/50 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent"></div>
      </div>
      <div className="container mx-auto px-4 z-10 text-center">
        <span className="text-lg md:text-xl text-gray-700 mb-2 block font-medium">Olá, eu sou</span>
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-transparent bg-clip-text bg-[size:200%] animate-gradient">
            Louick Andrade
          </span>
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 text-gray-800">
          Desenvolvedor Full-Stack & UI/UX Enthusiast
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed px-4">
          Construindo experiências web e móveis modernas com 
          <span className="text-blue-700 font-medium"> Next.js</span>, 
          <span className="text-purple-700 font-medium"> React</span> e 
          <span className="text-blue-700 font-medium"> TailwindCSS</span>
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
