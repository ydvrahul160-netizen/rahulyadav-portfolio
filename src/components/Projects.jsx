import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../assets/assets";
import ProjectCards from "./ProjectCards";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
  Mousewheel,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Projects = () => {
  const swiperRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(1);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      viewport={{ once: false, amount: 0.08 }}
      id="projects"
      className="py-30 bg-dark-100"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <h2 className="text-3xl font-bold text-center mb-4">
          My <span className="text-yellow-300">Projects</span>
        </h2>

        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/10 blur-[120px] rounded-full"></div>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-4">
          A selection of my recent work
        </p>

        <div className=" max-w-6xl mx-auto py-20">
          <Swiper
            onSlideChange={(swiper) => {
              setCurrentSlide(swiper.realIndex + 1);
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            modules={[
              Autoplay,
              EffectCoverflow,
              Navigation,
              Pagination,
              Mousewheel,
            ]}
            effect="coverflow"
            centeredSlides={true}
            slidesPerView={3}
            loop={true}
            mousewheel={{
              forceToAxis: true,
              releaseOnEdges: true,
              sensitivity: 1,
            }}
            navigation={false}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 150,
              modifier: 2,
              scale: 0.9,
              slideShadows: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <ProjectCards {...project} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Counter */}
          <div className="relative flex justify-center items-center gap-2 mt-8 text-gray-400">
            {/* Left Arrow */}
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-dark-200 border border-white/10 hover:bg-yellow-300 hover:text-black transition"
            >
              <FaArrowLeft className="mx-auto" />
            </button>

            <span className="text-sky-300 font-semibold">
              {String(currentSlide).padStart(2, "0")}
            </span>

            <span>/</span>

            <span>{String(projects.length).padStart(2, "0")}</span>
            {/* Right Arrow */}
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-dark-200 border border-white/10 hover:bg-yellow-300 hover:text-black transition"
            >
              <FaArrowRight className="mx-auto" />
            </button>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 border border-sky-300 rounded-lg font-medium hover:bg-sky-300 transition duration-300"
          >
            <span>View All Project</span>
            <FaArrowRight className="ml-2" />
          </a>
        </div>
      </div>
      {/* yellow glow line  */}
      <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-yellow-300 to-transparent opacity-40"></div>
    </motion.div>
  );
};

export default Projects;
