import React from 'react'
import Nav from '../HomePage/Nav'
import ClientNav from './ClientNav'
import well from '../ClientPage/ImgClient/well.png'
import doopley from '../ClientPage/ImgClient/dooply.png'
import group3 from '../ClientPage/ImgClient/group3.png'
import luma from '../ClientPage/ImgClient/luma.png'
import nokia from '../ClientPage/ImgClient/nokia4.png'
const Client1 = () => {

  const scrollers = document.querySelectorAll(".scroller");

  // If a user hasn't opted in for recuded motion, then we add the animation
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
  }
  
  function addAnimation() {
    scrollers.forEach((scroller) => {
      // add data-animated="true" to every `.scroller` on the page
      scroller.setAttribute("data-animated", true);
  
      // Make an array from the elements within `.scroller-inner`
      const scrollerInner = scroller.querySelector(".scroller__inner");
      const scrollerContent = Array.from(scrollerInner.children);
  
      // For each item in the array, clone it
      // add aria-hidden to it
      // add it into the `.scroller-inner`
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
      });
    });
  }
  

  return (
    <div className='h-[100vh]'>
    <ClientNav />
<div className='flex flex-col  justify-center items-center mt-[50px]'>
   <div className='our-client flex flex-col justify-center items-center' >
   <p className='text-[20px]'>Our Clients</p>
   <div className='border-b-blue-700 our-client-div border-b-[5px]   w-[30px] rounded-full'></div>
   </div>
    <p className='text-[60px] font-extrabold mt-5'>Bringing Vision <span className='text-blue-700'>To Life</span></p>
    <p className='text-[20px] mt-[10px] text-center'>We are committed to offer tailor-made solutions <br /> well-aligned with your goals.</p>
    <div className="button flex justify-center mt-6 bg-blue-700 text-white rounded-lg  p-3 transition duration-300 ease-in-out hover:bg-blue-950">
        <div>
          <button className="">Lets Talk</button>
        </div>
        <div className="goup ml-2">
          <i className=" hovbtn w-[30px] transition duration-700 ease-in-out fa-solid fa-arrow-right"></i>
        </div>
      </div>
</div>

<div className=''>
  <div className="stripe">
    <div className="cnt">
      <div className="elem">      
        <img className='h-[25px] w-[200px]' src={well} alt="" />
      </div>
      <div className="elem">      
      <img className='h-[25px] w-[200px]' src={nokia} alt="" />
      </div>
      <div className="elem">      
      <img className='h-[25px] w-[200px]' src={doopley} alt="" />
      </div>
      <div className="elem">      
      <img className='h-[25px] w-[200px]' src={luma} alt="" />
      </div>
      <div className="elem">      
      <img className='h-[25px] w-[200px]' src={group3} alt="" />
      </div>
      <div className="elem">      
      <img className='h-[25px] w-[200px]' src={well} alt="" />
      </div>
      
    </div>
    <div className="cnt">
      <div className="elem">      
        <img className='h-[25px] w-[200px]' src={well} alt="" />
      </div>
      <div className="elem">      
      <img className='h-[25px] w-[200px]' src={nokia} alt="" />
      </div>
      <div className="elem">      
      <img className='h-[25px] w-[200px]' src={doopley} alt="" />
      </div>
      <div className="elem">      
      <img className='h-[25px] w-[200px]' src={luma} alt="" />
      </div>
      <div className="elem">      
      <img className='h-[25px] w-[200px]' src={group3} alt="" />
      </div>
      <div className="elem">      
      <img className='h-[25px] w-[200px]' src={well} alt="" />
      </div>
      
    </div>
  </div>
</div>

    </div>
  )
}

export default Client1
