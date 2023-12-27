import React from 'react'
import { useSwiper } from 'swiper/react'

export const SwipeButton = () => {
    const swiper = useSwiper()
  return (
    <div>
   <div class="flex pb-8 justify-end items-end mr-[30px]">
        <button onClick={()=>swiper.slidePrev()} class="px-4  mx-4 bg-slate-300 hover:bg-[#c7c7c7]">
        <i className="p-[10px] fa-solid fa-chevron-left"></i>
            </button>
            <button onClick={()=>swiper.slideNext()} class="px-4  mx-4 bg-slate-300 hover:bg-[#c9c9c9]">
            <i className="p-[10px] fa-solid fa-chevron-right"></i>
                </button>
                </div>
        
    </div>
  )
}
