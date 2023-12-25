import React from "react";

const Hero = () => {
  return (
    <div className=" flex py-[50px] flex-col justify-center items-center pb-[150px]">
      <div>
        <p className="md:text-[60px] text-[30px] text-center font-bold text-white ">
          We Engineer <br />
          Software Solutions
        </p>
      </div>

      <div className="flex mt-4 md:text-[30px] text-[12px] text-white">
        <a href="">Enterprise</a>
        <div className=" flex items-center px-[20px]">
          <div className="bg-white w-[10px] h-[10px] rounded-full"></div>
        </div>
        <p> Growth Companies</p>
        <div className=" flex items-center px-[20px]">
          <div className="bg-white w-[10px] h-[10px] rounded-full"></div>
        </div>
        <p>Startups</p>
      </div>

      <div className="button flex justify-center mt-6 bg-blue-700 text-white rounded-lg w-[250px] p-2 transition duration-300 ease-in-out hover:bg-blue-950">
        <div>
          <button className="">Tell Us about Your Project</button>
        </div>
        <div className="goup ml-2">
          <i className=" hovbtn w-[30px] transition duration-700 ease-in-out fa-solid fa-arrow-right"></i>
        </div>
      </div>

      <div>
        <p></p>
      </div>

      <div className="md:flex mt-[500px]  hidden absolute px-10 py-3 bg-blue-950 opacity-50 justify-between w-full">
        <div className="flex items-center text-[25px]  w-[160px] justify-between ">
          <div className="text-white font-extrabold">
            {" "}
            <p>ABB</p>
          </div>
          <div className="border-l-[3px]  border-l-white-700 h-[70px]"></div>
        </div>

        <div className="flex items-center text-[25px]   w-[200px] justify-between">
          <div className="text-white font-extrabold ">
            {" "}
            <p>GROUPON</p>
          </div>
          <div className="border-l-[3px] border-l-white-700 h-[70px]"> </div>
        </div>

        <div className="flex items-center text-[25px]  w-[200px] justify-between">
          <div className="text-white font-extrabold">
            {" "}
            <p>BARCLAYS</p>
          </div>
          <div className="border-l-[3px] border-l-white-700 h-[70px]"> </div>
        </div>

        <div className="flex items-center text-[25px]  w-[160px] justify-between">
          <div className="text-white font-extrabold">
            <p>NOKIA</p>{" "}
          </div>
          <div className="border-l-[3px] border-l-white-700 h-[70px]"></div>
        </div>

        <div className="flex items-center text-[25px] ">
          <div className="text-white font-extrabold">
            {" "}
            <p>Honeywell</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
