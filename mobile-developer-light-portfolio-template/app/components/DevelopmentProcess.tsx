// app/components/DevelopmentProcess.tsx
'use client';
import React from 'react';

interface Process {
  title: string;
  steps: string[];
}

const processes: Process[] = [
  {
    title: 'Planejamento & Design',
    steps: [
      'Mapeamento de requisitos e pesquisa de mercado',
      'Wireframes e protótipos de alta fidelidade',
      'Definição de user flows e UX/UI responsivo'
    ]
  },
  {
    title: 'Desenvolvimento Ágil',
    steps: [
      'Configuração de arquitetura e CI/CD',
      'Sprints curtos com testes automatizados',
      'Code review contínuo'
    ]
  },
  {
    title: 'Lançamento & Escala',
    steps: [
      'Deploy em Vercel/GitHub Pages',
      'Monitoramento de performance e analytics',
      'Iterações com novas features'
    ]
  }
];

const DevelopmentProcess: React.FC = () => (
  <section className="py-16 md:py-20">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Processo de Desenvolvimento</h2>
      <p className="text-gray-600 mb-12">
        Uma abordagem sistemática para entregar soluções de alta qualidade
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {processes.map((proc, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4">{proc.title}</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              {proc.steps.map((s, j) => (
                <li key={j}>{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default DevelopmentProcess;
