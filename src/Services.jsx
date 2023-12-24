import React, { useState } from "react";
import clutch from "./images/forbes.png";
const Services = () => {
  const [msg, setmsg] = useState(false);
  return (
    <div>
      <div className="md:ml-[100px] md:mt-6  md:block flex justify-center items-center">
        <p className="md:text-[40px] text-[25px] md:ml-[15px] font-bold md:font-extrabold md:mt-[70px]">
          Services We Offer
        </p>
      </div>

      <div className=" md:flex md:mt-[50px] justify-center it">
        <div className="md:flex md:ml-[20px] hover:shadow-md m-[10px] p-[10px] md:m-0 md:p-0 items-center md:w-[500px] md:h-[250px] border-2">
          <div className=" md:ml-[20px] ml-[30px]  md:mb-[110px] mr">
            <div>
              <i className="text-blue-600 text-[30px]   fa-solid fa-gear"></i>
            </div>
            <p className="text-[25px] font-bold">
              Software <br /> Development
            </p>
          </div>
          <div className=" md:ml-[55px] ml-[30px]">
            <p className="hover:border-b-[1px] hover:border-b-gray-500">
              Custom Software <br /> Development
            </p>
            <p className="hover:border-b-[1px] hover:border-b-gray-500">
              Web App Development
            </p>
            <p className="hover:border-b-[1px] hover:border-b-gray-500">
              Mobile app development
            </p>
            <p className="hover:border-b-[1px] hover:border-b-gray-500 ">
              UI/UX Design
            </p>
            <p className="hover:border-b-[1px] hover:underline">QA Testing</p>
            <p className="hover:border-b-[1px] hover:border-b-gray-500">
              DevOps
            </p>
            <p className="hover:border-b-[1px] hover:border-b-gray-500">
              Application Re-Engineering
            </p>
          </div>
        </div>
        <div className="md:flex md:ml-[20px] hover:shadow-md m-[10px] p-[10px] md:m-0 md:p-0 items-center md:w-[500px] md:h-[250px] border-2">
          <div className=" md:ml-[20px] ml-[30px]  md:mb-[110px] mr">
            <div>
              <i className="text-blue-600 text-[30px]   fa-solid fa-gear"></i>
            </div>
            <p className="text-[25px] font-bold">Solutions</p>
          </div>
          <div className=" md:ml-[85px] ml-[30px]">
            <p className="hover:border-b-[1px] hover:border-b-gray-500">
              Salesforce <br /> Development
            </p>
            <p className="hover:border-b-[1px] hover:border-b-gray-500">
              Service Now
            </p>
            <p className="hover:border-b-[1px] hover:border-b-gray-500">
              Mulesoft
            </p>
            <p className="hover:border-b-[1px] hover:border-b-gray-500">AWS</p>
            <p className="hover:border-b-[1px] hover:border-b-gray-500">
              Cloud Migration
            </p>
            <p className="hover:border-b-[1px] hover:border-b-gray-500">
              Shopify
            </p>
            <p className="hover:border-b-[1px] hover:border-b-gray-500">
              Power BI
            </p>
          </div>
        </div>
      </div>

      <div className="md:flex md:mt-[50px] justify-center items-center">
        <div className="md:flex md:ml-[20px] hover:shadow-md m-[10px] p-[10px] md:m-0 md:p-0 items-center md:w-[500px] md:h-[250px] border-2">
          <div className=" md:ml-[20px] ml-[30px]  md:mb-[110px] mr">
            <div>
              <i className="text-blue-600 text-[30px]   fa-solid fa-gear"></i>
            </div>
            <p className="text-[25px] font-bold">
              Emerging <br /> Technologies
            </p>
          </div>
          <div className=" md:ml-[85px] ml-[30px]">
            <p className="hover:border-b-[1px] hover:border-b-gray-500">
              Custom Software <br /> Development
            </p>
            <p className="hover:border-b-[1px] hover:border-b-gray-500">
              Web App Development
            </p>
            <p className="hover:border-b-[1px] hover:border-b-gray-500">
              Mobile app development
            </p>
            <p className="hover:border-b-[1px] hover:border-b-gray-500">
              UI/UX Design
            </p>
            <p className="hover:border-b-[1px] hover:border-b-gray-500">
              QA Testing
            </p>
            <p className="hover:border-b-[1px] hover:border-b-gray-500">
              DevOps
            </p>
            <p className="hover:border-b-[1px] hover:border-b-gray-500">
              Application Re-Engineering
            </p>
          </div>
        </div>

        <div className="md:flex md:ml-[20px] hover:shadow-md m-[10px] p-[10px] md:m-0 md:p-0 items-center md:w-[500px] md:h-[250px] border-2">
          <div className=" md:ml-[20px] ml-[30px]  md:mb-[110px] mr">
            <div>
              <i className="text-blue-600 text-[30px]   fa-solid fa-gear"></i>
            </div>
            <p className="text-[25px] font-bold">Advisory</p>
          </div>
          <div className=" md:ml-[95px] ml-[30px] mt-[20px]">
            <p className="hover:border-b-[1px] hover:border-b-gray-500">
              Digital Transformation <br /> Development
            </p>
            <p className="hover:border-b-[1px] hover:border-b-gray-500">
              Discovery Workshop
            </p>
            <p className="hover:border-b-[1px] hover:border-b-gray-500">
              Product Strategy
            </p>
            <p className="hover:border-b-[1px] hover:border-b-gray-500">
              Process Consultation
            </p>
            <p className="hover:border-b-[1px] hover:border-b-gray-500">
              POC Development
            </p>
            <p className="hover:border-b-[1px] hover:border-b-gray-500">
              Business Process
            </p>
            <p className="hover:border-b-[1px] hover:border-b-gray-500">
              Outsourcing
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="button flex justify-center items-center mt-16 mb-16 bg-blue-700 text-white rounded-lg w-[250px] p-2 transition duration-300 ease-in-out hover:bg-blue-950">
          <div>
            <button>View All Services</button>
          </div>

          <div className="goup ml-2">
            <i className=" hovbtn w-[30px] transition duration-700 ease-in-out fa-solid fa-arrow-right"></i>
          </div>
        </div>
      </div>

      <div className="border-[1px] rounded-md mt-[50px] md:flex m-[10px] md:m-0 justify-between md:ml-[100px] md:mr-[100px] p-[20px] md:mb-[50px]">
        <div className="md:mt-[100px] flex justify-center md:ml-[50px]">
          <p className="md:text-[30px]  font-bold">Achievements & Awards</p>
        </div>

        <div className="">
          <div className="md:flex hidden  border-b-[0.5px] border-b-gray-300">
            <div className="w-[1px] bg-gray-300"></div>
            <div className=" p-[15px] ">
              <img className="w-[100px]" src={clutch} alt="" />
            </div>

            <div className="w-[1px] bg-gray-300"></div>
            <div className="  p-[15px] ">
              <img className="w-[100px]" src={clutch} alt="" />
            </div>

            <div className="w-[1px] bg-gray-300"></div>
            <div className=" p-[15px]">
              <img className="w-[100px]" src={clutch} alt="" />
            </div>

            <div className="w-[0.5px] bg-gray-300"></div>

            <div className=" p-[15px] ">
              <img className="w-[100px] " src={clutch} alt="" />
            </div>
          </div>
          <div>
            <div className="md:flex hidden">
              <div className="w-[0.5px] bg-gray-300"></div>
              <div className=" p-[15px]">
                <img className="w-[100px]" src={clutch} alt="" />
              </div>

              <div className="w-[0.5px] bg-gray-300"></div>
              <div className=" p-[15px]">
                <img className="w-[100px]" src={clutch} alt="" />
              </div>

              <div className="w-[0.5px] bg-gray-300 ml-[1px]"></div>
              <div className=" p-[15px]">
                <img className="w-[100px]" src={clutch} alt="" />
              </div>

              <div className="w-[0.5px] bg-gray-300"></div>
              <div className=" p-[15px]">
                <img className="w-[100px]" src={clutch} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="md:hidden">
          <div>
            <div className="flex justify-center">
              <div className=" p-[15px] ">
                <img className="w-[100px]" src={clutch} alt="" />
              </div>
              <div className="  p-[15px] ">
                <img className="w-[100px]" src={clutch} alt="" />
              </div>
            </div>
            <div className="flex justify-center">
              <div className=" p-[15px]">
                <img className="w-[100px]" src={clutch} alt="" />
              </div>
              <div className=" p-[15px] ">
                <img className="w-[100px] " src={clutch} alt="" />
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-center">
              <div className=" p-[15px] ">
                <img className="w-[100px]" src={clutch} alt="" />
              </div>
              <div className="  p-[15px] ">
                <img className="w-[100px]" src={clutch} alt="" />
              </div>
            </div>
            <div className="flex justify-center">
              <div className=" p-[15px]">
                <img className="w-[100px]" src={clutch} alt="" />
              </div>
              <div className=" p-[15px] ">
                <img className="w-[100px] " src={clutch} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
