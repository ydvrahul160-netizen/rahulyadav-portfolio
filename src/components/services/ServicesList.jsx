import {
  Code2,
  Server,
  Layers3,
  MonitorSmartphone,
  Wrench,
} from "lucide-react";

import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Frontend Development",
    description:
      "Building responsive and interactive user interfaces with clean code and thoughtful design for a smooth user experience.",
    technologies: ["React.js", "JavaScript", "Tailwind CSS"],
    icon: Code2,
  },
  {
    title: "Backend Development",
    description:
      "Developing reliable server-side applications, REST APIs, authentication systems, and database integrations.",
    technologies: ["Node.js", "Express.js", "MongoDB"],
    icon: Server,
  },
  {
    title: "Full Stack Development",
    description:
      "Creating complete web applications by connecting modern frontend interfaces with powerful backend functionality.",
    technologies: ["MERN Stack", "REST APIs", "JWT"],
    icon: Layers3,
  },
  {
    title: "Responsive Web Design",
    description:
      "Creating websites that adapt smoothly to mobile phones, tablets, laptops, and desktop screens.",
    technologies: ["HTML5", "CSS3", "Tailwind CSS"],
    icon: MonitorSmartphone,
  },
  {
    title: "Website Improvement",
    description:
      "Improving existing websites through UI enhancements, responsive fixes, bug resolution, and performance improvements.",
    technologies: ["React.js", "CSS", "Performance"],
    icon: Wrench,
  },
];

const ServicesList = () => {
  return (
    <section
      id="services-list"
      className="px-5 py-16 sm:px-10 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">

        <div className="mb-12 max-w-2xl">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-blue-500">
            What I Offer
          </span>

          <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
            Services built around your needs.
          </h2>

          <p className="mt-5 text-sm leading-7 opacity-65 sm:text-base">
            From frontend interfaces to complete web applications,
            I focus on building practical digital solutions.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesList;