import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-900 via-gray-900 to-black">
      <div className="absolute inset-0 w-full h-full bg-grid-white/[0.02] bg-grid-pattern" />
      <div className="relative z-10 text-center">
        {/* Floating Image */}
        <div className="relative w-48 h-48 mx-auto mb-4 animate-float">
          <div className="absolute inset-0 rounded-full bg-purple-600/30 blur-xl animate-pulse" />
          <img 
            src="https://i.imgur.com/sXRZ4BW.jpeg"
            alt="Profile" 
            className="relative rounded-full object-cover border-4 border-purple-500 animate-pulse-border shadow-2xl shadow-purple-500/20"
          />
        </div>

        <h1 className="text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
          Amine Rhayem
        </h1>
        <p className="text-2xl text-gray-300 mb-8 font-light">
          Crafting Digital Experiences & Building the Future
        </p>
        <div className="flex justify-center gap-6 mb-12">
          <a href="https://github.com/aminerhayem123" className="transform hover:scale-110 transition-all duration-300">
            <Github className="w-8 h-8 hover:text-purple-400" />
          </a>
          <a href="https://www.linkedin.com/in/aminerhayem/" className="transform hover:scale-110 transition-all duration-300">
            <Linkedin className="w-8 h-8 hover:text-purple-400" />
          </a>
          <a href="/#contact" className="transform hover:scale-110 transition-all duration-300">
            <Mail className="w-8 h-8 hover:text-purple-400" />
          </a>
        </div>
        <div className="flex justify-center">
          <a 
            href="pdf/Full Stack Web Developer.pdf" 
            download 
            className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 transition-all duration-300 font-semibold transform hover:scale-105 shadow-lg shadow-purple-500/20"
          >
            Download CV
          </a>
        </div>
      </div>
      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
}