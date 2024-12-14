import React from "react";

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string; // URL to redirect when the button is clicked
}

const projects: Project[] = [
  {
    title: "Echo GPT - AI Chatbot",
    description: "A web application built with NextJs and Node.js(NestJs).",
    imageUrl: "/echogpt.png",
    projectUrl: "https://echogpt.live/",
  },
  {
    title: "ManyDial - Automation Calling Tool",
    description: "A web application built with NextJs and Node.js(NestJs).",
    imageUrl: "/manydial.png",
    projectUrl: "https://www.manydial.com",
  },
  {
    title: "Newspaper",
    description: "A web application built with NextJs and Laravel",
    imageUrl: "/durbin.png",
    projectUrl: "https://newspaper.appifydevs.com/",
  },
];

const ProjectShowcase: React.FC = () => {
  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-6 lg:px-20 text-center">
        {/* Section Header */}
        <h2 className="text-4xl font-bold text-gray-800">Project Showcase</h2>
        <p className="text-lg text-gray-600 mt-4">
          Explore some of the projects I've worked on.
        </p>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition-all duration-300"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
               <div className="flex justify-between mt-4">
                 <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition duration-300"
                >
                  View Project
                </a>


                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition duration-300"
                >
                  View Project
                </a>
               </div>
              </div>

              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
