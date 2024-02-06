import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import { list } from 'postcss';
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";

const Courses = () => {
    const [courses, setCourses] = useState([]);
    console.log(courses);

    useEffect(() => {
        fetch(`https://frontcraft-academy-server.vercel.app/courses`)
          .then((res) => res.json())
          .then((data) => setCourses(data));
    },[])
    return (
      <div className="grid grid-rows-2 grid-flow-col relative">
        <div className="row-span-4 border-r bg-cyan-950">
          <h1 className="text-center text-2xl pb-3 border-b pt-4 italic text-">Course List</h1>
          <div className="w-full">
            {courses.map((course) => (
              <li
                className="text-xl text-center mt-10 hover:bg-neutral-500 list-none px-6 border-b rounded-full"
                key={course.id}
              >
                <Link to={`/courses/${course.id}`}>{course.name}</Link>
              </li>
            ))}
          </div>
        </div>
        <div className="row-span-8 w-full">
          <Marquee className="text-center text-2xl py-5 text-teal-400">
            Belieav And Respect Your Goal.Hard Work And Show What You Can Do.
          </Marquee>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 justify-center items-center px-10 w-full">
            {courses.map((course) => (
              <Course key={course.id} course={course}></Course>
            ))}
          </div>
        </div>
      </div>
    );
};

export default Courses;