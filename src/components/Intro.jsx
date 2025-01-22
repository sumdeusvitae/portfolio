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
            <span className="font-semibold">Programming:</span>
            <ul className="pl-6 space-y-2">
              <li>Python, Go, C</li>
              <li>Algorithms, OOP, Functional programming</li>
            </ul>
          </li>
          <li className="flex items-start space-x-2">
            <span className="mr-2 text-xl">•</span>
            <span className="font-semibold">Tools:</span>
            <ul className="pl-6 space-y-2">
              <li>Git, Docker, Kubernetes</li>
              <li>CI/CD, GitHub Actions</li>
            </ul>
          </li>
          <li className="flex items-start space-x-2">
            <span className="mr-2 text-xl">•</span>
            <span className="font-semibold">Web Dev:</span>
            <ul className="pl-6 space-y-2">
              <li>SQL, REST APIs, Static Sites</li>
              <li>Cloud (AWS, GCP)</li>
            </ul>
          </li>
          <li className="flex items-start space-x-2">
            <span className="mr-2 text-xl">•</span>
            <span className="font-semibold">Machine Learning:</span>
            <ul className="pl-6 space-y-2">
              <li>CNN, RNN, ANN, Transformers</li>
              <li>TensorFlow, Deep Learning</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}



export default Intro;
