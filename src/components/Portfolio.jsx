import React, { useState } from "react";
import portfolio from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";
import Title from "./Title";

function Portfolio() {
  // State to manage the number of items displayed
  const [itemsToShow, setItemsToShow] = useState(2); // Show 2 items initially

  // Function to load more items
  const loadMore = () => {
    setItemsToShow((prev) => prev + 2); // Load 2 more items on each click
  };

  return (
    <>
      <div className="scale-125 flex justify-center mb-5">
        <Title>Projects</Title>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {portfolio.slice(0, itemsToShow).map((project, id) => (
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
      {itemsToShow < portfolio.length && ( // Show button only if there are more items
        <div className="flex justify-center mt-4">
          <button
            onClick={loadMore}
            className="text-center mx-auto inline-block px-4 py-2 w-max text-base font-medium rounded-md text-stone-900 border-4 hover:bg-stone-900 hover:text-white 
            hover:border-white 
            hover:scale-110
            drop-shadow-md 
            dark:text-white dark:hover:bg-white dark:hover:text-stone-900  dark:hover:border-black"
          >
            Load More
          </button>
        </div>
      )}
    </>
  );
}

export default Portfolio;
