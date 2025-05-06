// import { useSection } from "@/zustand/useNav";
import { ABOUTALPHAVALUE } from "@/constants/appConstant";
import Link from "next/link";
import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ReactPlayer from "react-player";

// interface ISupport {
//   label: string;
//   logo: string;
// }

export default function Hero() {
  // const { setSection } = useSection();

  return (
    <>
      <div className="relative pt-28 lg:pt-32">
        <div className="lg:h-[110vh] h-[98vh]  relative overflow-hidden">
          <div className="flex flex-col items-center justify-center">
            <div className="flex justify-center hover:scale-110 duration-300 hover:animate-pulse">
              {/* <div className="relative w-[39vh] md:w-[50vh] lg:w-[70vh] aspect-square z-10">
                <Image alt="" fill src={"/assets/hero.png"} />
              </div> */}
            </div>
            <div className="px-4 items-center text-center gap-7 justify-center  flex flex-col   ">
              <h1 className="text-hero-Base text-4xl lg:text-6xl hover:scale-110 duration-300 font-montserrat cursor-default  font-bold ">
                  Alpha Project: 
              </h1>
              <h1 className="text-hero-Base text-2xl lg:text-3xl hover:scale-110 duration-300 font-montserrat cursor-default  font-bold ">
                  <span className="text-yellow-400">Solusi</span>  Digital yang Simpel, Efektif, dan Ngehits! 
              </h1>
              <div className="flex flex-col gap-2">
                  <h2 className="font-montserrat text-sm sm:text-xs lg:text-lg  text-white">
                    Hei, bisnis owner! Di zaman serba online ini, punya strategi digital yang keren itu wajib banget.  
                  </h2>

                  <h2 className="font-montserrat text-sm lg:text-lg sm:text-xs text-white">
                    Kami siap bantu Anda <span className="underline"> naik level di dunia digital tanpa ribet </span>, tapi tetap impactful. Yuk, mulai bareng kami!  
                  </h2>
              </div>

              <div className='flex items-center justify-center w-full h-[250px] md:w-full md:h-[350px] lg:h-[500px]'>
                  <ReactPlayer 
                      url={ABOUTALPHAVALUE.video}
                      width="100%"
                      height="100%"
                      controls={true}
                      playsinline={true}
                      pip={false}
                      stopOnUnmount={true}
                       />      
              </div>  
              
              <div className="flex mt-4  text-white  items-center font-montserrat lg:px-16 justify-center text-center mx-4 hover:scale-105 duration-300 ">
                <Link
                  target="_blank"
                  className="py-4 px-8 flex text-center items-center bg-hero-Base text-brand-dark rounded-md animate-bounce lg:text-2xl mt-4 hover:bg-brand-dark hover:text-white duration-300 font-bold "
                  href={
                    "https://bit.ly/AlphaPromo50ribu"
                  }
                >
                  <IoIosArrowForward />
                  Konsultasi Sekarang!
                  <IoIosArrowBack />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <button
          className="py-1 px-3 bg-white text-brand-dark rounded-xl animate-bounce lg:text-2xl mt-4 hover:bg-brand-dark hover:scale-105 hover:text-white duration-300 font-bold"
          onClick={() => setSection("pricing")}
        >
        </button> */}
        {/* <div className="z-20 bottom-0 absolute w-full">
          <div className="relative w-full aspect-[9/1]">
            <Image
              alt=""
              className="bottom-0 absolute object-cover"
              fill
              src={"/shape.svg"}
            />
          </div>
        </div> */}
      </div>
    </>
  );
}
