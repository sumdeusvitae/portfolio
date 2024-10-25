import React, { useState } from "react";

function PortfolioItem({ title, imgUrl, stack, link }) {
  return (
    <a
      href={link}
      target="_blank"
      className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden hover:scale-105"
    >
      <img
        src={imgUrl}
        alt="portfolio"
        className="w-full h-36 md:h-48 object-cover cursor-pointer"
      />
      <div className="w-full p-4">
        <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold">
          {title}
        </h3>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white">
          {stack.map((each, id) => (
            <span
              key={id}
              className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md"
            >
              {each}
            </span>
          ))}
        </p>
      </div>
    </a>
  );
}

function Portfolio({ items }) {
  const [visibleCount, setVisibleCount] = useState(2); // Start with 2 items visible

  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 2); // Load 2 more items
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.slice(0, visibleCount).map((item, index) => (
          <PortfolioItem
            key={index}
            title={item.title}
            imgUrl={item.imgUrl}
            stack={item.stack}
            link={item.link}
          />
        ))}
      </div>
      {visibleCount < items.length && ( // Show button only if there are more items to load
        <button
          onClick={handleLoadMore}
          className="mt-4 p-2 bg-blue-500 text-white rounded"
        >
          Load More
        </button>
      )}
    </div>
  );
}

export default Portfolio;
