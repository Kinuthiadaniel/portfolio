import React from 'react';
import portfolio from '../assets/Screenshot from 2025-01-14 11-41-17.png'
import expenseTracker from '../assets/Screenshot from 2025-01-14 11-52-50.png'
import ecommerce from '../assets/Screenshot from 2025-01-14 11-55-56.png'

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio website .",
    image: portfolio,
    link: "https://daniel-kinuthia.vercel.app/",
    techStack: 'Tech Stack : React.js, TailWind'
  },
  {
    title: "Expense Tracker",
    description: "An application to track your daily expenses",
    image: expenseTracker,
    link: "https://maina2907.github.io/expense-tracker-app/",
    techStack: 'Tech Stack : React.js, Flask, CSS',
  },
  {
    title: "Shopper Community App",
    description:
      "ShopHorizon is a robust e-commerce platform designed to enhance the online shopping experience. It provides users with a user-friendly interface to browse products, compare prices across various sites, and securely manage their shopping sessions. The platform is equipped with features that ensure both convenience and security for its users.",
    image: ecommerce,
    link: 'https://shoppers-community.vercel.app/',
    techStack: 'Tech Stack : React.js, Flask, TailWind',
  },
];

const ProjectCard = ({ project, handleClick }) => (

  <div
    onClick={() => handleClick(project)}
    className="max-w-sm rounded overflow-hidden shadow-lg bg-slate text-white transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
  >

    <img
      className="w-full h-48 object-cover"
      src={project.image}
      alt={project.title}
    />
    <div className="px-6 py-4">
      <h3 className="font-bold text-xl mb-2">{project.title}</h3>
      <p className="text-gray-200 text-base mb-5">{project.description}</p>
      <p className="text-gray-200 text-base">{project.techStack}</p>

    </div>
    <div className="px-6 pt-4 pb-2">
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        View Project
      </a>
    </div>
  </div>
);

const Projects = () => {
  const handleClick = (project) => {
    window.open(project.link, "_blank");
    console.log(`You clicked on ${project.title}`);
  };

  return (
    <div className="min-h-screen bg-slate-800 py-8 px-4">
      <h1 className="text-4xl font-bold text-center text-white mb-8">
        My Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

        {projects.map((project, index) => (

          <ProjectCard key={index} project={project} handleClick={handleClick} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
