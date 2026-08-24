
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCards = ({
  title,
  description,
  image,
  tech = [],
  live,
  github,
}) => {
  return (
    <article className="theme-bg3  group flex h-full flex-col overflow-hidden rounded-3xl border border-blue/30 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={`${title} project preview`}
          loading="lazy"
          className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-56"
        />

        {/* Image Overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" /> */}

        {/* Live Badge */}
        {live && (
          <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-green-500 px-3 py-1 text-xs font-semibold text-white shadow-lg">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            Live
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {/* Title */}
        <h3 className="theme-heading mb-2 text-lg font-semibold sm:text-xl">
          {title}
        </h3>

        {/* Description */}
        <p className="theme-text mb-5 line-clamp-3 text-sm leading-6 sm:text-base">
          {description}
        </p>

        {/* Technologies */}
        {tech.length > 0 && (
          <div className="mb-6 flex flex-wrap gap-2">
            {tech.map((item, index) => (
              <span
                key={`${item}-${index}`}
                className=" theme-text rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-xs font-medium text-sky-300 sm:text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        )}

        {/* Buttons */}
        <div className="mt-auto grid grid-cols-1 gap-3 sm:grid-cols-2">
          {/* Live Demo */}
          {live ? (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-sky-400 px-4 py-2.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-sky-300 hover:shadow-lg hover:shadow-sky-400/20 sm:text-base"
            >
              Live Demo
              <FaExternalLinkAlt className="text-xs" />
            </a>
          ) : (
            <span className="inline-flex w-full items-center justify-center rounded-lg border border-gray-500/20 bg-gray-500/10 px-4 py-2.5 text-sm font-semibold text-gray-500 cursor-not-allowed sm:text-base">
              Unavailable
            </span>
          )}

          {/* GitHub */}
          {github ? (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="theme-heading theme-bg2 inline-flex items-center justify-center gap-2 rounded-lg border border-sky-300/30 px-4 py-2.5 text-sm font-semibold transition-all duration-300 hover:border-sky-300 hover:bg-white/10 sm:text-base"
            >
              <FaGithub />
              GitHub
            </a>
          ) : (
            <span className="theme-heading theme-bg2 inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-lg border border-white/10 px-4 py-2.5 text-sm font-semibold opacity-50">
              <FaGithub />
              Private
            </span>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCards;
