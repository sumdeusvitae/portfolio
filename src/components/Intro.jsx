import React from "react";

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6 px-4">
      <h2 className="text-4xl md:text-5xl dark:text-white mb-2 md:mb-4 font-bold tracking-wide max-w-xl mx-auto">
        Hello, welcome to my Portfolio
      </h2>
      <p className="text-2xl md:text-2xl mb-4 font-medium text-gray-700 dark:text-gray-300 max-w-xl mx-auto">
        A little bit about myself...
      </p>
      <p className="text-l md:text-l mb-6 font-medium text-gray-800 dark:text-gray-200 leading-relaxed max-w-xl mx-auto">
        I’m an engineer passionate about harnessing the power of artificial intelligence, data science, and web development to tackle real-world challenges. With a Bachelor’s Degree in Computer Engineering and hands-on experience as a Transportation Manager, I thrive at the intersection of technology and practical application.

        I’ve delved deep into machine learning, recently completing a specialization that sharpened my skills in building neural networks. My journey includes roles in QA testing, where I honed my attention to detail, and web development, where I enjoy creating user-friendly applications.

        I’m excited to collaborate on innovative projects that make a real impact.
      </p>
    </div>

  );
}

export default Intro;
