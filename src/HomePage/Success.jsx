import React from "react";
import Lone from "./images/Lone.png";
import man from "./images/man.jpg";
import lip from "./images/lip.png";
import Lthree from "./images/Lthree.png";

import Swipe from "./Swipe";

const Success = () => {
  return (
    <div className="md:pb-[80px]">
      <div className="flex justify-center items-center md:block md:ml-[70px]">
        <p className="md:text-[40px] text-[20px]  font-bold p-[20px] ">
          Success <span className="text-blue-700 ">Stories</span>
        </p>
      </div>
      <div className="max-w-[1344px]  mx-[70px] flex max-h-[500px]">
        <Swipe />
      </div>

      <div>
        <div className=" flex justify-center items-center">
          <div className="button flex justify-center items-center md:mt-6 bg-blue-700 text-white rounded-lg w-[150px] p-2 transition duration-300 ease-in-out hover:bg-blue-950">
            <button className="">View More</button>

            <div className="goup ml-2">
              <i className=" hovbtn w-[30px] transition duration-700 ease-in-out fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>

      <p className="md:text-[40px] font-bold text-center mt-4 px-[20px] md:ml-[80px]">
        Featured <span className="text-blue-700 "> Podcasts</span>
      </p>
      <div className="md:flex justify-between">
        <div>
          <p className="text-[20px]  p-[20px] md:ml-[80px]">
            Tune into our expert insights View all Episodes
          </p>
        </div>

        <div className="flex justify-center items-center mr-[70px]">
          <p className="text-blue-600 font-semibold">View all episodes</p>
          <i className="text-blue-600 p-2 fa-solid fa-play"></i>
        </div>
      </div>

      <div className="md:flex  md:px-[80px]">
        <div className="max-w-[500px]">
          <img className=" h-[340px] rounded-md" src={man} alt="" />
        </div>

        <div className="md:ml-[50px] mt-3 md:mt-0">
          <div className=" flex border-2 p-[20px] rounded-md">
            <div>
              <img src={lip} alt="" />
            </div>
            <div className=" ml-[30px]">
              <p>How to secure software supply chain </p>
              <p className="text-[12px] opacity-60">24 MINS LISTEN</p>
            </div>
          </div>
          <div className="flex border-2 mt-[30px] p-[10px] rounded-md">
            <div>
              <img src={Lthree} alt="" />
            </div>
            <div className=" ml-[30px]">
              <p>
                How a culture of skilss building accelerates enterprise
                innovation?
              </p>
              <p>23 MONS LISTEN</p>
            </div>
          </div>
          <div className="flex border-2 mt-[30px] p-[20px] rounded-md">
            <div>
              <img src={Lone} alt="" />
            </div>
            <div className=" ml-[30px]">
              <p>Getting the most out of the cloud with IBM Clouds CTO</p>
              <p>30 MINS LISTEN</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
