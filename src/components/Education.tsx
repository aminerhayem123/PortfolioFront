import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

interface EducationItemProps {
  degree: string;
  school: string;
  date: string;
  location: string;
}

const EducationItem = ({ degree, school, date, location }: EducationItemProps) => (
  <div className="relative group">
    <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-600/20 to-purple-800/20 blur-lg group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow" />
    <div className="relative bg-gray-900/50 backdrop-blur-xl rounded-lg p-6 border border-purple-900/20 hover:border-purple-500/50 transition-all duration-300">
      <GraduationCap className="w-8 h-8 text-purple-400 mb-4" />
      <h3 className="text-xl font-bold text-purple-400 mb-1">{degree}</h3>
      <h4 className="text-lg font-semibold text-gray-300 mb-2">{school}</h4>
      
      <div className="flex items-center gap-4 text-gray-400 text-sm">
        <div className="flex items-center gap-1">
          <Calendar size={16} />
          <span>{date}</span>
        </div>
        <div className="flex items-center gap-1">
          <MapPin size={16} />
          <span>{location}</span>
        </div>
      </div>
    </div>
  </div>
);

export default function Education() {
  const education = [
    {
      degree: "Master in Data Science and Software Development",
      school: "ESEN - University of Manouba",
      date: "Sep 2021 – Jun 2023",
      location: "Tunis, Tunisia"
    },
    {
      degree: "Bachelor of Computer Science",
      school: "Khaznadar School",
      date: "Sep 2014 – Jul 2017",
      location: "Tunis, Tunisia"
    }
  ];

  return (
    <section className="relative py-32 bg-black" id="education">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
          Education
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <EducationItem key={index} {...edu} />
          ))}
        </div>
      </div>
    </section>
  );
}