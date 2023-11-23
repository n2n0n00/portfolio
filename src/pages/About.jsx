/* eslint-disable array-callback-return */
import { ExperienceCard, SkillsBar, SkillsCard } from "../components/index.js";
import { experience, skillBar, skills } from "../constants/index.js";
import { FaSearch } from "react-icons/fa";
import { TbBrandAirtable } from "react-icons/tb";
import { GrView } from "react-icons/gr";
import { IoBuild } from "react-icons/io5";

const About = () => {
  return (
    <div>
      <div className="m-20 flex flex-col items-center justify-center pb-[10%]">
        <div className="mb-[8%] flex flex-col items-center justify-center gap-8">
          <div>
            <h2 className="h2_bold">WHAT WE DO</h2>
          </div>
          <div className="red_bar" />
          <div>
            <p className="paragraph_white w-[500px] text-center max-md:w-[300px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-evenly gap-5">
          {skills.map((skill) => (
            <div key={skill.name}>
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
            </div>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
        </div>
        <div className="mt-5 flex flex-wrap justify-evenly gap-5">
          {experience.map((e) => (
            <div key={e.name}>
              <ExperienceCard
                date={e.date}
                name={e.name}
                description={e.description}
              />
            </div>
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
