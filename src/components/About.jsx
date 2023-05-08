import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          As a Full Stack Developer, I am passionate about solving complex
          problems and creating innovative solutions using technology.
          Programming allows me to express my creativity and use logic to create
          something new and useful. The ability to build something from scratch,
          using a combination of different programming languages and tools, is
          incredibly fulfilling. I am constantly learning and adapting to new
          technologies, which keeps me motivated and engaged.
        </p>

        <br />

        <p className="text-xl">
          Furthermore, being a Full Stack Developer allows me to work on
          different aspects of a project, from front-end design to back-end
          functionality. This gives me a holistic understanding of the project
          and enables me to make informed decisions. It also allows me to work
          collaboratively with designers, product managers, and other
          developers, which is incredibly rewarding. Being able to take an idea
          from conception to completion is a truly fulfilling experience, and I
          believe that programming and Full Stack Development is the perfect
          field for anyone who is interested in technology and enjoys
          problem-solving.
        </p>
      </div>
    </div>
  );
};

export default About;
