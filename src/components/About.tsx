import React from 'react';

export default function About() {
  return (
    <section className="relative py-32 bg-black" id="about">
      <div className="container mx-auto px-4">
        <div className="relative z-20 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            About Me
          </h2>
          <div className="bg-gray-900/50 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-gray-800">
            <p className="text-xl text-gray-300 leading-relaxed">
              Passionate Full Stack Developer with a keen eye for creating elegant solutions. 
              Specializing in building scalable applications and implementing cutting-edge technologies.
              With expertise in both frontend and backend development, I bring ideas to life through code.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-pattern" />
    </section>
  );
}