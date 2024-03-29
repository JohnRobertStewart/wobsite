import React from "react";
import heroImage from '../portfolio/heroImage.png';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {

  return (
    <div
      name="home"
      className="w-full bg-gradient-to-b
     from-black via-black to-gray-800 "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full px-4">
          <h2 className="py-8 text-4xl sm:text-4x1 font-bold text-white">
            Full stack dev; <br>
            </br>
            <p className="flex justify-items-start py-3"> From Fullstack to any app.  
            </p>
          </h2>
          <p className="text-gray-500 py-1 min-w-full">
            I've worked with JS, NodeJS, React, MongoDB, and the basics too. I'd love to learn new technologies
            and to work with you, whatever the stack. 

          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img 
            src = {heroImage}
            alt = "my profile"
            className="rounded-3xl mx-auto py-6 px-4 w-2/3 md:w-full md:h-full"
            
          />
        </div>
      </div>
    </div>
  );
};

export default Home;