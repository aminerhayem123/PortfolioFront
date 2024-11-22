import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

interface ExperienceItemProps {
  title: string;
  company: string;
  date: string;
  location: string;
  points: string[];
}

const ExperienceItem = ({ title, company, date, location, points }: ExperienceItemProps) => (
  <div className="relative pl-8 pb-12 group">
    <div className="absolute left-0 top-0 w-1 h-full bg-purple-900 group-last:h-[20px]" />
    <div className="absolute left-[-6px] top-2 w-3 h-3 rounded-full bg-purple-600 shadow-lg shadow-purple-500/50" />
    
    <div className="bg-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-purple-900/20 hover:border-purple-500/50 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-purple-500/10">
      <h3 className="text-2xl font-bold text-purple-400 mb-1">{title}</h3>
      <h4 className="text-xl font-semibold text-gray-300 mb-2">{company}</h4>
      
      <div className="flex items-center gap-4 text-gray-400 mb-4 text-sm">
        <div className="flex items-center gap-1">
          <Calendar size={16} />
          <span>{date}</span>
        </div>
        <div className="flex items-center gap-1">
          <MapPin size={16} />
          <span>{location}</span>
        </div>
      </div>
      
      <ul className="space-y-2">
        {points.map((point, index) => (
          <li key={index} className="text-gray-300 flex gap-2">
            <span className="text-purple-400 mt-1.5">•</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default function Experience() {
  const experiences = [
    {
      title: "FullStack Web Developer",
      company: "FERRY OCEANAIR",
      date: "Jun 2023 – present",
      location: "Dubai",
      points: [
        "Led the development of scalable web applications, optimizing workflows by 35% and enhancing customer experience through dynamic module creation.",
        "Developed a comprehensive import/export management platform using Python Django, streamlining operational workflows, enhancing system efficiency, and improving customer satisfaction.",
        "Built a robust store management system using React.js, Node.js, and PostgreSQL, managing packs, items, and sales transactions. This platform increased sales efficiency by 20% with a 99.9% uptime."
      ]
    },
    {
      title: "Data Science Manager",
      company: "Seekmake",
      date: "Jan 2023 – Nov 2023",
      location: "Tunis",
      points: [
        "Developed and integrated machine learning models into a web platform using Python, Node.js, and TypeScript, enhancing user interaction and functionality.",
        "Implemented predictive algorithms for educational assessments, increasing result accuracy by 60% with AI-driven automation.",
        "Reviewed and optimized code for AI best practices while improving model deployment and management processes, ensuring efficient integration and scalability within the platform."
      ]
    },
    {
      title: "FullStack Web Developer",
      company: "T-CODY",
      date: "Jun 2020 – Jul 2020",
      location: "Tunis, Tunisia",
      points: [
        "Created over 20 reusable Angular components, boosting development speed by 20%, and designed a PostgreSQL database that optimized storage and retrieval by 35%.",
        "Developed a comprehensive soccer management system using Laravel and PHP, enhancing team management and improving user engagement by over 50%.",
        "Optimized backend code in Laravel, reducing server response time, and integrated third-party services via RESTful APIs to enrich the user experience."
      ]
    }
  ];

  return (
    <section className="relative py-32 bg-black" id="experience">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
          Professional Experience
        </h2>
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
}