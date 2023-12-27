import React, { useState } from 'react'

const ClientNav = () => {
    const [hover, sethover] = useState(false);
  return (
    <div className=''>
        <div className=" hidden fixed w-full z-10 md:flex bg-white opacity-100 shadow-md py-3 pl-5 ">
        <div className="md:flex hidden items-center text-4xl font-extrabold text-black">
          <p className="changeme">tkxel</p>
        </div>

        <div className="md:flex  hidden color text-white items-center ">
          <div
            onMouseEnter={() => {
              sethover(true);
            }}
            className=" ml-[150px] relative text-blue-700 w-[74px] flex justify-between items-center"
          >
            <a href="" className="flex items-center">
              Services
            </a>
            <i className=" child transition duration-500 ease-in-out fa-solid fa-angle-down"></i>

            {hover === true ? (
              <div
                onMouseLeave={() => {
                  sethover("");
                }}
                className=" absolute ml-[-270px]    h-[700px] top-11 bg-fuchsia-100 "
              >
                <div className="flex">
                  <div className="flex flex-col justify-center items-center p-8 bg-blue-100 w-[350px] text-black">
                    <div className="w-[200px] text-[14px]">
                      <p className="text-lg text-left font-bold">
                        Next-Gen Services{" "}
                      </p>
                      <p className="py-4 w-[200px] text-left">
                        Data science & AI
                      </p>
                      <p className="py-4 text-left">Cyber Security</p>
                      <p className="py-3 text-left">Blockchain</p>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center py-8 items-center bg-white w-[250px] text-black">
                    <div className=" text-[14px]">
                      <p className="text-lg text-left font-bold">Advisory </p>
                      <p className="py-4  text-left">Digital Transformation</p>
                      <p className="py-2 text-left">Product Strategy</p>
                      <p className="py-2 text-left">Discovery Workshop</p>
                      <p className="py-2 text-left">POC Development</p>
                      <p className="py-2 text-left">
                        Business Process Outsourcing
                      </p>
                      <p className="py-2 text-left">
                        Process Consulting & Audit
                      </p>
                      <p className="py-5 font-bold text-left">Optimization</p>
                      <p className="py-2 text-left">Quality Assurance</p>
                    </div>
                  </div>

                  <div className="flex flex-col py-8 justify-center items-center bg-white w-[250px] text-black">
                    <div className=" text-[14px]">
                      <p className="text-lg text-left font-bold">
                        Product Engineering{" "}
                      </p>
                      <p className="py-4  text-left">
                        Application Re-Engineering
                      </p>
                      <p className="py-4 text-left">
                        Custom Software Development
                      </p>
                      <p className="py-3 text-left">Web Development</p>
                      <p className="py-3 text-left">App Development</p>
                      <p className="py-3 text-left">DevOps</p>
                      <p className="py-5 text-left font-bold">Cloud Services</p>
                      <p className="py-3 text-left">Cloud Migration</p>
                      <p className="py-3 text-left">Cloud Engineering</p>
                    </div>
                  </div>

                  <div className="flex flex-col py-8 justify-center items-center bg-white w-[250px] text-black">
                    <div className=" text-[14px]">
                      <p className="text-lg text-left font-bold">Solutions</p>
                      <p className="py-4  text-left">Salesforce</p>
                      <p className="py-4 text-left">ServiceNow</p>
                      <p className="py-3 text-left">Mulesoft</p>
                      <p className="py-3 text-left">AWS</p>
                      <p className="py-3 text-left">Shopify</p>
                      <p className="py-5 text-left">Power BI</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="ml-[50px] text-black hover:text-blue-700">
            <a href="">Clients</a>
          </div>
          <div className="ml-[50px] text-black hover:text-blue-700">
            <a href="">Company</a>
          </div>
          <div className="ml-[50px] text-black hover:text-blue-700">
            <a href="">Podcasts</a>
          </div>
          <div className="ml-[50px] text-black hover:text-blue-700">
            <a href="">Careers</a>
          </div>
          <div className="ml-[50px] text-black hover:text-blue-700 w-[90px] flex justify-between items-center">
            <a href="">Resources</a>
            <i class="fa-solid fa-angle-down"></i>
          </div>
          <div className="ml-[80px] text-black hover:text-blue-700 w-[124px] flex justify-between items-center">
            <i class="fa-solid fa-phone"></i>
            <a href="">527 646 7364</a>
          </div>
        </div>

        <div className="md:flex hidden items-center ">
          <button className="bg-blue-700 w-[100px] text-white ml-[30px] px-2 py-2 rounded-lg hover:bg-blue-950">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  )
}

export default ClientNav
