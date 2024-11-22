import React from 'react';
import { Code, Server, Database } from 'lucide-react';

const SkillCard = ({ icon: Icon, title, skills }: { icon: any, title: string, skills: string[] }) => (
  <div className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-2xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300">
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <Icon className="w-10 h-10 mb-6 text-purple-400" />
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <ul className="space-y-3 text-gray-300 relative z-10">
      {skills.map((skill, index) => (
        <li key={index} className="flex items-center">
          <span className="w-2 h-2 rounded-full bg-purple-400 mr-2" />
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

export default function Skills() {
  return (
    <section className="relative py-32 bg-black" id="skills">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
          Tech Stack
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <SkillCard 
            icon={Code}
            title="Frontend"
            skills={["React", "TypeScript", "Angular", "Tailwind"]}
          />
          <SkillCard 
            icon={Server}
            title="Backend"
            skills={["Node.js", "Python", "Django", "Laravel", "Symfony", "PHP"]}
          />
          <SkillCard 
            icon={Database}
            title="Database & Cloud"
            skills={["PostgreSQL", "MySQL", "AWS"]}
          />
        </div>
      </div>
    </section>
  );
}