import React, { useState } from "react";
import SmlSer from "./SmlSer";

const SmlOpt = () => {
  const [optbk, setoptbk] = useState(false);
  return (
    <div>
      <div>
        <div className="w-[100%] sml h-[100vh] md:hidden left-0 absolute top-0 ">
          <div className=" bg-white flex px-[15px]">
            <div
              onClick={() => {
                setoptbk(true);
              }}
              className="flex items-center text-blue-700 p-1"
            >
              <i class="fa-solid fa-arrow-left-long"></i>
            </div>
            <div className="py-[15px] bg-white">
              <p>Optimization</p>
            </div>
          </div>

          {optbk == true ? <SmlSer /> : ""}
          <div className="px-[20px] bg-slate-100 h-[500px]">
            <hr />
            <div className="flex justify-between items-center">
              <div className="p-[15px]">
                <p>Quality Assurance</p>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmlOpt;
