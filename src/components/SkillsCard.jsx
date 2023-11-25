/* eslint-disable react/prop-types */

const SkillsCard = ({ name, icon, description }) => {
  return (
    <div className="card h-[280px] w-[300px]">
      <div className="m-3 flex flex-col gap-4">
        <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#8a9df9]">
          {icon}
        </div>

        <h3 className="h4_bold">{name}</h3>
        <p className="paragraph_white flex flex-wrap">{description}</p>
      </div>
    </div>
  );
};

export default SkillsCard;
