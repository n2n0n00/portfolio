/* eslint-disable react/prop-types */

const ExperienceCard = ({ name, date, description }) => {
  return (
    <div className="card h-[250px] w-[350px] max-[770px]:w-[300px]">
      <div className="m-3 flex flex-col gap-4">
        <div className="flex flex-col">
          <div className="date_experience">{date}</div>

          <h3 className="h4_bold">{name}</h3>
        </div>
        <p className="paragraph_white flex flex-wrap">{description}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
