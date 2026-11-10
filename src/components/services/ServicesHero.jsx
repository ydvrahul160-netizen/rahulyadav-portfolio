import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

const ServicesHero = () => {
  return (
    <section className="relative overflow-hidden px-5 pb-16 pt-28 sm:px-10 sm:pb-24 sm:pt-36">

      <div className="mx-auto max-w-6xl">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-sm font-medium uppercase tracking-[0.25em] text-blue-500">
            My Services
          </span>

          <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Building digital
            <span className="text-blue-500"> experiences</span>
            <br />
            that make an impact.
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 opacity-65 sm:text-lg">
            I build modern web applications and digital experiences
            with a focus on clean code, thoughtful design,
            and practical solutions.
          </p>

          <a
            href="#services-list"
            className="mt-9 inline-flex items-center gap-3 rounded-full border border-[var(--border)] px-6 py-3 text-sm font-medium transition-all hover:border-blue-500 hover:text-blue-500"
          >
            Explore Services
            <ArrowDownRight size={18} />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default ServicesHero;