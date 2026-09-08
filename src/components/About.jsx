import { motion } from "framer-motion";
import { aboutInfo } from "../assets/assets";
import myphoto from "../assets/myphoto.png";
import profileImg1 from "../assets/profileImg1.jpeg";
import ProfileCard from "./ProfileCard";

const About = () => {
  return (
    <section
      id="about"
      className=" bg-gray-100 dark:bg-[#080808] text-gray-900 dark:text-white px-3 sm:px-5 lg:px-8 py-16 sm:py-24 overflow-hidden"
    >
      <div className=" max-w-7xl mx-auto px-6 lg:px-10">
        {/****************************** HEADING **********************************/}
        <h2 className="theme-heading text-3xl font-bold text-center mb-4">
          About <span className="text-yellow-300">Me</span>
        </h2>
        <p className=" text-gray-400 text-center max-w-2xl mx-auto mb-10 md:mb-5">
          Get to know more about my background and passion
        </p>

        {/******************************** IMAGE + MY JOURNEY  **************************/}
        <div className="flex flex-col md:flex-row md:items-start items-center gap-4">
          {/* IMAGE */}
          <div className="hidden lg:block lg:w-2/5 xl:w-1/3">
            {/* <motion.img
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              viewport={{ once: false, amount: 0.2 }}
              src={myphoto}
              alt="img"
              className="w-full max-w-sm h-[420px] object-cover rounded-2xl mx-auto"
            /> */}
            <ProfileCard
              name="BCA Graduate"
              title="MERN Stack Developer"
              handle="rahulyadav"
              status="Available"
              contactText="Let's Talk"
              avatarUrl={profileImg1}
              showUserInfo
              enableTilt={true}
              enableMobileTilt
              behindGlowEnabled
              onContactClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              behindGlowColor="rgba(0, 120, 72, 0.5)"
              iconUrl="/iconpattern.png"
              innerGradient="linear-gradient(145deg,#00784855 0%,#71C4FF22 100%)"
            />
          </div>

          {/* TEXT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="w-full lg:w-3/5 xl:w-2/3"
          >
            <div className=" rounded-2xl p-4 md:p-6 max-w-3xl mx-auto text-center md:text-left">
              <h2 className="theme-heading text-3xl font-semibold mb-4">
                My Journey
              </h2>
              <p className="theme-muted text-gray-300 leading-7 max-w-xl">
                I'm Rahul Yadav, a BCA student and aspiring MERN Stack Developer
                passionate about building modern and user-friendly web
                applications. My journey started with HTML, CSS, and JavaScript,
                and gradually expanded to React.js, Node.js, Express.js, and
                MongoDB.
              </p>
              <p className="theme-muted text-gray-300 mb-8">
                technologies. I enjoy creating responsive interfaces, solving
                programming challenges, and exploring new technologies to
                improve my skills. Currently, I am focused on building
                real-world projects, strengthening my DSA knowledge, and
                preparing for software development opportunities.
              </p>

              {/* CARDS */}
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                  hidden: {},
                  show: {
                    transition: {
                      staggerChildren: 0.15,
                    },
                  },
                }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
              >
                {aboutInfo.map((data, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 + index * 0.2 }}
                    whileHover={{ rotate: 0, scale: 1.02 }}
                    className={`
                      relative theme-bg3 rounded-3xl border border-blue/30 p-6 hover:-translate-y-3 hover:shadow-[0_0_30px_rgba(59,130,246,.2)] transition-all duration-300 cursor-pointer group
                      ${index === 0 ? "rotate-[-4deg] md:-mt-6 shadow-xl" : ""}
                      ${index === 1 ? "rotate-[3deg] md:-mt-6 shadow-xl" : ""}
                      ${index === 2 ? "rotate-[-3deg] md:-mt-6 shadow-xl" : ""}
                     `}
                  >
                    <div className="text-sky-400 text-3xl sm:text-4xl mb-3 sm:mb-4 flex justify-center sm:justify-start">
                      <data.icon />
                    </div>

                    <h3 className="theme-heading text-xl font-semibold mb-3">
                      {data.title}
                    </h3>

                    <p className="text-gray-400">{data.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
