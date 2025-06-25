// app/components/AppShowcase.tsx
'use client';

import React from 'react';
import Image from 'next/image';

interface App {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  platforms: string[];
  url: string;
  tag: 'Featured' | 'Project';
  screenshot: string;
}

const apps: App[] = [
  {
    id: 1,
    name: 'Neuvye',
    description: 'A Neuvye é um laboratório magistral estéril de grande porte.',
    technologies: ['Next.js', 'React', 'TailwindCSS'],
    platforms: ['Web'],
    url: 'https://neuvye.com.br/',
    tag: 'Featured',
    screenshot: '/screenshots/neuvye.png',
  },
  {
    id: 2,
    name: 'Pluxee',
    description: 'Plataforma de gestão financeira empresarial',
    technologies: ['Next.js', 'TypeScript', 'Node.js'],
    platforms: ['Web'],
    url: 'https://www.pluxee.com.br/',
    tag: 'Project',
    screenshot: '/screenshots/pluxee.png',
  },
  {
    id: 3,
    name: 'Balzar Arquitectos',
    description: 'Portfólio online para escritório de arquitetura',
    technologies: ['WordPress', 'PHP', 'Elementor'],
    platforms: ['Web'],
    url: 'https://balzararquitectos.com/',
    tag: 'Project',
    screenshot: '/screenshots/balzar.png',
  },
  {
    id: 4,
    name: 'Illumicell',
    description: 'Plataforma de inteligência artificial aplicada à biotecnologia celular',
    technologies: ['Next.js', 'React', 'TailwindCSS'],
    platforms: ['Web'],
    url: 'https://www.illumicell.ai/',
    tag: 'Project',
    screenshot: '/screenshots/illumicell.png',
  },
  {
    id: 5,
    name: 'Casa SEAT',
    description: 'Site institucional e de eventos do espaço cultural Casa SEAT, Barcelona',
    technologies: ['Next.js', 'React', 'TailwindCSS'],
    platforms: ['Web'],
    url: 'https://www.casa.seat/en/home',
    tag: 'Project',
    screenshot: '/screenshots/casaseat.png',
  },
  {
    id: 6,
    name: 'Luis Callejas',
    description: 'Portfólio internacional do arquiteto Luis Callejas',
    technologies: ['Next.js', 'React', 'TailwindCSS'],
    platforms: ['Web'],
    url: 'https://www.luiscallejas.com/filter/architecture',
    tag: 'Project',
    screenshot: '/screenshots/lcla.png',
  },
  {
    id: 7,
    name: 'Viva Fortalezinha',
    description: 'Site oficial de hospedagem e turismo em Fortalezinha, PA',
    technologies: ['Next.js', 'React', 'TailwindCSS'],
    platforms: ['Web'],
    url: 'https://vivafortalezinha.com.br/',
    tag: 'Project',
    screenshot: '/screenshots/viva-fortalezinha.png',
  },
];

const featuredApp = apps.find(a => a.tag === 'Featured')!;
const otherApps = apps.filter(a => a.tag === 'Project');

const AppShowcase: React.FC = () => (
  <section className="py-16 md:py-20 bg-gray-50">
    <div className="container mx-auto px-4 space-y-12">
      {/* Projeto em Destaque */}
      <div>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-900">
          Projeto em Destaque
        </h2>
        <a
          href={featuredApp.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group block mx-auto max-w-4xl p-1 rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 transition-colors"
        >
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-shadow flex flex-col md:flex-row">
            {/* Screenshot */}
            <div className="h-64 md:h-auto md:w-1/2 relative overflow-hidden">
              <Image
                src={featuredApp.screenshot}
                alt={`${featuredApp.name} screenshot`}
                width={800}
                height={450}
                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Conteúdo */}
            <div className="p-8 flex flex-col justify-center md:w-1/2">
              <span className="inline-block px-3 py-1 mb-4 bg-green-500 text-white text-xs font-semibold rounded-full">
                Destaque
              </span>
              <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {featuredApp.name}
              </h3>
              <p className="text-gray-600 mb-6">{featuredApp.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {featuredApp.technologies.map(tech => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 bg-gray-100 rounded-full text-xs text-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {/* substituí o <a> interno por um <span> */}
              <span className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full font-medium text-center group-hover:bg-blue-700 transition-colors">
                Ver Site
              </span>
            </div>
          </div>
        </a>
      </div>

      {/* Outros Projetos */}
      <div>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-900">
          Outros Projetos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {otherApps.map(project => (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-1 rounded-3xl bg-gradient-to-br from-purple-500 to-blue-500 hover:from-blue-500 hover:to-purple-500 transition-colors"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-md group-hover:shadow-lg transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.screenshot}
                    alt={`${project.name} screenshot`}
                    width={600}
                    height={360}
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 px-2 py-0.5 bg-gray-800 text-white text-[10px] font-semibold rounded">
                    Projeto
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map(tech => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-gray-100 rounded-full text-xs text-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {project.platforms.join(', ')}
                    </span>
                    <span className="px-3 py-1 bg-purple-600 text-white text-xs font-medium rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      Ver Projeto
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AppShowcase;
