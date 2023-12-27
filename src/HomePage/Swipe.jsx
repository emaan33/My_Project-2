import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import child2 from "./images/child2.png";
import child1 from "./images/child1.png";

import lip from "./images/lip.png";

import "swiper/css";
import tech from "./images/tech.webp";
import tec2 from "./images/tec2.webp";
import { SwipeButton } from "./SwipeButton";
const Swipe = () => {
  return (
    
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      // spaceBetween={20}
      // slidesPerView={4}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      }}
      // navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        {" "}
        <div>
          <div className=" max-w-[450px]   rounded-md  bg-slate-300">
            <div>
              <img
                className="h-[300px] w-[450px] rounded-md"
                src={child1}
                alt=""
              />
            </div>
            <div className="p-3 flex mt-[10px]">
              <div className="ml-[10px]">
                <img className="rounded-[50%] w-[60px]" src={lip} alt="" />
              </div>
              <div className="flex flex-col justify-center ml-[10px]">
                <p className="font-bold">Robert Schulte</p>
                <p className="text-[12px] opacity-60">CEO</p>
              </div>
            </div>
            <div className="px-3 flex ">
              <p>
                “We contacted tkxel to may slow things down, but in this case,
                it actually speeds things up. I appreciate tkxel Can-Do attitude
                and speed of work.”Read Less
              </p>
            </div>
          </div>
        </div>{" "}
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <div>
          <div className=" max-w-[450px]   rounded-md  bg-slate-300">
            <div>
              <img
                className="h-[300px] w-[450px] rounded-md"
                src={child1}
                alt=""
              />
            </div>
            <div className="p-3 flex mt-[10px]">
              <div className="ml-[10px]">
                <img className="rounded-[50%] w-[60px]" src={lip} alt="" />
              </div>
              <div className="flex flex-col justify-center ml-[10px]">
                <p className="font-bold">Robert Schulte</p>
                <p className="text-[12px] opacity-60">CEO</p>
              </div>
            </div>
            <div className="px-3 flex ">
              <p>
                “We contacted tkxel to may slow things down, but in this case,
                it actually speeds things up. I appreciate tkxel Can-Do attitude
                and speed of work.”Read Less
              </p>
            </div>
          </div>
        </div>{" "}
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <div>
          <div className=" max-w-[450px]   rounded-md  bg-slate-300">
            <div>
              <img
                className="h-[300px] w-[450px] rounded-md"
                src={child1}
                alt=""
              />
            </div>
            <div className="p-3 flex mt-[10px]">
              <div className="ml-[10px]">
                <img className="rounded-[50%] w-[60px]" src={lip} alt="" />
              </div>
              <div className="flex flex-col justify-center ml-[10px]">
                <p className="font-bold">Robert Schulte</p>
                <p className="text-[12px] opacity-60">CEO</p>
              </div>
            </div>
            <div className="px-3 flex ">
              <p>
                “We contacted tkxel to may slow things down, but in this case,
                it actually speeds things up. I appreciate tkxel Can-Do attitude
                and speed of work.”Read Less
              </p>
            </div>
          </div>
        </div>{" "}
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <div>
          <div className=" max-w-[450px]   rounded-md  bg-slate-300">
            <div>
              <img
                className="h-[300px] w-[450px] rounded-md"
                src={child1}
                alt=""
              />
            </div>
            <div className="p-3 flex mt-[10px]">
              <div className="ml-[10px]">
                <img className="rounded-[50%] w-[60px]" src={lip} alt="" />
              </div>
              <div className="flex flex-col justify-center ml-[10px]">
                <p className="font-bold">Robert Schulte</p>
                <p className="text-[12px] opacity-60">CEO</p>
              </div>
            </div>
            <div className="px-3 flex ">
              <p>
                “We contacted tkxel to may slow things down, but in this case,
                it actually speeds things up. I appreciate tkxel Can-Do attitude
                and speed of work.”Read Less
              </p>
            </div>
          </div>
        </div>{" "}
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <div>
          <div className=" max-w-[450px]   rounded-md  bg-slate-300">
            <div>
              <img
                className="h-[300px] w-[450px] rounded-md"
                src={child1}
                alt=""
              />
            </div>
            <div className="p-3 flex mt-[10px]">
              <div className="ml-[10px]">
                <img className="rounded-[50%] w-[60px]" src={lip} alt="" />
              </div>
              <div className="flex flex-col justify-center ml-[10px]">
                <p className="font-bold">Robert Schulte</p>
                <p className="text-[12px] opacity-60">CEO</p>
              </div>
            </div>
            <div className="px-3 flex ">
              <p>
                “We contacted tkxel to may slow things down, but in this case,
                it actually speeds things up. I appreciate tkxel Can-Do attitude
                and speed of work.”Read Less
              </p>
            </div>
          </div>
        </div>{" "}
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <div>
          <div className=" max-w-[450px]   rounded-md  bg-slate-300">
            <div>
              <img
                className="h-[300px] w-[450px] rounded-md"
                src={child1}
                alt=""
              />
            </div>
            <div className="p-3 flex mt-[10px]">
              <div className="ml-[10px]">
                <img className="rounded-[50%] w-[60px]" src={lip} alt="" />
              </div>
              <div className="flex flex-col justify-center ml-[10px]">
                <p className="font-bold">Robert Schulte</p>
                <p className="text-[12px] opacity-60">CEO</p>
              </div>
            </div>
            <div className="px-3 flex ">
              <p>
                “We contacted tkxel to may slow things down, but in this case,
                it actually speeds things up. I appreciate tkxel Can-Do attitude
                and speed of work.”Read Less
              </p>
            </div>
          </div>
        </div>{" "}
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <div>
          <div className=" max-w-[450px]   rounded-md  bg-slate-300">
            <div>
              <img
                className="h-[300px] w-[450px] rounded-md"
                src={child1}
                alt=""
              />
            </div>
            <div className="p-3 flex mt-[10px]">
              <div className="ml-[10px]">
                <img className="rounded-[50%] w-[60px]" src={lip} alt="" />
              </div>
              <div className="flex flex-col justify-center ml-[10px]">
                <p className="font-bold">Robert Schulte</p>
                <p className="text-[12px] opacity-60">CEO</p>
              </div>
            </div>
            <div className="px-3 flex ">
              <p>
                “We contacted tkxel to may slow things down, but in this case,
                it actually speeds things up. I appreciate tkxel Can-Do attitude
                and speed of work.”Read Less
              </p>
            </div>
          </div>
        </div>{" "}
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <div>
          <div className=" max-w-[450px]   rounded-md  bg-slate-300">
            <div>
              <img
                className="h-[300px] w-[450px] rounded-md"
                src={child1}
                alt=""
              />
            </div>
            <div className="p-3 flex mt-[10px]">
              <div className="ml-[10px]">
                <img className="rounded-[50%] w-[60px]" src={lip} alt="" />
              </div>
              <div className="flex flex-col justify-center ml-[10px]">
                <p className="font-bold">Robert Schulte</p>
                <p className="text-[12px] opacity-60">CEO</p>
              </div>
            </div>
            <div className="px-3 flex ">
              <p>
                “We contacted tkxel to may slow things down, but in this case,
                it actually speeds things up. I appreciate tkxel Can-Do attitude
                and speed of work.”Read Less
              </p>
            </div>
          </div>
        </div>{" "}
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <div>
          <div className=" max-w-[450px]   rounded-md  bg-slate-300">
            <div>
              <img
                className="h-[300px] w-[450px] rounded-md"
                src={child1}
                alt=""
              />
            </div>
            <div className="p-3 flex mt-[10px]">
              <div className="ml-[10px]">
                <img className="rounded-[50%] w-[60px]" src={lip} alt="" />
              </div>
              <div className="flex flex-col justify-center ml-[10px]">
                <p className="font-bold">Robert Schulte</p>
                <p className="text-[12px] opacity-60">CEO</p>
              </div>
            </div>
            <div className="px-3 flex ">
              <p>
                “We contacted tkxel to may slow things down, but in this case,
                it actually speeds things up. I appreciate tkxel Can-Do attitude
                and speed of work.”Read Less
              </p>
            </div>
          </div>
        </div>{" "}
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <div>
          <div className=" max-w-[450px] h-[540px]   rounded-md  bg-slate-300">
            <div>
              <img
                className="transition duration-300 rounded-md"
                src={tech}
                alt=""
              />
            </div>
            <div className="p-3 flex mt-[10px]">
              <div className="ml-[10px]">
                <img className="rounded-[50%] w-[60px]" src={lip} alt="" />
              </div>
              <div className="flex flex-col justify-center ml-[10px]">
                <p className="font-bold">Robert K Burger</p>
                <p className="text-[12px] opacity-60">COO- SKGF</p>
              </div>
            </div>
            <div className="px-3 flex ">
              <p>
                “We contacted tkxel to may slow things down, but in this case,
                it actually speeds things up. I appreciate tkxel Can-Do attitude
                and speed of work.”Read Less
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <div>
          <div className=" max-w-[450px]  rounded-md  bg-slate-300">
            <div>
              <img
                className=" h-[300px] w-[450px] rounded-md"
                src={child2}
                alt=""
              />
            </div>
            <div className="p-3 flex mt-[10px]">
              <div className="ml-[10px]">
                <img className="rounded-[50%] w-[60px]" src={lip} alt="" />
              </div>
              <div className="flex flex-col justify-center ml-[10px]">
                <p className="font-bold">Pam Chitwood</p>
                <p className="text-[12px] opacity-60">Product Manager</p>
              </div>
            </div>
            <div className="px-3 flex ">
              <p>
                “We contacted tkxel to may slow things down, but in this case,
                it actually speeds things up. I appreciate tkxel Can-Do attitude
                and speed of work.”Read Less
              </p>
            </div>
          </div>
        </div>{" "}
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <div className=" max-w-[450px] h-[540px]  rounded-md  bg-slate-300">
            <div>
              <img
                className="transition duration-300 rounded-md"
                src={tec2}
                alt=""
              />
            </div>
            <div className="p-3 flex mt-[10px]">
              <div className="ml-[10px]">
                <img className="rounded-[50%] w-[60px]" src={lip} alt="" />
              </div>
              <div className="flex flex-col justify-center ml-[10px]">
                <p className="font-bold">Wate Walls</p>
                <p className="text-[12px] opacity-60">Product Maager</p>
              </div>
            </div>
            <div className="px-3 flex ">
              <p>
                “We contacted tkxel to may slow things down, but in this case,
                it actually speeds things up. I appreciate tkxel Can-Do attitude
                and speed of work.”Read Less
              </p>
            </div>
          </div>
        </div>{" "}
      </SwiperSlide>
      ...

      <SwipeButton />
    </Swiper>
  );
};

export default Swipe;
{/* <SwiperSlide>
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
</SwiperSlide> */}