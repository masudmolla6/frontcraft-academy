import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import data from "../../assets/Animation - 1707241706457.json"
import Lottie from "react-lottie";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Home = () => {
  const { user, loading, logOut } = useContext(AuthContext);

    const [text] = useTypewriter({
      words: ["FrontCraft Academy"],
      loop: {},
      typeSpeed: 120,
      deleteSpeed: 40,
    });
  
      const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: data,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      };

    
    if (loading) {
        return (
            <div className='w-full h-screen flex justify-center items-center'>
            <span className="loading loading-ring loading-lg w-64"></span>
          </div>
        );
    }

    return (
      <div className="w-full h-screen">
        <Lottie options={defaultOptions} height={450} width={450} />
        <h1 className="text-center text-2xl">
          Welcome To
          <span style={{ color: "#18F3D9", paddingLeft: "5px" }}>{text}</span>
          <Cursor cursorStyle="..."></Cursor>
        </h1>
      </div>
    );
};

export default Home;