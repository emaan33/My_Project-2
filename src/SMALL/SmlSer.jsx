import React, { useState } from "react";
import SmallN from "./SmallN";
import Next from "./Next";
import SmlAdv from "./SmlAdv";
import SmlPro from "./SmlPro";
import SmlSol from "./SmlSol";
import SmlEng from "./SmlEng";
import SmlOpt from "./SmlOpt";

const SmlSer = () => {
  const [back, setback] = useState(false);
  const [next, setnext] = useState(false);
  const [adv, setadv] = useState(false);
  const [prod, setprod] = useState(false);
  const [sol, setsol] = useState(false);
  const [eng, seteng] = useState(false);
  const [opt, setopt] = useState(false);
  return (
    <div>
      <div>
        {back == true ? (
          <SmallN />
        ) : (
          <div className="w-[100%] sml h-[100vh] md:hidden left-0 absolute top-[60px]">
            <div className=" bg-white flex px-[15px]">
              <div
                onClick={() => {
                  setback(true);
                }}
                className="flex items-center text-blue-700 p-1"
              >
                <i class="fa-solid fa-arrow-left-long"></i>
              </div>
              <div className="py-[15px] bg-white">
                <p>Services</p>
              </div>
            </div>
            {next == true ? <Next /> : ""}
            {adv == true ? <SmlAdv /> : ""}
            {prod == true ? <SmlPro /> : ""}
            {sol == true ? <SmlSol /> : ""}
            {eng == true ? <SmlEng /> : ""}
            {opt == true ? <SmlOpt /> : ""}

            <div className="px-[20px] bg-slate-100">
              <hr />
              <div className="flex justify-between items-center">
                <div className="p-[15px]">
                  <p> Next Gen</p>
                </div>
                <div
                  onClick={() => {
                    setnext(true);
                  }}
                >
                  <i class="fa-solid fa-angle-right"></i>
                </div>
              </div>
              <hr />
              <div>
                <div className="flex justify-between items-center">
                  <div className="p-[15px]">
                    <p>Advisory</p>
                  </div>

                  <div
                    onClick={() => {
                      setadv(true);
                    }}
                  >
                    <i className="fa-solid fa-angle-right"></i>
                  </div>
                </div>
                <hr />
              </div>
              <div>
                <div className="flex justify-between items-center">
                  <div className="p-[15px]">
                    <p>Product Engineering</p>
                  </div>

                  <div
                    onClick={() => {
                      setprod(true);
                    }}
                  >
                    <i class="fa-solid fa-angle-right"></i>
                  </div>
                </div>
                <hr />
              </div>
              <div>
                <div className="flex justify-between items-center">
                  <div className="p-[15px]">
                    <p>Solutions</p>
                  </div>

                  <div
                    onClick={() => {
                      setsol(true);
                    }}
                  >
                    <i class="fa-solid fa-angle-right"></i>
                  </div>
                </div>
                <hr />
              </div>
              <div>
                <div className="flex justify-between items-center">
                  <div className="p-[15px]">
                    <p>Engagement Models</p>
                  </div>
                  <div
                    onClick={() => {
                      seteng(true);
                    }}
                  >
                    <i class="fa-solid fa-angle-right"></i>
                  </div>
                </div>
                <hr />
              </div>
              <div>
                <div className="flex justify-between items-center">
                  <div className="p-[15px]">
                    <p>UI/ UX</p>
                  </div>
                </div>
                <hr />
              </div>
              <div>
                <div className="flex justify-between items-center">
                  <div className="p-[15px]">
                    <p>Optimization</p>
                  </div>

                  <div
                    onClick={() => {
                      setopt(true);
                    }}
                  >
                    <i class="fa-solid fa-angle-right"></i>
                  </div>
                </div>
                <hr />
              </div>
              <div>
                <div className="flex justify-between items-center">
                  <div className="p-[15px]">
                    <p>Cloud Services</p>
                  </div>
                </div>
                <hr />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SmlSer;
