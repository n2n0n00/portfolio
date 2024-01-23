import ProjectCard from "../components/ProjectCard";
import { projects } from "../constants";

const Projects = () => {
  return (
    <div>
      <div className="m-20 flex flex-col items-center justify-center pt-[4%] max-md:mx-3">
        <div className="m-[8%] flex flex-col items-center justify-center gap-8">
          <div>
            <h2 className="h2_bold">SELECTED WORKS</h2>
          </div>
          <div className="red_bar" />
          <div>
            <p className="paragraph_white w-[500px] text-center max-md:w-[300px]">
              Elevating Digital Experiences, One Line of Code at a Time: A
              Showcase of Crafted Brilliance.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5 max-md:gap-10">
          {projects.map((item) => (
            <div key={item.name} className="my-8">
              <ProjectCard
                name={item.name}
                description={item.description}
                photo={item.photo}
                link={item.link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
