import React from "react";
import team from "./images/team.jpg";
// import yes from './images/yes.jpg'
import capture from "./images/Capture.PNG";
const What = () => {
  return (
    <div className="bg-gray-200 md:flex justify-between md:p-[50px]">
      <div className=" md:mx-[60px] mx-[15px] flex flex-col justify-center items-center">
        <p className="md:text-[40px] text-[18px] md:mt-[-290px] font-bold md:w-[250px]">
          What Suits Your Vision?
        </p>
        <p className="md:w-[250px] md:text-[25px]">
          Empower your business with tkxel’s tailored team engagement models.
        </p>
      </div>

      <div className="md:flex text-white">
        <div className="h-[550px] max-w-[350px] overflow-hidden rounded-md  m-[15px] md:m-0 bg-blue-600">
          <div>
            <img
              className="transition duration-300 hover:scale-125"
              src={team}
              alt=""
            />
          </div>
          <div className="p-3 mt-[30px]">
            <p className="text-[25px] font-bold">Build Your Dedicated Teams</p>
            <p className="mt-[10px]">
              Build a dream team to work exclusively on your project well
              aligned with your timeline and goals
            </p>
            <p className="font-bold border-w-[50px] hover:decoration-solid hover:decoration-yellow-400 mt-[30px]">
              Build Your Team
            </p>
          </div>
        </div>
        <div className="h-[550px] max-w-[350px] overflow-hidden rounded-md bg-gray-900 m-[15px] md:m-0 md:ml-2">
          <div>
            <img
              className="transition duration-300 hover:scale-125"
              src={capture}
              alt=""
            />
          </div>
          <div className="p-3 mt-[30px]">
            <p className="text-[25px] font-bold">Fixed Price Projects</p>
            <p className="mt-[10px]">
              Reduce your time-to-market with our fully managed and
              cost-efficent project delivery.
            </p>
            <p className="font-bold mt-[70px]">Develop Your Project</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default What;
