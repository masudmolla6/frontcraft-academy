import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({topic}) => {
      const {
        topics_id,
        topics_name,
        topics_details,
        topics_about,
        price,
        picture,
      } = topic;
    return (
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img className="w-full h-[250px]" src={picture} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {topics_name}
                <div className="badge badge-secondary">NEW</div>
          </h2>
          <div className="card-actions justify-end">
            <Link
              to={`/courses/topic/${topics_id}`}
              className="border hover:bg-info text-white border-green-300 py-1 px-6 rounded-2xl"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Topic;