import { useEffect, useState } from "react";
import { m } from "motion/react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

import { projects } from "../assets/assets";
import ProjectCards from "../components/ProjectCards";

const AllProjects = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Projects load hone ka simulation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <m.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="theme-bg min-h-screen py-20 sm:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">

        <Link
            to="/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-sky-300"
          >
            <FaArrowLeft />
            Back to Portfolio
          </Link>

        {/* Header */}
        <div className="mb-12 text-center">

          

          <h1 className="theme-heading text-4xl font-bold sm:text-5xl">
            All <span className="text-yellow-300">Projects</span>
          </h1>

          <p className="theme-text mx-auto mt-4 max-w-2xl text-gray-400">
            Explore all the projects I have built using modern web
            technologies and real-world functionality.
          </p>

        </div>

        {/* Projects Area */}
        {loading ? (
          // Loader sirf yahan chalega
          <div className="flex min-h-[300px] items-center justify-center">

            <div className="flex flex-col items-center gap-4">

              <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-700 border-t-sky-400" />

              <p className="text-sm text-gray-400">
                Loading projects...
              </p>

            </div>

          </div>
        ) : (
          // Projects
          <m.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {projects.map((project, index) => (
              <m.div
                key={project.id || index}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 30,
                  },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      ease: "easeOut",
                    },
                  },
                }}
              >
                <ProjectCards {...project} />
              </m.div>
            ))}
          </m.div>
        )}

      </div>
    </m.section>
  );
};

export default AllProjects;