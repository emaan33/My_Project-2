import React, { useState } from "react";
import SmlSer from "./SmlSer";

const SmlAdv = () => {
  const [advbk, setadvbk] = useState(false);
  return (
    <div>
      <div>
        <div>
          <div className="w-[100%] sml h-[100vh] md:hidden left-0 absolute top-0 ">
            <div className=" bg-white flex px-[15px]">
              <div
                onClick={() => {
                  setadvbk(true);
                }}
                className="flex items-center text-blue-700 p-1"
              >
                <i class="fa-solid fa-arrow-left-long"></i>
              </div>
              <div className="py-[15px] bg-white">
                <p>Advisory</p>
              </div>
            </div>

            {advbk == true ? <SmlSer /> : ""}
            <div className="px-[20px] bg-slate-100 h-[100vh]">
              <hr />
              <div className="flex justify-between items-center">
                <div className="p-[15px]">
                  <p>Digital Trnasformation</p>
                </div>
              </div>
              <hr />
              <div>
                <div className="flex justify-between items-center">
                  <div className="p-[15px]">
                    <p>Product Strategy</p>
                  </div>
                </div>
                <hr />
              </div>
              <div>
                <div className="flex justify-between items-center">
                  <div className="p-[15px]">
                    <p>Discovery Workshop</p>
                  </div>
                </div>
                <hr />
              </div>
              <div>
                <div className="flex justify-between items-center">
                  <div className="p-[15px]">
                    <p>POC Development</p>
                  </div>
                </div>
                <hr />
              </div>
              <div>
                <div className="flex justify-between items-center">
                  <div className="p-[15px]">
                    <p>Business Process Outsourcing</p>
                  </div>
                </div>
                <hr />
              </div>
              <div>
                <div className="flex justify-between items-center">
                  <div className="p-[15px]">
                    <p>Process Consulting & Audit</p>
                  </div>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmlAdv;
