import React from "react";
import you from "./images/you.png";
import face from "./images/face.png";
import link from "./images/link.png";
import insta from "./images/insta.png";
import hub from "./images/hub.png";
import cloud from "./images/cloud.png";
import clu from "./images/clu.png";
import goog from "./images/goog.png";
const Footer = () => {
  return (
    <div>
      <div className="h-[100vh] hidden md:block bg-slate-50 px-[40px]">
        <div className=" md:flex">
          <div className="ml-[50px] pt-[30px] mr-[40px]">
            <div className="md:flex hidden items-center text-4xl font-extrabold text-blue-700">
              <p>tkxel</p>
            </div>

            <div className="mt-[10px] text-[14px] hover:text-blue-700 w-[124px] flex items-center">
              <i class="fa-solid fa-phone"></i>
              <a className="ml-[6px] " href="">
                527 646 7364
              </a>
            </div>

            <div className="mt-[10px] text-[14px] hover:text-blue-700 w-[124px] flex justify-between items-center">
              <i class="fa-solid fa-envelope"></i>
              <a className="text-blue-700 ml-[6px]" href="">
                {" "}
                services@tkxel.com
              </a>
            </div>

            <div className="mt-[10px]">
              <p className="text-gray-500 text-[14px]">
                11921 Freedom Drive Two <br /> Fountain Square,
                <br /> Suite 560,
                <br /> Reston, VA 20190 <br /> USA
              </p>
            </div>

            <div className=" flex mt-[10px] items-center">
              <img className="w-[25px] h-[25px]" src={link} alt="" />
              <img className="w-[25px] h-[45px]" src={face} alt="" />
              <img className="w-[55px] h-[20px]" src={you} alt="" />
              <img className="w-[35px] h-[35px]" src={insta} alt="" />
            </div>

            <div className="w-[45px] h-[40px] flex mt-[10px] ">
              <img src={cloud} alt="" />
              <img className="ml-[10px]" src={hub} alt="" />
            </div>

            <div className=" flex mt-[10px] items-center">
              <img className="w-[95px] h-[45px] text-black" src={goog} alt="" />
              <img className="w-[55px] h-[25px] ml-[15px] " src={clu} alt="" />
            </div>
          </div>

          <div>
            <div className="w-[200px] text-[14px] pt-[30px] ">
              <p className="text-[15px] text-gray-700 text-left font-bold">
                Next-Gen Services{" "}
              </p>
              <p className="py-1 text-gray-500 hover:text-blue-700 w-[200px] text-left">
                Data science & AI
              </p>
              <p className="py-1 text-gray-500 hover:text-blue-700 text-left">
                Cyber Security
              </p>
              <p className="py-1 text-gray-500 hover:text-blue-700 text-left">
                Blockchain
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center   items-center  mb-[180px] w-[200px] text-black">
            <div className=" text-[14px]">
              <p className="text-[15px] text-gray-700  text-left font-bold">
                Advisory{" "}
              </p>
              <p className="py-1 text-gray-500 hover:text-blue-700  text-left">
                Digital Transformation
              </p>
              <p className="py-1 text-gray-500 hover:text-blue-700 text-left">
                Product Strategy
              </p>
              <p className="py-1 text-gray-500 hover:text-blue-700 text-left">
                Discovery Workshop
              </p>
              <p className="py-1 text-gray-500 hover:text-blue-700 text-left">
                POC Development
              </p>
              <p className="py-1 text-gray-500 hover:text-blue-700 text-left">
                Business Process <br /> Outsourcing
              </p>
              <p className="py-1 text-gray-500 hover:text-blue-700 text-left">
                Process Consulting <br /> & Audit
              </p>
            </div>
          </div>

          <div className="flex flex-col mb-[204px] justify-center items-center  w-[200px] text-black">
            <div className=" text-[14px]">
              <p className="text-[15px] text-left text-gray-700 font-bold">
                Product Engineering{" "}
              </p>
              <p className="py-1 text-gray-500 hover:text-blue-700  text-left">
                Application Re- <br />
                Engineering
              </p>
              <p className="py-1 text-gray-500 hover:text-blue-700 text-left">
                Custom Software <br /> Development
              </p>
              <p className="py-1 text-gray-500 hover:text-blue-700 text-left">
                Web Development
              </p>
              <p className="py-1 text-gray-500 hover:text-blue-700 text-left">
                App Development
              </p>
              <p className="py-1 text-gray-500 hover:text-blue-700 text-left">
                DevOps
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center  w-[200px] mb-[215px] text-black">
            <div className=" text-[14px]">
              <p className="text-[15px] text-left text-gray-700 font-bold">
                Solutions
              </p>
              <p className="py-1 text-gray-500 hover:text-blue-700  text-left">
                Salesforce
              </p>
              <p className="py-1 text-gray-500 hover:text-blue-700 text-left">
                ServiceNow
              </p>
              <p className="py-1 text-gray-500 hover:text-blue-700 text-left">
                Mulesoft
              </p>
              <p className="py-1 text-gray-500 hover:text-blue-700 text-left">
                AWS
              </p>
              <p className="py-1 text-gray-500 hover:text-blue-700 text-left">
                Shopify
              </p>
              <p className="py-1 text-gray-500 hover:text-blue-700 text-left">
                Power BI
              </p>
            </div>
          </div>

          <div className="flex flex-col py-8 justify-center items-center  mb-[300px] w-[200px] text-black mx-[10px]">
            <div className=" text-[14px]">
              <p className="text-[15px] text-gray-700 text-left font-bold">
                Engagement Models
              </p>
              <p className="py-1 text-gray-500 hover:text-blue-700  text-left">
                Dedicated Team
              </p>
              <p className="py-1 text-gray-500 hover:text-blue-700 text-left">
                Fixed Price
              </p>
              <p className="py-1 text-gray-500 hover:text-blue-700 text-left">
                Offshore Teams
              </p>
            </div>
          </div>

          <hr className="bg-black" />
        </div>

        <div>
          <hr className="bg-black mb-7 mx-[50px]" />
        </div>
        <div className="flex justify-between px-[50px]">
          <div className=" text-slate-500">
            <p>2023 | All rignts are reserved</p>
          </div>
          <div className="  text-slate-500">
            <div className="flex justify-center">
              <p>Testimonials</p>
              <div className=" flex items-center px-[20px]">
                <div className="bg-slate-400 w-[7px] h-[7px] rounded-full"></div>
              </div>
              <p>Startips</p>
              <div className=" flex items-center px-[20px]">
                <div className="bg-slate-400 w-[7px] h-[7px] rounded-full"></div>
              </div>
              <p>Press Kit</p>
              <div className=" flex items-center px-[20px]">
                <div className="bg-slate-400 w-[7px] h-[7px] rounded-full"></div>
              </div>
              <p>Privacy Polices</p>
              <div className=" flex items-center px-[20px]">
                <div className="bg-slate-400 w-[7px] h-[7px] rounded-full"></div>
              </div>
              <p>Startips</p>
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden h-[80vh] bg-slate-100 pt-[60px] px-[20px] text-center">
        <div className="flex flex-col justify-center items-center">
          <div className=" text-4xl font-extrabold text-blue-700">
            <p>tkxel</p>
          </div>

          <div className="mt-[10px] text-[14px]  ">
            <p className="font-bold text-[16px]">Address :</p>
          </div>

          <div className="mt-[10px]">
            <p className="text-gray-500 text-[14px]">
              11921 Freedom Drive Two Fountain Square, Suite 560, Reston, VA
              20190 USA
            </p>
          </div>

          <div className=" flex mt-[10px] items-center">
            <img className="w-[15px] h-[15px]" src={link} alt="" />
            <img className="w-[15px] h-[25px]" src={face} alt="" />
            <img className="w-[25px] h-[15px]" src={you} alt="" />
            <img className="w-[20px] h-[25px]" src={insta} alt="" />
          </div>

          <div className="w-[30px] h-[30px] flex mt-[5px] ml-[-35px] ">
            <img src={cloud} alt="" />
            <img className="ml-[10px]" src={hub} alt="" />
          </div>

          <div className=" flex mt-[5px] items-center">
            <img className="w-[95px] h-[45px] text-black" src={goog} alt="" />
            <img className="w-[55px] h-[25px] ml-[15px] " src={clu} alt="" />
          </div>
        </div>
        <hr />
        <div className="mt-[20px]  text-slate-500">
          <div className="flex justify-center">
            <p>Testimonials</p>
            <div className=" flex items-center px-[20px]">
              <div className="bg-slate-400 w-[7px] h-[7px] rounded-full"></div>
            </div>
            <p>Startips</p>
            <div className=" flex items-center px-[20px]">
              <div className="bg-slate-400 w-[7px] h-[7px] rounded-full"></div>
            </div>
            <p>Press Kit</p>
          </div>
          <div className="flex justify-center">
            <p>Privacy Polices</p>
            <div className=" flex items-center px-[20px]">
              <div className="bg-slate-400 w-[7px] h-[7px] rounded-full"></div>
            </div>
            <p>Startips</p>
          </div>
        </div>

        <div className="mt-[20px] text-slate-500">
          <p>2023 | All rignts are reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
