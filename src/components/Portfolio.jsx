import React from "react";
import portfolio from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";
import Title from "./Title";

function Portfolio () {
  return (
    <>
      <div className="scale-125 flex justify-center mb-5">
        <Title>My Projects</Title>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {/* Need to fix back to lg:grid-cols-2 */}
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
