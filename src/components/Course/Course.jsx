import React from "react";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
  const { id, picture, name } = course;
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img className="w-full h-[250px]" src={picture} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <div className="card-actions justify-end">
          <Link to={`/courses/${id}`} className="border hover:bg-info text-white border-green-300 py-1 px-6 rounded-2xl">
            Topics
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Course;
