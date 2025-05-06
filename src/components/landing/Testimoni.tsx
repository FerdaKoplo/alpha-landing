import { TESTI } from "@/constants/appConstant";
import React, { useRef, useState } from "react";
import { GoPlay } from "react-icons/go";
import ReactPlayer from "react-player";
import {  Pagination, EffectCoverflow, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/effect-coverflow';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Testimoni() {
  const [isPlaying, setIsPlaying] = useState( Array(TESTI.length).fill(false));
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  // const handleSlideChange = (swiper: any) => {
  //   setActiveSlide(swiper.activeIndex);
  //   setIsPlaying((prev) =>
  //     prev.map((_, index) => index === swiper.activeIndex)
  //   );
  // };

  const onVisible = (index : number) => {
      setIsPlaying((prev) => prev.map((isPlaying, i) => i === index ? true : isPlaying))
    }

  return (
    <div className="px-4 bg-brand-bone lg:px-20  py-14 flex flex-col">
      <div className="flex flex-col justify-center gap-10 items-center mt-20">
        <div className="flex text-center flex-col gap-5 justify-center items-center">
          <h1 className="text-3xl lg:text-5xl font-bold text-brand-dark font-montserrat ">
            Testimonials
          </h1>
          <h2 className="text-2xl lg:text-3xl font-bold text-brand-dark font-montserrat ">
            Cerita Bisnis Owner yang Udah Coba
          </h2>
        </div>
        <div className="flex flex-col gap-3 ">
          <p className="text-sm lg:text-lg">
            “Kerja sama dengan Alpha Project itu ibarat jackpot! Tim mereka tahu banget cara bikin strategi yang works buat bisnis saya.” - <span className="font-semibold">Sarah, Pemilik Bisnis F&B</span>
          </p>
          <p className="text-sm lg:text-lg">
            “Website baru saya bukan cuma keren, tapi langsung boost performa bisnis saya. Mantap banget, Alpha Project!” - <span className="font-semibold"> Anton, CEO Startup Teknologi</span>
          </p>
        </div>

      </div>

      <div className="lg:col-span-2 relative mt-10">
        <button
          ref={prevRef}
          className="absolute top-1/2 left-4 z-10 -translate-y-1/2 bg-brand-dark text-white p-2 rounded-full hover:bg-brand transition"
        >
          <IoIosArrowBack />
        </button>
        <button
          ref={nextRef}
          className="absolute top-1/2 right-4 z-10 -translate-y-1/2 bg-brand-dark text-white p-2 rounded-full hover:bg-brand transition"
        >
          <IoIosArrowForward />
        </button>
        <Swiper
          spaceBetween={100}
          slidesPerView={1}
          centeredSlides={true}
          speed={2000}
          grabCursor={true}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            if (swiper.params.navigation) {
              const navigation = swiper.params.navigation as any;
              navigation.prevEl = prevRef.current;
              navigation.nextEl = nextRef.current;
            }
          }}
          modules={[Pagination, EffectCoverflow, Navigation]}
          effect="coverflow"
          coverflowEffect={{rotate:30, stretch:3, depth:50, modifier:1, slideShadows:false}}
          className="w-full h-full"
        >
           {TESTI.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white rounded-xl p-3 md:p-5 lg:p-10 flex flex-col">
                <div className="flex bg-brand-bone  h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh] items-center justify-center relative">
                  {isPlaying[i] ? (
                    <ReactPlayer
                      url={item.video}
                      width="100%"
                      height="100%"
                      controls={true}
                      playing={true}
                      onEnded={() =>
                        setIsPlaying((prev) =>
                          prev.map((isPlaying, index) =>
                            index === i ? false : isPlaying
                          )
                        )
                      }
                      key={i}
                    />
                  ) : (
                    <button
                      className="text-7xl text-white"
                      onClick={() => onVisible(i)}
                    >
                      <GoPlay />
                    </button>
                  )}
                </div>
                <p className="justify-center mt-4 flex">{item.label}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}