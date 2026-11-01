import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { projects } from "../assets/assets";
import ProjectCards from "./ProjectCards";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectCoverflow,
  Mousewheel,
  Pagination,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const Projects = () => {
  const swiperRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(1);

  return (
    <section
      id="projects"
      className=" bg-gray-100 dark:bg-[#080808] text-gray-900 dark:text-white px-3 sm:px-5 lg:px-8 py-16 sm:py-24 overflow-hidden"
    >
      {/* Main Container */}
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          {/* <span className="mb-3 inline-block text-sm font-medium uppercase tracking-[0.2em] text-sky-400">
            My Work
          </span> */}

          <h2 className="theme-heading text-3xl font-bold text-center mb-4">
            My <span className="text-yellow-300">Projects</span>
          </h2>

          <p className="theme-text mt-4 text-sm leading-6 text-gray-400 sm:text-base">
            A selection of projects I have built using modern web technologies,
            focusing on clean design, performance, and real-world functionality.
          </p>
        </div>

        {/* Projects Slider */}
        <div className="mx-auto mt-10 w-full max-w-6xl sm:mt-14 lg:mt-16">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => {
              setCurrentSlide(swiper.realIndex + 1);
            }}
            modules={[Autoplay, EffectCoverflow, Mousewheel, Pagination]}
            effect="coverflow"
            centeredSlides
            loop
            grabCursor
            watchSlidesProgress
            mousewheel={{
              forceToAxis: true,
              releaseOnEdges: true,
              sensitivity: 0.8,
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 120,
              modifier: 1.5,
              scale: 0.9,
              slideShadows: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="projects-swiper !pb-10"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={project.id || index} className="h-auto">
                <ProjectCards {...project} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Slider Controls */}
          <div className="relative mt-6 flex items-center justify-center">
            {/* Previous */}
            {/* <button
              type="button"
              onClick={() => swiperRef.current?.slidePrev()}
              aria-label="Previous project"
              className="absolute left-0 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/20 text-gray-300 backdrop-blur-sm transition-all duration-300 hover:border-yellow-300/50 hover:bg-yellow-300 hover:text-black sm:left-2 sm:h-11 sm:w-11 lg:left-0"
            >
              <FaArrowLeft className="text-xs sm:text-sm" />
            </button> */}

            {/* Counter */}
            <div className="flex items-center gap-2 text-sm">
              <span className="font-semibold text-sky-300">
                {String(currentSlide).padStart(2, "0")}
              </span>

              <span className="text-gray-500">/</span>

              <span className="text-gray-400">
                {String(projects.length).padStart(2, "0")}
              </span>
            </div>

            {/* Next */}
            {/* <button
              type="button"
              onClick={() => swiperRef.current?.slideNext()}
              aria-label="Next project"
              className="absolute right-0 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/20 text-gray-300 backdrop-blur-sm transition-all duration-300 hover:border-yellow-300/50 hover:bg-yellow-300 hover:text-black sm:right-2 sm:h-11 sm:w-11 lg:right-0"
            >
              <FaArrowRight className="text-xs sm:text-sm" />
            </button> */}
          </div>
        </div>

        {/* View All Projects */}
        <div className="mt-12 text-center sm:mt-14">
          <Link
            to="/projects"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-black to-gray-600 px-6 py-2 font-semibold text-white transition-all duration-300 hover:bg-sky-300 hover:shadow-lg shadow-lg shadow-white/10 hover:shadow-sky-400/20 hover:scale-[1.02] sm:px-6 sm:py-3 text-sm"
          >
            View All Projects
            <FaArrowRight className="text-sm" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
