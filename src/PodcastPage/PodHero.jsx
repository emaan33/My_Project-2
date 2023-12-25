import React from "react";
import cloud from '../HomePage/images/cloud.png'
import red from '../HomePage/images/red.png'
import inn from '../HomePage/images/inn.png'
import hub from '../HomePage/images/hub.png'
import ClientNav from "../ClientPage/ClientNav";
const PodHero = () => {
  return (
    <div className="h-[20000px]">
        <div>
            <ClientNav />
        </div>
      <div className="flex  py-[100px] pl-[150px]">
        <div className="  mt-[20px]">
          <div className="our-client flex flex-col  ">
            <p className="text-[20px]">Podcasts</p>
            <div className="border-b-blue-700 our-client-div border-b-[5px]   w-[30px] rounded-full"></div>
          </div>
          <p className="text-[60px] font-extrabold mt-5">BetterTech</p>
        </div>

        <div className="pl-[300px] pt-[70px]">
          <p className="text-[25px]">
            Discover the latest tech trends, <br /> innovations and guides.
          </p>
          <p>Subscribe to our monthly newsletter</p>
          <div>
            <input
              className="py-[10px] rounded-md border-[1px] border-gray-800 px-[30px] bg-transparent"
              type="text "
              placeholder="Enter your Email"
            />
            <button className="py-[10px] ml-[10px] px-[30px] rounded-md bg-blue-700 text-white">
              Subscribe
            </button>
          </div>
        </div>
        <div className="h-[400px] fixed left-[1250px] ">
<div className=" shadow-2xl  w-[70px] rounded-full h-[70px] flex justify-center items-center">
    <img className="p-[10px] w-[50px] h-[50px]" src={cloud} alt="" />
</div>
<div className=" mt-[10px] shadow-2xl  w-[70px] rounded-full h-[70px] flex justify-center items-center">
    <img className="p-[10px] w-[50px] h-[50px]" src={red} alt="" />
</div>
<div className=" mt-[10px] shadow-2xl  w-[70px] rounded-full h-[70px] flex justify-center items-center">
    <img className="p-[10px] w-[50px] h-[50px]" src={hub} alt="" />
</div>
<div className=" mt-[10px] shadow-2xl  w-[70px] rounded-full h-[70px] flex justify-center items-center">
    <img className="p-[10px] w-[50px] h-[50px]" src={inn} alt="" />
</div>
        </div>
      </div>

      
    </div>
  );
};

export default PodHero;
