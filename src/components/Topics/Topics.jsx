import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Topic from "../Topic/Topic";

const Topics = () => {
  const topics = useLoaderData();
  console.log(topics);
    return (
        <div className="w-full">
            <h1>Topics</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 justify-center items-center px-10">
          {topics.map((topic) => (
            <Topic key={topic.topics_id} topic={topic}></Topic>
          ))}
        </div>
      </div>
    );
};

export default Topics;
