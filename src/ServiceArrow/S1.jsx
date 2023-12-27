import React from "react";
import ClientNav from "../ClientPage/ClientNav";
import S11 from "../ClientPage/ImgClient/S1.png";
import comp from "../ClientPage/ImgClient/comp.jpg";
import Swipe from "../HomePage/Swipe";
import Form from "../HomePage/Form";
import Footer from "../HomePage/Footer";
import { SwipeButton } from "../HomePage/SwipeButton";
const S1 = () => {
  return (
    <div>
      <div>
        <ClientNav />
      </div>
      {/* HEROOOOOOOOO */}
      <div className="flex sticky py-[100px] px-[120px]">
        <div className=" h-[400px]">
          <div className="our-client flex flex-col  ">
            <p className="text-[20px]">Digital Transformation</p>
            <div className="border-b-blue-700 our-client-div border-b-[5px]   w-[30px] rounded-full"></div>
          </div>
          <p className="text-[60px] font-extrabold leading-none">
            Innovate,
            <br /> Optimize & <br /> Transform With <br /> Our{" "}
            <span className="text-[60px] font-extrabold text-blue-700">
              Digital <br /> Solutions{" "}
            </span>{" "}
          </p>
          <p className="mt-[20px] text-[26px]">
            Digital transformation is not just about keeping up <br /> with the
            competition, it's about leaping ahead of <br /> them. Uncover new
            revenue streams and <br /> business models, and gain valuable
            insights into <br /> your operations and customers with our digital
            solutions.
          </p>

          <div className="button flex justify-center mt-6 bg-blue-700 text-white rounded-lg w-[250px] p-2 transition duration-300 ease-in-out hover:bg-blue-950">
            <div>
              <button className="">Transfer Now</button>
            </div>
            <div className="goup ml-2">
              <i className=" hovbtn w-[30px] transition duration-700 ease-in-out fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>

        <div className=" pt-[40px]">
          <img className="w-[480px] h-[350px]" src={S11} alt="" />
        </div>
      </div>

      {/* ABB HAR */}
      <div className="md:flex mt-[230px] hidden  px-[180px] py-3 bg-gray-200  justify-between w-full">
        <div className="flex items-center text-[25px]  w-[160px] justify-between ">
          <div className=" text-gray-600 font-extrabold">
            {" "}
            <p>ABB</p>
          </div>
          <div className="border-l-[3px]  border-l-white-700 h-[70px]"></div>
        </div>

        <div className="flex items-center text-[25px]   w-[200px] justify-between">
          <div className="text-gray-600 font-extrabold ">
            {" "}
            <p>GROUPON</p>
          </div>
          <div className="border-l-[3px] border-l-white-700 h-[70px]"> </div>
        </div>

        <div className="flex items-center text-[25px]  w-[200px] justify-between">
          <div className=" text-gray-600 font-extrabold">
            {" "}
            <p>BARCLAYS</p>
          </div>
          <div className="border-l-[3px] border-l-white-700 h-[70px]"> </div>
        </div>

        <div className="flex items-center text-[25px]  w-[160px] justify-between">
          <div className="text-gray-600 font-extrabold">
            <p>NOKIA</p>{" "}
          </div>
          <div className="border-l-[3px] border-l-white-700 h-[70px]"></div>
        </div>

        <div className="flex items-center text-[25px] ">
          <div className="text-gray-600 font-extrabold">
            {" "}
            <p>Honeywell</p>
          </div>
        </div>
      </div>
      {/* TEXT */}

      <div className="flex  py-[100px] px-[120px]">
        <div className=" ">
          <p className="text-[40px] font-bold">
            Why Choose Tkxel As Your <br />{" "}
            <span className="text-blue-600">
              Digital Transformation Partner?
            </span>
          </p>
          <p className="mt-[20px] text-[23px]">
            Are you feeling overwhelmed by the ever-changing digital <br />{" "}
            landscape?
          </p>
          <p className="mt-[22px]">
            Don't worry, Tkxel is here to guide you on your journey towards
            digital <br /> transformation. We're more than just a technology
            partner. We're a team of <br /> experts who are dedicated to helping
            you navigate the digital world and unlock <br /> the full potential
            of technology for your business. <br />
            <br /> Whether you're looking to improve customer engagement,
            streamline internal <br /> processes, or drive revenue, we're here
            to work with you every step of the way, <br /> from strategic
            planning to implementation. <br />
            <br /> Our team of experts brings a wealth of experience from a
            variety of industries,
            <br /> and we'll work with you to understand the unique needs of
            your business and <br /> tailor a solution just for you.
          </p>
        </div>

        <div className=" pt-[40px]">
          <img className="w-[450px] ml-[70px] mt-[100px]" src={comp} alt="" />
        </div>
      </div>
      {/* HEADING */}

      <div>
        <div className="py-[40px] px-[120px]">
          <p className="text-[45px] font-bold">
            Accelerating Your Digital <br />
            <span className="text-blue-700">Journey To Success</span>
          </p>
        </div>
      </div>

      {/* THRE DIVX */}
      <div className=" md:flex md:mt-[0px] justify-center">
        <div className="flex flex-col rounded-md bg-slate-200 md:ml-[0px] hover:shadow-md m-[10px] p-[20px] md:m-0  items-center md:w-[350px] border-w-[2px] border-black">
          <div className=" md:ml-[20px] py-[20px] ml-[30px]  mr">
            <div>
              <i className="text-blue-600 py-[20px] text-[30px]   fa-solid fa-gear"></i>
            </div>
            <p className="text-[25px] font-bold">
              Accelerate digital transformation
            </p>
            <p>
              We can help you meet evolving requirements by leveraging agile and
              innovative technologies scalable, and tailored to your needs.
            </p>
          </div>
        </div>
        <div className="flex flex-col rounded-md bg-slate-200 md:ml-[30px] hover:shadow-md m-[10px] p-[20px] md:m-0  items-center md:w-[350px] border-w-[2px] border-black">
          <div className=" md:ml-[20px] py-[20px] ml-[30px]  mr">
            <div>
              <i className="text-blue-600 py-[20px] text-[30px]   fa-solid fa-gear"></i>
            </div>
            <p className="text-[25px] font-bold">
              Optimize your digital ecosystem
            </p>
            <p>
              By optimizing and unifying your digital ecosystem, we help you
              facilitate ongoing growth and ensure long-term scalability.
            </p>
          </div>
        </div>
        <div className="flex flex-col rounded-md bg-slate-200 md:ml-[30px] hover:shadow-md m-[10px] p-[20px] md:m-0  items-center md:w-[350px] border-w-[2px] border-black">
          <div className=" md:ml-[20px] py-[20px] ml-[30px]  mr">
            <div>
              <i className="text-blue-600 py-[20px] text-[30px]   fa-solid fa-gear"></i>
            </div>
            <p className="text-[25px] font-bold">Build your dream team</p>
            <p>
              With a team of 700+ software experts, we customize our core
              services to meet your business needs.
            </p>
          </div>
        </div>
      </div>
      {/* THRE DIVX */}
      <div className=" md:flex md:mt-[20px] justify-center">
        <div className="flex flex-col rounded-md bg-slate-200 md:ml-[0px] hover:shadow-md m-[10px] p-[20px] md:m-0  items-center md:w-[350px] border-w-[2px] border-black">
          <div className=" md:ml-[20px] py-[20px] ml-[30px]  mr">
            <div>
              <i className="text-blue-600 py-[20px] text-[30px]   fa-solid fa-gear"></i>
            </div>
            <p className="text-[25px] font-bold">
              Accelerate digital transformation
            </p>
            <p>
              We can help you meet evolving requirements by leveraging agile and
              innovative technologies scalable, and tailored to your needs.
            </p>
          </div>
        </div>
        <div className="flex flex-col rounded-md bg-slate-200 md:ml-[30px] hover:shadow-md m-[10px] p-[20px] md:m-0  items-center md:w-[350px] border-w-[2px] border-black">
          <div className=" md:ml-[20px] py-[20px] ml-[30px]  mr">
            <div>
              <i className="text-blue-600 py-[20px] text-[30px]   fa-solid fa-gear"></i>
            </div>
            <p className="text-[25px] font-bold">
              Optimize your digital ecosystem
            </p>
            <p>
              By optimizing and unifying your digital ecosystem, we help you
              facilitate ongoing growth and ensure long-term scalability.
            </p>
          </div>
        </div>
        <div className="flex flex-col rounded-md bg-slate-200 md:ml-[30px] hover:shadow-md m-[10px] p-[20px] md:m-0  items-center md:w-[350px] border-w-[2px] border-black">
          <div className=" md:ml-[20px] py-[20px] ml-[30px]  mr">
            <div>
              <i className="text-blue-600 py-[20px] text-[30px]   fa-solid fa-gear"></i>
            </div>
            <p className="text-[25px] font-bold">Build your dream team</p>
            <p>
              With a team of 700+ software experts, we customize our core
              services to meet your business needs.
            </p>
          </div>
        </div>
      </div>
      {/* THRE DIVX */}
      <div className=" md:flex md:mt-[20px] justify-center">
        <div className="flex flex-col rounded-md bg-slate-200 md:ml-[0px] hover:shadow-md m-[10px] p-[20px] md:m-0  items-center md:w-[350px] border-w-[2px] border-black">
          <div className=" md:ml-[20px] py-[20px] ml-[30px]  mr">
            <div>
              <i className="text-blue-600 py-[20px] text-[30px]   fa-solid fa-gear"></i>
            </div>
            <p className="text-[25px] font-bold">
              Accelerate digital transformation
            </p>
            <p>
              We can help you meet evolving requirements by leveraging agile and
              innovative technologies scalable, and tailored to your needs.
            </p>
          </div>
        </div>
        <div className="flex flex-col rounded-md bg-slate-200 md:ml-[30px] hover:shadow-md m-[10px] p-[20px] md:m-0  items-center md:w-[350px] border-w-[2px] border-black">
          <div className=" md:ml-[20px] py-[20px] ml-[30px]  mr">
            <div>
              <i className="text-blue-600 py-[20px] text-[30px]   fa-solid fa-gear"></i>
            </div>
            <p className="text-[25px] font-bold">
              Optimize your digital ecosystem
            </p>
            <p>
              By optimizing and unifying your digital ecosystem, we help you
              facilitate ongoing growth and ensure long-term scalability.
            </p>
          </div>
        </div>
        <div className="flex flex-col rounded-md bg-slate-200 md:ml-[30px] hover:shadow-md m-[10px] p-[20px] md:m-0  items-center md:w-[350px] border-w-[2px] border-black">
          <div className=" md:ml-[20px] py-[20px] ml-[30px]  mr">
            <div>
              <i className="text-blue-600 py-[20px] text-[30px]   fa-solid fa-gear"></i>
            </div>
            <p className="text-[25px] font-bold">Build your dream team</p>
            <p>
              With a team of 700+ software experts, we customize our core
              services to meet your business needs.
            </p>
          </div>
        </div>
      </div>

      {/* BLAAAACCCCKKK */}
      <div className='bg-black flex flex-col text-white  py-[100px] px-[120px]'>
        <div className="text-white text-[40px] font-extrabold">
          <p>Which Solution Drives Your Vision?</p>
        </div>

        <div className="flex">
          <div className="ml-[20px] py-[20px] text-white w-[360px]  mr">
            <div>
              <i className="text-blue-600 py-[20px] text-[30px]   fa-solid fa-gear"></i>
            </div>
            <p className="text-[25px] font-bold">
              Accelerate digital transformation
            </p>
            <p>
              We can help you meet evolving requirements by leveraging agile and
              innovative technologies scalable, and tailored to your needs.
            </p>
          </div>
          <div className="ml-[20px] py-[20px] text-white w-[360px]  mr">
            <div>
              <i className="text-blue-600 py-[20px] text-[30px]   fa-solid fa-gear"></i>
            </div>
            <p className="text-[25px] font-bold">
              Accelerate digital transformation
            </p>
            <p>
              We can help you meet evolving requirements by leveraging agile and
              innovative technologies scalable, and tailored to your needs.
            </p>
          </div>
          <div className="ml-[20px] py-[20px] text-white w-[360px]  mr">
            <div>
              <i className="text-blue-600 py-[20px] text-[30px]   fa-solid fa-gear"></i>
            </div>
            <p className="text-[25px] font-bold">
              Accelerate digital transformation
            </p>
            <p>
              We can help you meet evolving requirements by leveraging agile and
              innovative technologies scalable, and tailored to your needs.
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="ml-[20px] py-[20px] text-white w-[360px]  mr">
            <div>
              <i className="text-blue-600 py-[20px] text-[30px]   fa-solid fa-gear"></i>
            </div>
            <p className="text-[25px] font-bold">
              Accelerate digital transformation
            </p>
            <p>
              We can help you meet evolving requirements by leveraging agile and
              innovative technologies scalable, and tailored to your needs.
            </p>
          </div>
          <div className="ml-[20px] py-[20px] text-white w-[360px]  mr">
            <div>
              <i className="text-blue-600 py-[20px] text-[30px]   fa-solid fa-gear"></i>
            </div>
            <p className="text-[25px] font-bold">
              Accelerate digital transformation
            </p>
            <p>
              We can help you meet evolving requirements by leveraging agile and
              innovative technologies scalable, and tailored to your needs.
            </p>
          </div>
          <div className="ml-[20px] py-[20px] text-white w-[360px]  mr">
            <div>
              <i className="text-blue-600 py-[20px] text-[30px]   fa-solid fa-gear"></i>
            </div>
            <p className="text-[25px] font-bold">
              Accelerate digital transformation
            </p>
            <p>
              We can help you meet evolving requirements by leveraging agile and
              innovative technologies scalable, and tailored to your needs.
            </p>
          </div>
        </div>
        
      </div>
{/* 
SWIPEEE */}

<div className="flex justify-center px-[30px] items-center md:block md:ml-[70px]">
        <p className="md:text-[40px] text-[20px]  font-bold p-[20px] ">
          Success <span className="text-blue-700 ">Stories</span>
        </p>
      </div>

      <div className="px-[100px]">
        <Swipe />
     </div>
      <div>
        <Form />
      </div>
      <div>
        <Footer />
      </div>
      <div className="w-full text-white bg-zinc-800 sticky">
    <p className="p-[50px] ">We use cookies to ensure that we give you the best experience on our website. If you continue to use this site we will assume that you are happy with it.</p>
      </div>
    </div>
    
  );
};

export default S1;
