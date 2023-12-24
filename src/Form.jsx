import React from "react";
import red from "./images/red.png";
import goog from "./images/goog.png";
import yellow from "./images/yellow.png";
import pic from "./images/Lone.png";
import inn from "./images/inn.png";
const Form = () => {
  return (
    <div className="md:flex">
      <div className="bg-gray-200 max-w-[830px] bord ">
        <div className="md:p-[40px]  p-[20px]  md:ml-[40px] mt-[50px] ">
          <div className="flex justify-center md:block">
            <p className="md:text-[35px] text-[20px] font-bold ">
              Ready To Get Started?
            </p>
          </div>
          <form
            className=" flex flex-col justify-center items-center"
            action=""
          >
            <label htmlFor="">
              {" "}
              <select
                className="p-2 md:w-[700px] w-[300px] rounded-md mt-[50px]  bord outline-none focus:border-blue-500"
                name=""
                id=""
              >
                <option value="">How can we help you</option>
                <option value="1">Applying for a job</option>
                <option value="2">Mobile App Development</option>
                <option value="3">Enterprise Development</option>
                <option value="4">Web Development</option>
                <option value="4">Block Chain</option>
                <option value="4">Dedicated team</option>
                <option value="4">IT Consulting</option>
                <option value="4">Internet Of things</option>
                <option value="4">Cloud Computing</option>
                <option value="4">Artificial Intelligence</option>
                <option value="4">FinTech</option>
                <option value="4">Other</option>
              </select>{" "}
            </label>

            <div className="flex flex-col md:hidden">
              <label htmlFor="">
                <input
                  className="p-2 mt-3 rounded-md w-[300px] bord outline-none focus:border-blue-500 "
                  type="text"
                  placeholder="Your Name"
                />
              </label>
              <label htmlFor="">
                <input
                  className="p-2 md:ml-2 mt-3 rounded-md w-[300px] bord outline-none focus:border-blue-500"
                  type="text"
                  placeholder="Your Email"
                />
              </label>
            </div>
            <div className="md:block hidden">
              <label htmlFor="">
                <input
                  className="p-2 mt-3 rounded-md md:w-[345px] bord outline-none focus:border-blue-500 "
                  type="text"
                  placeholder="Your Name"
                />
              </label>
              <label htmlFor="">
                <input
                  className="p-2 md:ml-2 mt-3 rounded-md md:w-[345px] bord outline-none focus:border-blue-500"
                  type="text"
                  placeholder="Your Email"
                />
              </label>
            </div>

            <div className="flex flex-col md:hidden">
              <label htmlFor="">
                <input
                  className="p-2 mt-3 rounded-md w-[300px] bord outline-none focus:border-blue-500"
                  type="text"
                  placeholder="Your Name"
                />
              </label>
              <label htmlFor="">
                <input
                  className="p-2 mt-3 md:ml-2 rounded-md w-[300px] bord outline-none focus:border-blue-500"
                  type="text"
                  placeholder="Organization"
                />
              </label>
            </div>
            <div className="md:block hidden">
              <label htmlFor="">
                <input
                  className="p-2 mt-3 rounded-md md:w-[345px] bord outline-none focus:border-blue-500"
                  type="text"
                  placeholder="Your Name"
                />
              </label>
              <label htmlFor="">
                <input
                  className="p-2 mt-3 md:ml-2 rounded-md md:w-[345px] bord outline-none focus:border-blue-500"
                  type="text"
                  placeholder="Organization"
                />
              </label>
            </div>

            <div className="mt-3 ">
              <textarea
                className="px-2 rounded-md w-[300px] md:w-[700px]  bord outline-none focus:border-blue-500"
                placeholder="Project Description"
                rows="4"
                cols="50"
                name="comment"
                form="usrform"
              ></textarea>
            </div>

            <div className="mt-3">
              <label for="terms-and-conditions">
                <input type="checkbox" required name="terms-and-conditions" />{" "}
                Check here to subscribe for updates.
              </label>
            </div>

            <div className="mt-4">
              <button className="bg-blue-600 text-white px-5 py-2  rounded-md">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="">
        <div className="md:w-[300px] max-w-[300px] flex justify-center items-center">
          <div className=" md:w-[180px] max-w-[180px] h-[50px] md:mt-[180px] mt-8 bg-slate-200 rounded-se-3xl rounded-es-3xl">
            <div className="flex">
              <div>
                <p>4.9</p>
              </div>
              <div className="flex">
                <img className="w-[20px] h-[20px] ml-[5px]" src={red} alt="" />
                <img className="w-[20px] h-[20px] ml-[5px]" src={red} alt="" />
                <img className="w-[20px] h-[20px] ml-[5px]" src={red} alt="" />
                <img className="w-[20px] h-[20px] ml-[5px]" src={red} alt="" />
                <img className="w-[20px] h-[20px] ml-[5px]" src={red} alt="" />
              </div>
            </div>
            <div className="text-[11px] font-bold">
              <p>Based on 78 clutch reviews</p>
            </div>
          </div>
        </div>

        <div className="mt-[30px] ">
          <div className=" md:w-[400px] flex justify-center items-center flex-col">
            <div className="flex ">
              <div>
                <p className="font-bold">EXCELLENT</p>
              </div>
              <div className="flex">
                <img
                  className="w-[20px] h-[20px] ml-[5px]"
                  src={yellow}
                  alt=""
                />
                <img
                  className="w-[20px] h-[20px] ml-[5px]"
                  src={yellow}
                  alt=""
                />
                <img
                  className="w-[20px] h-[20px] ml-[5px]"
                  src={yellow}
                  alt=""
                />
                <img
                  className="w-[20px] h-[20px] ml-[5px]"
                  src={yellow}
                  alt=""
                />
                <img
                  className="w-[20px] h-[20px] ml-[5px]"
                  src={yellow}
                  alt=""
                />
              </div>
            </div>
            <div>
              <img className="w-[150px] " src={goog} alt="" />
            </div>
          </div>
          <hr />
          <div className="flex items-center justify-center md:w-[400px] mt-[40px]">
            <div className="flex">
              <div>
                <img src={pic} alt="" />
              </div>
              <div className="ml-[10px] text-slate-500 mb-[40px]">
                <p className="font-bold">Jason Frost</p>
                <p>Manager, Customer Success</p>
                <p>
                  jason.frost@tkxel.com <br />
                  571 549 8430
                </p>
                <img className="w-[20px] h-[20px]" src={inn} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
