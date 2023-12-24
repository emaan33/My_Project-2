import React, { useState } from "react";
import SmlSer from "./SmlSer";

const SmallN = () => {
  const [service, setservice] = useState(false);
  return (
    <div>
      {service == true ? (
        <SmlSer />
      ) : (
        <div className="w-[100%] z-10 h-[100vh] md:hidden left-0 absolute top-[60px] bg-slate-100">
          <div className="px-[20px]">
            <div className="flex justify-between items-center">
              <div className="p-[15px]">
                <p>Services</p>
              </div>
              <div
                onClick={() => {
                  setservice(true);
                }}
              >
                <i class="fa-solid fa-angle-right"></i>
              </div>
            </div>
            <hr />
            <div className="p-[15px]">
              <p>Clients</p>
            </div>
            <hr />
            <div className="p-[15px]">
              <p>Company</p>
            </div>
            <hr />
            <div className="p-[15px]">
              <p>Podcasts</p>
            </div>
            <hr />
            <div className="p-[15px]">
              <p>Career</p>
            </div>
            <hr />
            <div className="p-[15px]">
              <p>Resources</p>
            </div>
            <hr />
          </div>
          <div className="m-[20px]">
            <div className="bg-blue-600 rounded-md flex justify-center items-center">
              <button className="text-white py-[10px]">Contact Us</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SmallN;
