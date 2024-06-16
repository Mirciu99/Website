import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-[#ccd6f6]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Mircea, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              Innovative Full Stack Engineer with extensive experience in developing
              and scaling web applications. Proficient in client-server integration
              and all phases of software development, ensuring enhanced functionality
              and user satisfaction. Skilled in Agile practices, application architecture,
              and performance optimization. Adept at improving code quality, 
              streamlining processes, and delivering high-quality solutions on time.
              Committed to operational excellence and customer satisfaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
