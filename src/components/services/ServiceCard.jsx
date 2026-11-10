import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service, index }) => {
  const Icon = service.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group rounded-2xl border border-[var(--border)] bg-[var(--card)] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50"
    >
      <div className="flex items-center justify-between">

        <div className="rounded-xl bg-blue-500/10 p-3 text-blue-500">
          <Icon size={25} />
        </div>

        <span className="text-sm opacity-40">
          0{index + 1}
        </span>

      </div>

      <h3 className="mt-7 text-2xl font-semibold">
        {service.title}
      </h3>

      <p className="mt-4 text-sm leading-7 opacity-65">
        {service.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {service.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full border border-[var(--border)] px-3 py-1.5 text-xs opacity-75"
          >
            {technology}
          </span>
        ))}
      </div>

      <Link
        to={`/contact?service=${encodeURIComponent(service.title)}`}
        className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-blue-500 transition-all hover:gap-3"
      >
        Discuss a Project
        <ArrowUpRight size={17} />
      </Link>

    </motion.article>
  );
};

export default ServiceCard;