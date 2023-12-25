import React from "react";
import honey from "./ImgClient/honey.jpg";
import barc from "./ImgClient/barc.jpg";
import groupimg from "./ImgClient/groupimg.png";
import umair from "./ImgClient/Umair.webp";
import nok from "./ImgClient/nok.webp";
import robert from "./ImgClient/Robert.webp";
import anti from "./ImgClient/Antii.webp";
import Form from '../HomePage/Form'
import Footer from '../HomePage/Footer'
const ClientHero = () => {
  return (
    <div>
      <div className="bg-blue-600 py-[50px] text-white flex flex-col justify-center items-center">
        <div>
          <p className="text-[40px] font-bold">
            We Are What Our Clients Need Us To Be
          </p>
        </div>
        <div className="flex">
          <div className="flex flex-col justify-center items-center">
            <p className="text-[40px]">500</p>
            <p>Global Clients</p>
            <p className="text-center">
              Across 40+ countries and 6 <br /> continents
            </p>
          </div>
          <div className="flex flex-col justify-center items-center ml-[25px]">
            <p className="text-[40px]">85%</p>
            <p>Returning Clients</p>
            <p className="text-center">
              Approach us to improve and <br /> expand their solutions
            </p>
          </div>
          <div className="flex flex-col justify-center items-center ml-[25px]">
            <p className="text-[40px]">60%</p>
            <p>Loyal Clients</p>
            <p className="text-center">
              Have continued to choose <br /> tkxel for over 3 years
            </p>
          </div>
        </div>
      </div>
      {/* UMAIR */}

      <div className="mt-[60px] flex px-[110px]">
        <div>
          <img className="w-[750px]" src={umair} alt="" />
        </div>

        <div className=" max-w-[350px]  rounded-md ml-[20px]   bg-slate-200">
          <div className="bg-slate-600 card">
            <div>
              <img className=" h-[300px] w-[350px]" src={nok} alt="" />
            </div>
            <div className="flex justify-center items-center content">
              <p className="text-white text-left text-[22px]  read">
                Read Full Case Study
              </p>
            </div>
          </div>
          <div className="p-3 mt-[0px]">
            <p className="text-[19px] font-bold text-green-700">NOKIA</p>
            <p>Powering Groupon's growth with innovative platforms</p>
          </div>
        </div>
      </div>
      {/* THREE DIVS */}

      <div className="mt-[60px] flex px-[110px]">
        <div className=" max-w-[350px]  rounded-md  m-[15px] md:m-0 bg-slate-200">
          <div className="bg-slate-600 card">
            <div>
              <img className=" h-[300px] w-[350px]" src={honey} alt="" />
            </div>
            <div className="flex justify-center items-center content">
              <p className="text-white text-left text-[22px]  read">
                Read Full Case Study
              </p>
            </div>
          </div>
          <div className="p-3 mt-[0px]">
            <p className="text-[19px] font-bold text-red-700">Honeywell</p>
            <p>Transforming Honeywell's mobile offerings for success.</p>
          </div>
        </div>

        <div className=" max-w-[350px] ml-[20px] rounded-md   bg-slate-200">
          <div className="bg-slate-600 card">
            <div>
              <img className=" h-[300px] w-[350px]" src={barc} alt="" />
            </div>
            <div className="flex justify-center items-center content">
              <p className="text-white text-left text-[22px]  read">
                Read Full Case Study
              </p>
            </div>
          </div>
          <div className="p-3 mt-[0px]">
            <p className="text-[19px] font-bold text-blue-700">Barclays</p>
            <p>Driving Barclays' growth through secure eCommerce.</p>
          </div>
        </div>

        <div className=" max-w-[350px]  rounded-md ml-[20px]   bg-slate-200">
          <div className="bg-slate-600 card">
            <div>
              <img className=" h-[300px] w-[350px]" src={groupimg} alt="" />
            </div>
            <div className="flex justify-center items-center content">
              <p className="text-white text-left text-[22px]  read">
                Read Full Case Study
              </p>
            </div>
          </div>
          <div className="p-3 mt-[0px]">
            <p className="text-[19px] font-bold text-green-700">Groupon</p>
            <p>Powering Groupon's growth with innovative platforms</p>
          </div>
        </div>
      </div>

      {/* ROBERT */}

      <div className="mt-[60px] flex px-[110px]">
        <div className=" max-w-[350px]  rounded-md ml-[20px]   bg-slate-200">
          <div className="bg-slate-600 card">
            <div>
              <img className=" h-[300px] w-[350px]" src={nok} alt="" />
            </div>
            <div className="flex justify-center items-center content">
              <p className="text-white text-left text-[22px]  read">
                Read Full Case Study
              </p>
            </div>
          </div>
          <div className="p-3 mt-[0px]">
            <p className="text-[19px] font-bold text-green-700">NOKIA</p>
            <p>Powering Groupon's growth with innovative platforms</p>
          </div>
        </div>
        <div>
          <img className="w-[750px]" src={robert} alt="" />
        </div>
      </div>

      {/* THREE DIVS */}
      <div className="mt-[60px] flex px-[110px]">
        <div className=" max-w-[350px]  rounded-md  m-[15px] md:m-0 bg-slate-200">
          <div className="bg-slate-600 card">
            <div>
              <img className=" h-[300px] w-[350px]" src={honey} alt="" />
            </div>
            <div className="flex justify-center items-center content">
              <p className="text-white text-left text-[22px]  read">
                Read Full Case Study
              </p>
            </div>
          </div>
          <div className="p-3 mt-[0px]">
            <p className="text-[19px] font-bold text-red-700">Honeywell</p>
            <p>Transforming Honeywell's mobile offerings for success.</p>
          </div>
        </div>

        <div className=" max-w-[350px] ml-[20px] rounded-md   bg-slate-200">
          <div className="bg-slate-600 card">
            <div>
              <img className=" h-[300px] w-[350px]" src={barc} alt="" />
            </div>
            <div className="flex justify-center items-center content">
              <p className="text-white text-left text-[22px]  read">
                Read Full Case Study
              </p>
            </div>
          </div>
          <div className="p-3 mt-[0px]">
            <p className="text-[19px] font-bold text-blue-700">Barclays</p>
            <p>Driving Barclays' growth through secure eCommerce.</p>
          </div>
        </div>

        <div className=" max-w-[350px]  rounded-md ml-[20px]   bg-slate-200">
          <div className="bg-slate-600 card">
            <div>
              <img className=" h-[300px] w-[350px]" src={groupimg} alt="" />
            </div>
            <div className="flex justify-center items-center content">
              <p className="text-white text-left text-[22px]  read">
                Read Full Case Study
              </p>
            </div>
          </div>
          <div className="p-3 mt-[0px]">
            <p className="text-[19px] font-bold text-green-700">Groupon</p>
            <p>Powering Groupon's growth with innovative platforms</p>
          </div>
        </div>
      </div>

      {/* ANTIII */}

      <div className="mt-[60px] flex px-[110px]">
        <div>
          <img className="w-[750px]" src={anti} alt="" />
        </div>

        <div className=" max-w-[350px]  rounded-md ml-[20px]   bg-slate-200">
          <div className="bg-slate-600 card">
            <div>
              <img className=" h-[300px] w-[350px]" src={nok} alt="" />
            </div>
            <div className="flex justify-center items-center content">
              <p className="text-white text-left text-[22px]  read">
                Read Full Case Study
              </p>
            </div>
          </div>
          <div className="p-3 mt-[0px]">
            <p className="text-[19px] font-bold text-green-700">NOKIA</p>
            <p>Powering Groupon's growth with innovative platforms</p>
          </div>
        </div>
      </div>

       {/* THREE DIVS */}

       <div className="mt-[60px] flex px-[110px]">
        <div className=" max-w-[350px]  rounded-md  m-[15px] md:m-0 bg-slate-200">
          <div className="bg-slate-600 card">
            <div>
              <img className=" h-[300px] w-[350px]" src={honey} alt="" />
            </div>
            <div className="flex justify-center items-center content">
              <p className="text-white text-left text-[22px]  read">
                Read Full Case Study
              </p>
            </div>
          </div>
          <div className="p-3 mt-[0px]">
            <p className="text-[19px] font-bold text-red-700">Honeywell</p>
            <p>Transforming Honeywell's mobile offerings for success.</p>
          </div>
        </div>

        <div className=" max-w-[350px] ml-[20px] rounded-md   bg-slate-200">
          <div className="bg-slate-600 card">
            <div>
              <img className=" h-[300px] w-[350px]" src={barc} alt="" />
            </div>
            <div className="flex justify-center items-center content">
              <p className="text-white text-left text-[22px]  read">
                Read Full Case Study
              </p>
            </div>
          </div>
          <div className="p-3 mt-[0px]">
            <p className="text-[19px] font-bold text-blue-700">Barclays</p>
            <p>Driving Barclays' growth through secure eCommerce.</p>
          </div>
        </div>

        <div className=" max-w-[350px]  rounded-md ml-[20px]   bg-slate-200">
          <div className="bg-slate-600 card">
            <div>
              <img className=" h-[300px] w-[350px]" src={groupimg} alt="" />
            </div>
            <div className="flex justify-center items-center content">
              <p className="text-white text-left text-[22px]  read">
                Read Full Case Study
              </p>
            </div>
          </div>
          <div className="p-3 mt-[0px]">
            <p className="text-[19px] font-bold text-green-700">Groupon</p>
            <p>Powering Groupon's growth with innovative platforms</p>
          </div>
        </div>
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

export default ClientHero;
