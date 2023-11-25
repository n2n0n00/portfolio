/* eslint-disable react/prop-types */
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const ProjectCard = ({ name, description, photo }) => {
  return (
    <div className="flex flex-row gap-4 max-md:gap-[4rem] max-sm:flex-col-reverse max-sm:items-center">
      <div className="flex flex-col gap-5">
        <h3 className="h4_bold w-[492px] max-md:w-full">{name}</h3>
        <p className="paragraph_white w-[472px] max-md:w-full">{description}</p>
        <a href="/">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
            <p className="flex cursor-pointer flex-row items-center gap-3 text-[#8a9df9]">
              See Details <FaArrowRight color="#8a9df9" />
            </p>
          </motion.div>
        </a>
      </div>
      <div>
        <div className="flex h-full w-full">
          <div className="project_image_container project_image_container_media">
            <div className="project_image">
              <img src={photo} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
