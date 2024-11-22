import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

interface ProjectItemProps {
  title: string;
  imageUrl: string;
  link: string;
}

const ProjectItem = ({ title, imageUrl, link }: ProjectItemProps) => (
  <div className="relative group w-full h-full">
    <div className="relative bg-gray-900/50 backdrop-blur-none rounded-lg p-6 border border-purple-900/20 hover:border-purple-500/50 transition-all duration-300 w-full h-full">
      {/* Increased image height and used object-contain for clarity */}
      <img src={imageUrl} alt={`${title} preview`} className="rounded-md mb-4 w-full h-96 object-contain" /> {/* Increased height to h-96 */}
      <h3 className="text-xl font-bold text-purple-400 mb-2">{title}</h3>
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="inline-block px-6 py-2 mt-4 bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 transition-all duration-300 text-white rounded-full font-semibold shadow-lg shadow-purple-500/20 transform hover:scale-105"
      >
        View Project
      </a>
    </div>
  </div>
);

const Projects: React.FC = () => {
  const projects = [
    {
      title: "CI/CD Machine Learning Prediction + Web Integration",
      imageUrl: "https://i.imgur.com/08ITV2r.png",
      link: "https://www.youtube.com/watch?v=1yAQjpJyQrQ&t=48s&ab_channel=SeekMake"
    },
    {
      title: "Python/Django Dashboard For Dropshipping Transactions",
      imageUrl: "https://i.imgur.com/cW8DqAB.png",  // Ensure the image URL is high quality
      link: "https://drive.google.com/file/d/11yxbHVGWLCdAjwus_xJ_xsD5f8Y5mhR7/view"
    },
    // Add more projects here
    {
      title: "React.js/node.js Dashboard For Containers items Transactions managment",
      imageUrl: "https://i.imgur.com/T8I9JEw.png",  // Ensure the image URL is high quality
      link: "https://www.loom.com/share/98c27e6dafbd4bb6872792d745e9fc89?sid=64473e90-9aab-4061-a6b1-b0d2bfeab7be"
    },
    {
      title: "C#/Unity Zombie video game 2D",
      imageUrl: "https://i.imgur.com/MSUJ5g4.png",  // Ensure the image URL is high quality
      link: "https://github.com/aminerhayem123/2D_Game_zombie"
    },
    {
      title: "Flutter/Firebase Event Handler APP",
      imageUrl: "https://i.imgur.com/PkVejB8.png",  // Ensure the image URL is high quality
      link: "https://github.com/aminerhayem123/Events-Flutter"
    },
    {
      title: "C# Streamlining Library Operations with My New Library Management System",
      imageUrl: "https://i.imgur.com/qht1MvF.png",  // Ensure the image URL is high quality
      link: "https://github.com/aminerhayem123/.NET"
    },
    {
      title: "Smart Word Detection and Colorful Labeling System with Django & Angular",
      imageUrl: "https://i.imgur.com/VjC1SRu.jpeg",  // Ensure the image URL is high quality
      link: "https://github.com/aminerhayem123/Angular_Django"
    },
    {
      title: "Building Connections: A Social Networking App with Django",
      imageUrl: "https://i.imgur.com/DsrMBt1.png",  // Ensure the image URL is high quality
      link: "https://github.com/aminerhayem123/social-app-django"
    },
    {
      title: " A Modern Healthcare Platform with Next.js & TypeScript",
      imageUrl: "https://i.imgur.com/xRLKCSu.png",  // Ensure the image URL is high quality
      link: "https://github.com/aminerhayem123/healthcare"
    },
  ];

  return (
    <section className="relative py-32 bg-black" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
          Projects
        </h2>
        <Carousel 
          autoPlay 
          interval={3000} 
          infiniteLoop 
          showArrows={true} 
          showThumbs={false} 
          showStatus={false}
          className="max-w-4xl mx-auto"
        >
          {projects.map((project, index) => (
            <div key={index}>
              <ProjectItem {...project} />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Projects;
