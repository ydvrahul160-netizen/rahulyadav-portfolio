import { useEffect } from "react";
import { motion } from "motion/react";

const name = "RAHUL YADAV";

const particles = Array.from({ length: 35 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 2,
  duration: Math.random() * 4 + 4,
  delay: Math.random() * 3,
}));

const PortfolioIntro = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-white dark:bg-[#070b14]"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.08,
        filter: "blur(15px)",
      }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* Particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <motion.span
            key={particle.id}
            className="absolute rounded-full bg-blue-400 dark:bg-blue-300"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              boxShadow: "0 0 12px rgba(96,165,250,0.8)",
            }}
            animate={{
              x: [-15, 15, -15],
              y: [-20, 20, -20],
              opacity: [0.1, 0.8, 0.1],
              scale: [0.7, 1.5, 0.7],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Glow behind name */}
      <motion.div
        className="absolute w-[500px] h-[300px] rounded-full bg-blue-500/10 dark:bg-purple-500/10 blur-[100px]"
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* NAME */}
      <div className="relative z-10 flex justify-center overflow-hidden px-4">
        {name.split("").map((letter, index) => (
          <motion.span
            key={index}
            className="
  inline-block
  font-['Great_Vibes']
  text-6xl sm:text-7xl md:text-8xl lg:text-9xl
  text-gray-900 dark:text-white
"
            initial={{
              opacity: 0,
              y: index % 2 === 0 ? 120 : -120,
              x: index % 3 === 0 ? -80 : index % 3 === 1 ? 80 : 0,
              rotate: index % 2 === 0 ? -25 : 25,
              scale: 1.8,
              filter: "blur(20px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              x: 0,
              rotate: 0,
              scale: 1,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 1,
              delay: 0.2 + index * 0.09,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default PortfolioIntro;
