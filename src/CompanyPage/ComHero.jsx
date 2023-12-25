import React from "react";
import uncle from "../ClientPage/ImgClient/Uncle.png";
import clutch from "../HomePage/images/forbes.png";
import Form from "../HomePage/Form";
import Footer from "../HomePage/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y,FreeMode,Parallax,Mousewheel,Keyboard,Virtual } from "swiper/modules";
import "swiper/css";
const ComHero = () => {
  return (
    <div>
      <div className="md:flex  hidden  px-[180px] py-3 bg-gray-200  justify-between w-full">
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
      {/* HEADING */}

      <div>
        <div className="py-[40px] px-[120px]">
          <p className="text-[45px] font-bold">
            Problems We'll Help You <span className="text-blue-700">Solve</span>
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
      {/* UNCLE */}

      <div className="bg-black flex justify-center items-center h-[600px] m-[100px] rounded-md">
        <div className="text-white mb-[100px]">
          <p className="text-[40px] font-bold ">Our Vision</p>
          <p className="mt-[20px]">
            At tkxel, we distinguish ourselves by our commitment to <br />{" "}
            deliver concrete value to our clients. Our dedication to <br />{" "}
            precision and excellence sets us apart from the rest of the <br />{" "}
            industry. We don't merely offer resources; rather, we <br />{" "}
            prioritize our customers' triumphs as much as our own and <br />{" "}
            empower them to confidently embrace new technologies.
          </p>
          <p className="font-bold mt-[20px]">Umair Javed - CEO</p>
        </div>
        <div className=" mt-[50px] ml-[150px]">
          <img className="h-[550px]" src={uncle} alt="" />
        </div>
      </div>

      {/* ACHIEVEMENTSSSSSSSSS */}
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
      {/* BLUEE */}
      <div className="bg-blue-600 pt-[60px] text-white flex flex-col justify-center items-center">
        <div>
          <div className="flex flex-col justify-center items-center ">
            <p className="text-[40px] font-bold">What Sets Us Apart?</p>
          </div>
          <div className="flex mt-[20px]">
            <div className="flex flex-col justify-center items-center px-[80px]">
              <p className="text-[40px]">15+</p>
              <p>
                Years in <br />
                Business
              </p>
            </div>
            <div className="flex flex-col justify-center items-center ml-[25px] px-[80px]">
              <p className="text-[40px]">35+</p>
              <p>
                Industries we <br />
                Explored
              </p>
            </div>
            <div className="flex flex-col justify-center items-center ml-[25px] px-[80px]">
              <p className="text-[40px]">50+</p>
              <p>
                Clients that <br />
                trust us
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-900 w-[100%] p-[10px] flex justify-center items-center mt-[100px]">
          <p className="text-[28px]">What works best for you? Explore more</p>
        </div>
      </div>
      {/* BLACKKK */}
      <div className="bg-black opacity-100 flex py-[90px] justify-between text-white px-[150px]">
        <div>
          <p className="text-[40px] font-bold">Our Offshore Teams</p>
          <p className="mt-[30px]">
            By partnering with tkxel's offshore software development team,{" "}
            <br /> you gain access to a talent pool consisting of the top 2% of{" "}
            <br /> multi-skilled specialists, who can fill any skill gaps within
            your <br /> in-house team. With our offices located in key cities
            across six <br /> different countries, our experts are strategically
            positioned for <br /> a seamless working partnership.
          </p>
        </div>
        <div className="text-left">
          <p className="font-bold text-[22px]">
            Our cooperation models are flexible and <br /> designed to suit your
            goals, resources, and <br /> timeline.
          </p>
          <div className="button flex justify-center mt-6 bg-white text-black rounded-lg  p-3 transition duration-300 ease-in-out ">
            <div>
              <button className="">Contact Us</button>
            </div>
            <div className="goup ml-2">
              <i className=" hovbtn w-[30px] transition duration-700 ease-in-out fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>
      {/* SWIPEEEE */}

      <div className="flex w-[100%]">
        {/* <div className="flex"> */}
          <Swiper
             modules={[Navigation,FreeMode,Virtual,Parallax,Mousewheel,Keyboard ]}
             spaceBetween={10}
             slidesPerView={2}
             navigation
             centeredSlides={true}
             pagination={{ clickable: true }}
             scrollbar={{ draggable: true }}
          >
            <SwiperSlide>
              <div className="h-[200px] bg-blue-200  w-[300px] ml-[20px]">
                <p className="font-bold text-[30px]">Pakistan</p>
                <p>hgdgygw dgwdw dgvwud wdgwuygwyuy dgwygd</p>
                <p className="font-bold text-[20px]">58504838394</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-[200px] bg-blue-200  w-[300px] ml-[20px]">
                <p className="font-bold text-[30px]">Pakistan</p>
                <p>hgdgygw dgwdw dgvwud wdgwuygwyuy dgwygd</p>
                <p className="font-bold text-[20px]">58504838394</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-[200px] bg-blue-200  w-[300px] ml-[20px]">
                <p className="font-bold text-[30px]">Pakistan</p>
                <p>hgdgygw dgwdw dgvwud wdgwuygwyuy dgwygd</p>
                <p className="font-bold text-[20px]">58504838394</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-[200px] bg-blue-200  w-[300px] ml-[20px]">
                <p className="font-bold text-[30px]">Pakistan</p>
                <p>hgdgygw dgwdw dgvwud wdgwuygwyuy dgwygd</p>
                <p className="font-bold text-[20px]">58504838394</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-[200px] bg-blue-200  w-[300px] ml-[20px]">
                <p className="font-bold text-[30px]">Pakistan</p>
                <p>hgdgygw dgwdw dgvwud wdgwuygwyuy dgwygd</p>
                <p className="font-bold text-[20px]">58504838394</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-[200px] bg-blue-200  w-[300px] ml-[20px]">
                <p className="font-bold text-[30px]">Pakistan</p>
                <p>hgdgygw dgwdw dgvwud wdgwuygwyuy dgwygd</p>
                <p className="font-bold text-[20px]">58504838394</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-[200px] bg-blue-200  w-[300px] ml-[20px]">
                <p className="font-bold text-[30px]">Pakistan</p>
                <p>hgdgygw dgwdw dgvwud wdgwuygwyuy dgwygd</p>
                <p className="font-bold text-[20px]">58504838394</p>
              </div>
            </SwiperSlide>
         
            ...
          </Swiper>
        {/* </div> */}
      </div>

      <div>
        <Form />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ComHero;
