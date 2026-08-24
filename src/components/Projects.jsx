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
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      viewport={{ once: false, amount: 0.08 }}
      className="theme-bg relative overflow-hidden py-20 sm:py-20 lg:py-28"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-0 top-20 h-52 w-52 rounded-full bg-blue/40 blur-[100px] sm:left-10 sm:h-72 sm:w-72 sm:blur-[120px]" />

      <div className="pointer-events-none absolute bottom-10 right-0 h-52 w-52 rounded-full bg-blue/30 blur-[100px] sm:right-10 sm:h-72 sm:w-72 sm:blur-[120px]" />

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
            className="inline-flex items-center gap-2 rounded-lg border border-sky-300 bg-sky-400 px-5 py-2.5 font-semibold text-gray-900 transition-all duration-300 hover:bg-sky-300 hover:shadow-lg hover:shadow-sky-400/20 sm:px-6 sm:py-3"
          >
            View All Projects
            <FaArrowRight className="text-sm" />
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
