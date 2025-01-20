import React from "react";
import NewsItem from "./NewsItem";

const News = ({ articles }) => {
  return (
    <>
      <div className="flex justify-center my-5">
        <div className="grid grid-cols-5 gap-x-6 gap-y-3">
          {articles.map((item, index) => (
            <NewsItem
              key={index}
              title={item.title}
              description={item.description}
              image={item.urlToImage}
              author={item.author}
              date={item.publishedAt}
              url={item.url}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default News;
