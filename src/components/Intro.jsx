import React from "react";

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl md:text-5xl dark:text-white mb-1 md:mb-3 font-bold">
        Hi, my name is Kyrylo
      </h1>
      <p className="text-2xl md:text-2xl mb-3 font-medium">
        Web Developer & Software Engineer
      </p>
      <p className="text-base max-w-xl mb-6 font-bold">
        I am a passionate software engineer with interests in web development,
        artificial intelegence, and data science.Seeking to utilize my technical
        and soft skills in real-world applications.
      </p>
    </div>
  );
}

export default Intro;
