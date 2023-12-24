import React, { useState } from "react";
import SmlSer from "./SmlSer";

const SmlPro = () => {
  const [probk, setprobk] = useState(false);
  return (
    <div>
      <div>
        <div className="w-[100%] sml h-[100vh] md:hidden left-0 absolute top-0 ">
          <div className=" bg-white flex px-[15px]">
            <div
              onClick={() => {
                setprobk(true);
              }}
              className="flex items-center text-blue-700 p-1"
            >
              <i class="fa-solid fa-arrow-left-long"></i>
            </div>
            <div className="py-[15px] bg-white">
              <p>Product Engineering</p>
            </div>
          </div>

          {probk == true ? <SmlSer /> : ""}
          <div className="px-[20px] bg-slate-100 h-[100vh] ">
            <hr />
            <div className="flex justify-between items-center">
              <div className="p-[15px]">
                <p>Application Re-Engineering</p>
              </div>
            </div>
            <hr />
            <div>
              <div className="flex justify-between items-center">
                <div className="p-[15px]">
                  <p>Custon Software Development</p>
                </div>
              </div>
              <hr />
            </div>
            <div>
              <div className="flex justify-between items-center">
                <div className="p-[15px]">
                  <p>Web App Development</p>
                </div>
              </div>
              <hr />
            </div>
            <div>
              <div className="flex justify-between items-center">
                <div className="p-[15px]">
                  <p>Mobile App Development</p>
                </div>
              </div>
              <hr />
            </div>
            <div>
              <div className="flex justify-between items-center">
                <div className="p-[15px]">
                  <p>DevOps</p>
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

export default SmlPro;
