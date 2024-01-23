/* eslint-disable array-callback-return */
import { ExperienceCard, SkillsBar, SkillsCard } from "../components/index.js";
import { experience, skillBar, skills } from "../constants/index.js";
import { FaSearch } from "react-icons/fa";
import { TbBrandAirtable } from "react-icons/tb";
import { GrView } from "react-icons/gr";
import { IoBuild } from "react-icons/io5";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div>
      <div className="m-20 flex flex-col items-center justify-center pb-[10%]">
        <div className="mb-[8%] flex flex-col items-center justify-center gap-8">
          <div>
            <h2 className="h2_bold">WHAT I DO</h2>
          </div>
          <div className="red_bar" />
          <div>
            <p className="paragraph_white w-[500px] text-center max-md:w-[300px]">
              Embark on a journey with me as your digital guide, where I
              seamlessly blend creativity and precision across four key domains.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-evenly gap-7">
          {skills.map((skill) => (
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              key={skill.name}
            >
              <SkillsCard
                icon={
                  skill.icon === "FaSearch" ? (
                    <FaSearch color={skill.color} />
                  ) : skill.icon === "TbBrandAirtable" ? (
                    <TbBrandAirtable color={skill.color} />
                  ) : skill.icon === "GrView" ? (
                    <GrView color={skill.color} />
                  ) : skill.icon === "IoBuild" ? (
                    <IoBuild color={skill.color} />
                  ) : (
                    ""
                  )
                }
                name={skill.name}
                description={skill.description}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="m-20 flex flex-col items-center justify-center">
        <div className="mb-[8%] flex flex-col items-center justify-center gap-8">
          <div>
            <h2 className="h2_bold">EXPERIENCE & SKILLS</h2>
          </div>
          <div className="red_bar" />
          <div>
            <p className="paragraph_white w-[500px] text-center max-md:w-[300px]">
              In freelancing, I&apos;ve seamlessly woven together a tapestry of
              skills, specializing in web development, design, and digital
              marketing. Navigating global collaborations, I&apos;ve transformed
              abstract concepts into tangible digital solutions.
            </p>
          </div>
        </div>
        <div className="mt-5 flex flex-wrap justify-evenly gap-7">
          {experience.map((e) => (
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              key={e.name}
            >
              <ExperienceCard
                date={e.date}
                name={e.name}
                description={e.description}
              />
            </motion.div>
          ))}
        </div>
        <div className="mt-[10%] flex flex-wrap justify-evenly">
          {skillBar.map((skill) => (
            <div key={skill.name} className="mt-8">
              <SkillsBar extraClasses={skill.otherClasses} name={skill.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
