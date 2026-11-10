import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesCTA = () => {
  return (
    <section className="px-5 py-16 sm:px-10 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-blue-500/20 bg-blue-500/[0.05] px-6 py-16 text-center sm:px-12 sm:py-20"
      >
        <div className="relative z-10 mx-auto max-w-2xl">

          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-blue-500">
            <MessageCircle size={27} />
          </div>

          <span className="text-sm font-medium uppercase tracking-[0.2em] text-blue-500">
            Have a Project?
          </span>

          <h2 className="mt-5 text-3xl font-bold sm:text-5xl">
            Let's build something meaningful together.
          </h2>

          <p className="mt-5 text-sm leading-7 opacity-70 sm:text-base">
            Have an idea, a project, or a website in mind?
            Let's connect and discuss how we can bring it to life.
          </p>

          <Link
            to="/contact"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700"
          >
            Start a Conversation
            <ArrowUpRight size={18} />
          </Link>

        </div>
      </motion.div>
    </section>
  );
};

export default ServicesCTA;