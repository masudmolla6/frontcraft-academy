import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import { list } from 'postcss';
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import { FaHtml5, FaCss3,FaJs,FaReact,FaNodeJs,FaGithub } from "react-icons/fa";
import { SiTailwindcss,SiBootstrap,SiFirebase,SiMongodb,SiExpress } from "react-icons/si";


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
          <h1 className="text-center text-2xl pb-3 border-b pt-4 italic text-">
            Course List
          </h1>
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
          <Marquee className="text-center text-2xl py-5 text-teal-400 right-0">
            <div className="grid w-full md:grid-cols-12 grid-cols-6 justify-center items-center gap-3 ">
              <FaHtml5 className="text-2xl"></FaHtml5>
              <FaCss3 className="text-2xl"></FaCss3>
              <SiTailwindcss className="text-2xl"></SiTailwindcss>
              <SiBootstrap className="text-2xl"></SiBootstrap>
              <FaJs className="text-2xl"></FaJs>
              <FaReact className="text-2xl"></FaReact>
              <FaNodeJs className="text-2xl"></FaNodeJs>
              <SiFirebase className="text-2xl"></SiFirebase>
              <SiMongodb className="text-2xl"></SiMongodb>
              <SiExpress className="text-2xl"></SiExpress>
              <FaGithub className='text-2xl'></FaGithub>
            </div>
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