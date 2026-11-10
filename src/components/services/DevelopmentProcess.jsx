import { motion } from "framer-motion";
import {
  Lightbulb,
  ClipboardList,
  Code2,
  Rocket,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Understanding",
    description:
      "Understanding your goals, requirements, and the problem your project needs to solve.",
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "Planning",
    description:
      "Planning the structure, features, technologies, and overall development approach.",
    icon: ClipboardList,
  },
  {
    number: "03",
    title: "Development",
    description:
      "Writing clean code, building features, and bringing the planned experience to life.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Testing & Delivery",
    description:
      "Testing functionality, fixing issues, and preparing the application for deployment.",
    icon: Rocket,
  },
];

const DevelopmentProcess = () => {
  return (
    <section className="px-5 py-16 sm:px-10 sm:py-24">
      <div className="mx-auto max-w-6xl">

        <div className="mb-14 max-w-2xl">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-blue-500">
            My Workflow
          </span>

          <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
            How I bring ideas to life.
          </h2>

          <p className="mt-5 text-sm leading-7 opacity-65 sm:text-base">
            Every project follows a structured process to keep
            development clear, organized, and focused on results.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                }}
                className="relative border-l border-[var(--border)] pl-6"
              >
                <span className="text-sm font-semibold text-blue-500">
                  {step.number}
                </span>

                <div className="my-5 inline-flex rounded-xl bg-blue-500/10 p-3 text-blue-500">
                  <Icon size={24} />
                </div>

                <h3 className="text-xl font-semibold">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 opacity-65">
                  {step.description}
                </p>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default DevelopmentProcess;