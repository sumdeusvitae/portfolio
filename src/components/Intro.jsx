import React from "react";

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6 px-4">
      <h2 className="text-4xl md:text-5xl dark:text-white mb-2 md:mb-4 font-bold tracking-wide max-w-xl mx-auto">
        Welcome to my Portfolio
      </h2>
      <div className="w-full max-w-xl text-left">
        <p className="text-2xl md:text-2xl mb-4 font-medium text-gray-700 dark:text-gray-300">
          Skills:
        </p>
        <ul className="text-l md:text-l mb-6 font-medium text-gray-800 dark:text-gray-200 leading-relaxed max-w-xl mx-auto list-none">
          <li className="mb-2 flex items-start">
            <span className="mr-2 text-xl">•</span>
            <span>GO, Python, JavaScript, C</span>
          </li>
          <li className="mb-2 flex items-start">
            <span className="mr-2 text-xl">•</span>
            <span>PostgreSQL, SQLite, MongoDB</span>
          </li>
          <li className="mb-2 flex items-start">
            <span className="mr-2 text-xl">•</span>
            <span>Docker, GCP, AWS</span>
          </li>
          <li className="mb-2 flex items-start">
            <span className="mr-2 text-xl">•</span>
            <span>Git, GitHub, GitHub Actions</span>
          </li>
          <li className="mb-2 flex items-start">
            <span className="mr-2 text-xl">•</span>
            <span>CNN, Deep Learning, Machine Learning</span>
          </li>
        </ul>
      </div>
    </div>



  );
}

export default Intro;
