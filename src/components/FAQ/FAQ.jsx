import React, { useContext } from "react";
import Lottie from "react-lottie";
import data from "../../assets/Animation - 1707296448706.json";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { AuthContext } from "../../Provider/AuthProvider";

const FAQ = () => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
      return (
        <div className="w-full h-screen flex justify-center items-center">
          <span className="loading loading-ring loading-lg w-64"></span>
        </div>
      );
    }


  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: data,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
    };
    
        const [text] = useTypewriter({
          words: ["Contact Us"],
          loop: {},
          typeSpeed: 120,
          deleteSpeed: 40,
        });
  

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <h1 className="text-center text-3xl md:text-4xl text-blue-500 pt-10">
        <span style={{ color: "#18F3D9", paddingLeft: "5px" }}>{text}</span>
        <Cursor cursorStyle="..."></Cursor>
      </h1>
      <div className="w-full h-screen grid justify-center items-center gap-5 px-10 md:grid-cols-2">
        <div className="w-full">
          <Lottie options={defaultOptions} height={450} width={450} />
        </div>
        <div className="w-full">
          <form onSubmit={handleSubmit}>
            <div className="flex justify-start w-full gap-2 py-2">
              <input
                className="w-full shadow-md shadow-orange-400 py-1 text-xl pl-2 rounded-sm"
                type="text"
                placeholder="Your Name"
              />
              <input
                className="w-full shadow-md shadow-orange-400 py-1 text-xl pl-2 rounded-sm"
                type="email"
                placeholder="Your Email"
              />
            </div>
            <div>
              <textarea
                className="w-full shadow-md shadow-orange-400 py-1 text-xl pl-2 mt-2 rounded-sm"
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Write Your Message..."
              ></textarea>
            </div>
            <div className="w-full ">
              <button className="bg-blue-500 w-full py-2 mt-4 text-black text-xl hover:bg-emerald-400 rounded-sm">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
