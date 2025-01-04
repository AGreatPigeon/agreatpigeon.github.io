// src/App.tsx
import React from 'react';
import { FaAws, FaCode, FaCogs, FaDocker, FaJava, FaPython, FaReact } from 'react-icons/fa';
import { SiApache, SiJenkins, SiMysql, SiSpringboot, SiUnrealengine } from 'react-icons/si';
import './index.css';

const App: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-black to-gray-900 text-gray-300">
      {/* Header */}
      <header className="p-5 bg-gradient-to-r from-indigo-800 to-blue-600 text-white">
        <h1 className="text-3xl font-semibold text-center md:text-left">Hello!</h1>
      </header>

      {/* Main Content */}
      <main className="p-6 space-y-10">

        {/* About Me Section */}
        <section className="">
          <h2 className="text-2xl font-semibold text-center text-blue-400">About Me</h2>
          <div className="flex flex-col items-center md:flex-row md:items-center md:justify-center gap-8 mt-6 px-6">
            <img src="/profile-photo.jpg" alt="My Photo" className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-lg" />
            <div className="text-base leading-relaxed text-center md:text-left max-w-3xl">
              <p>
                Hi, I'm Paul! I'm a software engineer with a passion for game development and AI. After a career in the military which saw me working to protect the UK Airspace from threats, both domestic and international, and also in areas of conflict, I've rediscovered my love of both gaming and how engaging AI and gameplay content can truly make a rewarding and memorable experience.
              </p>
              <br/>
              <p>
                I've worked on various projects, from automating REST API creation of new services in a Data Lake to AWS to enable developers to work on more engaging content, a full stack application to provide a batch dashboard for a data lake, providing trend analysis and early warning for SLA breaches, to engaging gameplay in Unreal Engine 5, utilising Generative AI to provide engaging AI for FPS combat.
              </p>
              <br/>
              <p>
                I'm eager to apply my experience to create engaging and intelligent gameplay experiences.
              </p>
              <br/>
              <div className="flex justify-center md:justify-start space-x-4">
                <a href="https://github.com/agreatpigeon" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">GitHub</a>
                <a href="https://linkedin.com/in/agreatpigeon" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">LinkedIn</a>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="">
          <h2 className="text-2xl font-semibold text-center text-blue-400">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {[{
              title: "Gameplay AI System",
              description: "Built adaptive NPC behavior using Unreal Engine and C++ with real-time debugging tools.",
              link: "https://github.com/agreatpigeon/gameplay-ai-system"
            }, {
              title: "2048",
              description: "Custom version of 2048 in Java, with GUI and custom AI solver developed to attempt to reach highest possible score.",
              link: "https://github.com/AGreatPigeon/2048_Java"
            }, {
              title: "Lady Pacman",
              description: "Lady Pacman in Java, with interactable GUI and using various AI techniques to attempt to reach max level.",
              link: "https://github.com/AGreatPigeon/pacman"
            }, {
              title: "Bashshell",
              description: "Simple Linux Shell application allowing built-in tasks and execution of external system commands.",
              link: "https://github.com/AGreatPigeon/bashshell"
            }, {
              title: "Scalable API Framework",
              description: "High-performance REST API handling 1M+ requests daily with AWS Lambda and DynamoDB.",
              link: "https://github.com/agreatpigeon/scalable-api-framework"
            }].map((project, index) => (
              <div key={index} className="card bg-gray-800 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="card-title text-lg font-semibold text-blue-400">{project.title}</h3>
                <p className="card-text text-sm text-gray-400 mt-2">{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-link text-blue-400 mt-4 block">View on GitHub</a>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="">
          <h2 className="text-2xl font-semibold text-center text-blue-400">Skills</h2>
          <div className="flex flex-wrap justify-center gap-8 mt-6">
            {[{ Icon: FaJava, name: "Java" }, { Icon: FaPython, name: "Python" }, { Icon: FaCode, name: "C++" }, { Icon: SiSpringboot, name: "Spring Boot" }, { Icon: FaReact, name: "React" }, { Icon: SiUnrealengine, name: "Unreal Engine" }, { Icon: FaAws, name: "AWS" }, { Icon: SiMysql, name: "SQL" }, { Icon: SiApache, name: "Spark" }, { Icon: FaDocker, name: "Docker" }, { Icon: FaCogs, name: "Microservices" }, { Icon: SiJenkins, name: "Jenkins" }].map(({ Icon, name }) => (
              <div key={name} className="flex flex-col items-center space-y-2">
                <Icon className="text-4xl text-blue-400" />
                <p className="text-sm font-medium text-gray-300">{name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="">
          <h2 className="text-2xl font-semibold text-center text-blue-400">Education</h2>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md mt-6">
            <h3 className="text-lg font-semibold text-blue-400">MSc Advanced Computer Science with Big Data</h3>
            <p className="text-base text-gray-400">University of Strathclyde, Glasgow — September 2012 - August 2018</p>
            <p className="text-base text-gray-400 mt-4">Relevant Courses:</p>
            <ul className="list-disc pl-6 text-sm text-gray-400">
              <li>Advanced Algorithms</li>
              <li>AI</li>
              <li>Cloud Computing</li>
              <li>Big Data Systems</li>
              <li>OOP</li>
              <li>Data Structures</li>
              <li>Game Development</li>
            </ul>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="p-5 bg-gradient-to-r from-blue-600 to-indigo-800 text-white text-center">
        <p>Made with 💻 using React, TypeScript, and Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default App;
