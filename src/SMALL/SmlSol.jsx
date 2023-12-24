import React, { useState } from "react";
import SmlSer from "./SmlSer";

const SmlSol = () => {
  const [solbk, setsolbk] = useState(false);
  return (
    <div>
      <div>
        <div>
          <div className="w-[100%] sml h-[100vh] md:hidden left-0 absolute top-0 ">
            <div className=" bg-white flex px-[15px]">
              <div
                onClick={() => {
                  setsolbk(true);
                }}
                className="flex items-center text-blue-700 p-1"
              >
                <i class="fa-solid fa-arrow-left-long"></i>
              </div>
              <div className="py-[15px] bg-white">
                <p>Solutions</p>
              </div>
            </div>

            {solbk == true ? <SmlSer /> : ""}
            <div className="px-[20px] bg-slate-100 h-[100vh]">
              <hr />
              <div className="flex justify-between items-center">
                <div className="p-[15px]">
                  <p>Salesforce</p>
                </div>
              </div>
              <hr />
              <div>
                <div className="flex justify-between items-center">
                  <div className="p-[15px]">
                    <p>ServiceNow</p>
                  </div>
                </div>
                <hr />
              </div>
              <div>
                <div className="flex justify-between items-center">
                  <div className="p-[15px]">
                    <p>Mulesoft</p>
                  </div>
                </div>
                <hr />
              </div>
              <div>
                <div className="flex justify-between items-center">
                  <div className="p-[15px]">
                    <p>AWS</p>
                  </div>
                </div>
                <hr />
              </div>
              <div>
                <div className="flex justify-between items-center">
                  <div className="p-[15px]">
                    <p>Shopify</p>
                  </div>
                </div>
                <hr />
              </div>
              <div>
                <div className="flex justify-between items-center">
                  <div className="p-[15px]">
                    <p>Power BI</p>
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

export default SmlSol;
