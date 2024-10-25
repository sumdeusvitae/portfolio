import React from "react";

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h2 className="text-4xl md:text-5xl dark:text-white mb-1 md:mb-3 font-bold">
        Hello and welcome to my portfolio
      </h2>
      <p className="text-2xl md:text-2xl mb-3 font-medium">
        Little bit about myself...
      </p>
      <p className="text-base max-w-lg mb-6 font-bold">
        I’m an engineer passionate about harnessing the power of artificial intelligence, data science, and web development to tackle real-world challenges. With a Bachelor’s Degree in Computer Engineering and hands-on experience as a Transportation Manager, I thrive at the intersection of technology and practical application.

        I’ve delved deep into machine learning, recently completing a specialization that sharpened my skills in building neural networks. My journey includes roles in QA testing, where I honed my attention to detail, and web development, where I enjoy creating user-friendly applications.

        I’m excited to collaborate on innovative projects that make a real impact.
      </p>
    </div>
  );
}

export default Intro;
