import React, { useState } from "react";
import SmlSer from "./SmlSer";

const Next = () => {
  const [nextbk, setnextbk] = useState(false);
  return (
    <div>
      <div>
        <div className="w-[100%] sml h-[100vh] md:hidden left-0 absolute top-0 ">
          <div className=" bg-white flex px-[15px]">
            <div
              onClick={() => {
                setnextbk(true);
              }}
              className="flex items-center text-blue-700 p-1"
            >
              <i class="fa-solid fa-arrow-left-long"></i>
            </div>
            <div className="py-[15px] bg-white">
              <p>Next-Gen Sertvices</p>
            </div>
          </div>

          {nextbk == true ? <SmlSer /> : ""}
          <div className="px-[20px] bg-slate-100 h-[500px]">
            <hr />
            <div className="flex justify-between items-center">
              <div className="p-[15px]">
                <p>Data Scxience & AI</p>
              </div>
            </div>
            <hr />
            <div>
              <div className="flex justify-between items-center">
                <div className="p-[15px]">
                  <p>Cyber Security</p>
                </div>
              </div>
              <hr />
            </div>
            <div>
              <div className="flex justify-between items-center">
                <div className="p-[15px]">
                  <p>Block Chain</p>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Next;
