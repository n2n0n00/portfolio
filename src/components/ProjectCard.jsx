/* eslint-disable react/prop-types */
import { FaArrowRight } from "react-icons/fa";

const ProjectCard = ({ name, description, photo }) => {
  return (
    <div className="flex flex-row gap-4 max-md:gap-[4rem] max-sm:flex-col-reverse max-sm:items-center">
      <div className="flex flex-col gap-5">
        <h3 className="h4_bold w-[492px] max-md:w-full">{name}</h3>
        <p className="paragraph_white w-[472px] max-md:w-full">{description}</p>
        <a href="/">
          <p className="flex cursor-pointer flex-row items-center gap-3 text-[#F50D32]">
            See Details <FaArrowRight color="#F50D32" />
          </p>
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
