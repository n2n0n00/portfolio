/* eslint-disable react/prop-types */
const SkillsBar = ({ extraClasses, name }) => {
  return (
    <div className="flex flex-col justify-start gap-2">
      <div>
        <p className="text-white">{name}</p>
      </div>
      <div className="h-[20px] w-[570px] bg-[#004e63] max-md:w-[370px] max-sm:w-[270px]">
        <div className={`h-[20px] ${extraClasses} bg-[#8a9df9]`}></div>
      </div>
    </div>
  );
};

export default SkillsBar;
