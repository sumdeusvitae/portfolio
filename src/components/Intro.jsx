import React from "react";

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">
        Kyrylo Sorokovskyi
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">
        Web Developer & Software Engineer
      </p>
      <p className="text-sm max-w-xl mb-6 font-bold">
        I am a passionate software engineer with interests in web development,
        artificial intelegence, and data science.Seeking to utilize my technical
        and soft skills in real-world applications.{" "}
      </p>
    </div>
  );
}

export default Intro;
