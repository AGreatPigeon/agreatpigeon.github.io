// src/App.tsx
import React from 'react';
import { FaAws, FaCode, FaCogs, FaDocker, FaJava, FaPython, FaReact } from 'react-icons/fa';
import { SiApache, SiJenkins, SiMysql, SiSpringboot, SiUnrealengine } from 'react-icons/si';
import './index.css';

const App: React.FC = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="p-5 bg-blue-600 text-white">
        <h1 className="text-3xl font-bold text-center md:text-left">My Portfolio</h1>
      </header>

      {/* Main Content */}
      <main className="p-5">

        {/* About Me Section */}
        <section className="my-10">
          <h2 className="text-2xl font-semibold text-center">About Me</h2>
          <div className="flex flex-col items-center md:flex-row md:items-center md:justify-center gap-5 mt-5 px-5">
            <img src="${process.env.PUBLIC_URL}/profile-photo.jpg" alt="My Photo" className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full object-cover" />
            <p className="text-lg text-center md:text-left max-w-2xl">
              Hi, I'm Paul! I'm a software engineer with a passion for game development and AI. After a career in the military which saw me working to protect the UK Airspace from threats, both domestic and international, and also in areas of conflict, I've rediscovered my love of both gaming and how engaging AI and gameplay content can truly make a rewarding and memorable experience.
              <br></br>
              <br></br>
              I've worked on various projects, from automating REST API creation of new services in a Data Lake to AWS to enable developers to work on more engaging content, a full stack application to provide a batch dashboard for a data lake, providing trend analysis and early warning for SLA breaches, to engaging gameplay in Unreal Engine 5, utilising Generative AI to provide engaging AI for FPS combat. 
              <br></br>
              <br></br>
              I'm eager to apply my experience to create engaging and intelligent gameplay experiences.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section className="my-10">
          <h2 className="text-2xl font-semibold text-center">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">

            {/* Project 1 */}
            <div className="card bg-white p-5 rounded-lg shadow-md">
              <h3 className="card-title text-xl font-semibold">Gameplay AI System</h3>
              <p className="card-text">Built adaptive NPC behavior using Unreal Engine and C++ with real-time debugging tools.</p>
              <br></br>
              <a href="https://github.com/agreatpigeon/gameplay-ai-system" target="_blank" rel="noopener noreferrer" className="btn btn-link text-blue-600">View on GitHub</a>
            </div>

            {/* Project 2 */}
            <div className="card bg-white p-5 rounded-lg shadow-md">
              <h3 className="card-title text-xl font-semibold">2048</h3>
              <p className="card-text">Custom version of 2048 in Java, with GUI and custom AI solver developed to attempt to reach highest possible score.</p>
              <br></br>
              <a href="https://github.com/AGreatPigeon/2048_Java" target="_blank" rel="noopener noreferrer" className="btn btn-link text-blue-600">View on GitHub</a>
            </div>

            {/* Project 3 */}
            <div className="card bg-white p-5 rounded-lg shadow-md">
              <h3 className="card-title text-xl font-semibold">Lady Pacman</h3>
              <p className="card-text">Lady Pacman in Java, with interactable GUI and using various AI techniques to attempt to reach max level.</p>
              <br></br>
              <a href="https://github.com/AGreatPigeon/pacman" target="_blank" rel="noopener noreferrer" className="btn btn-link text-blue-600">View on GitHub</a>
            </div>

            {/* Project 4 */}
            <div className="card bg-white p-5 rounded-lg shadow-md">
              <h3 className="card-title text-xl font-semibold">Bashshell</h3>
              <p className="card-text">
                This is a simple Linux Shell application which allows the user to perform various built-in tasks whilst also allowing the execution of external system commands where none have been coded in the application. This code program is designed to take in Command from the user and carry them out using the fork command in Linux or using built-in Function to perform some functions.
              </p>
              <br></br>
              <a href="https://github.com/AGreatPigeon/bashshell" target="_blank" rel="noopener noreferrer" className="btn btn-link text-blue-600">View on GitHub</a>
            </div>

            {/* Project 5 */}
            <div className="card bg-white p-5 rounded-lg shadow-md">
              <h3 className="card-title text-xl font-semibold">Scalable API Framework</h3>
              <p className="card-text">High-performance REST API handling 1M+ requests daily with AWS Lambda and DynamoDB.</p>
              <br></br>
              <a href="https://github.com/agreatpigeon/scalable-api-framework" target="_blank" rel="noopener noreferrer" className="btn btn-link text-blue-600">View on GitHub</a>
            </div>

          </div>
        </section>

        {/* Skills Section */}
        <section className="my-10">
  <h2 className="text-2xl font-semibold text-center">Skills</h2>
  <div className="flex flex-wrap justify-center gap-8 mt-5">
    {[
      { Icon: FaJava, name: "Java" },
      { Icon: FaPython, name: "Python" },
      { Icon: FaCode, name: "C++" },
      { Icon: SiSpringboot, name: "Spring Boot" },
      { Icon: FaReact, name: "React" },
      { Icon: SiUnrealengine, name: "Unreal Engine" },
      { Icon: FaAws, name: "AWS" },
      { Icon: SiMysql, name: "SQL" },
      { Icon: SiApache, name: "Spark" },
      { Icon: FaDocker, name: "Docker" },
      { Icon: FaCogs, name: "Microservices" },
      { Icon: SiJenkins, name: "Jenkins" },
    ].map(({ Icon, name }) => (
      <div
        key={name}
        className="flex flex-col items-center justify-center space-y-2"
      >
        <Icon className="text-4xl text-blue-600" />
        <p className="text-sm font-medium">{name}</p>
      </div>
    ))}
  </div>
</section>

        
        {/* Education Section */}
        <section className="my-10">
          <h2 className="text-2xl font-semibold text-center">Education</h2>
          <div className="bg-white p-5 rounded-lg shadow-md mt-5">
            <h3 className="text-xl font-semibold">MSc Advanced Computer Science with Big Data</h3>
            <p className="text-lg">University of Strathclyde, Glasgow — September 2012 - August 2018</p>
            <br></br>
            <p className="text-lg">Relevant Courses:</p>
            <ul className="list-disc pl-5">
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
      <footer className="p-5 bg-blue-600 text-white text-center">
        <p>Made with 💻 using React, TypeScript, and Tailwind CSS</p>
      </footer>
    </div>
  );
}

export default App;
