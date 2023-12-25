import React,{useState} from 'react'
import ClientNav from '../ClientPage/ClientNav';

const ComNav = () => {
    const [hover, sethover] = useState(false);
  return (
    <div>
          <ClientNav />
      <div className='flex flex-col bg-blue-600 h-[89vh]  justify-center items-center'>
    <p className='text-[60px] text-white text-center font-extrabold mt-5'>Experience Excellence With <br /> Us!</p>
    <p className='text-[27px] mt-[10px] text-center text-white'>Tkxel is the go-to partner for numerous global enterprises, SMEs, and tech <br /> innovators to maximize their business value. </p>
    <div className="button flex justify-center mt-6 bg-white text-black rounded-lg  p-3 transition duration-300 ease-in-out ">
        <div>
          <button className="">Contact Us</button>
        </div>
        <div className="goup ml-2">
          <i className=" hovbtn w-[30px] transition duration-700 ease-in-out fa-solid fa-arrow-right"></i>
        </div>
      </div>
</div>
    </div>
  )
}

export default ComNav
