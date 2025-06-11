// app/components/SkillsSection.tsx
'use client';
import React from 'react';

interface Skill {
  name: string;
  level: number;
}

const skills: Skill[] = [
  { name: 'React & Next.js', level: 98 },
  { name: 'TypeScript', level: 95 },
  { name: 'TailwindCSS', level: 93 },
  { name: 'Node.js & Express', level: 90 },
  { name: 'MongoDB & PostgreSQL', level: 88 },
  { name: 'Docker & Kubernetes', level: 85 },
  { name: 'AWS (Lambda, S3)', level: 87 },
  { name: 'Git & CI/CD', level: 92 }
];

const SkillsSection: React.FC = () => (
  <section className="py-16 md:py-20 bg-gray-50">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Expertise Técnica</h2>
      <p className="text-gray-600 mb-12">
        Domínio das tecnologias mais demandadas pelo mercado
      </p>
      <div className="max-w-3xl mx-auto space-y-6">
        {skills.map((skill, i) => (
          <div key={i} className="text-left">
            <div className="flex justify-between mb-1">
              <span className="font-medium text-gray-800">{skill.name}</span>
              <span className="text-gray-600">{skill.level}%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
