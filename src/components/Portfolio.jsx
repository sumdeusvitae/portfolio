import React from "react";
import portfolio from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";
import Title from "./Title";

function Portfolio() {
  return (
    <>
      <h1 className="mx-auto text-4xl text-center mb-6 font-bold underline underline-offset-8 decoration-8 dark:text-white">
        My Projects
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {portfolio.map((project, id) => (
            <PortfolioItem
              key={id}
              imgUrl={project.imgUrl}
              title={project.title}
              stack={project.stack}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Portfolio;
