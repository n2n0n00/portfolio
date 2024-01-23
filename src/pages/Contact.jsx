import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Contact = () => {
  return (
    <div className="m-20 flex h-[239px] flex-row items-center justify-evenly rounded-xl bg-[#034558] max-[770px]:m-3 max-[770px]:h-full max-md:flex-col">
      <h1 className="h3_bold relative w-[460px] max-[770px]:m-3 max-[770px]:w-full max-[770px]:text-center">
        Discover How Design Can Help Your Business
      </h1>

      <div className="red_bar_contact relative m-3 " />
      <div className=" relative flex flex-col items-center justify-center max-[770px]:m-3 max-[770px]:w-full">
        <h3 className="h5_bold">Get In Touch With Me</h3>
        <p className="learn_more_text"></p>
        <p className="learn_more_text">athinat690@gmail.com</p>
        <div className="learn_more_text m-3 flex flex-row gap-4">
          <a href="https://github.com/n2n0n00">
            <FaGithub size={25} />
          </a>
          <a href="https://github.com/n2n0n00">
            <BiLogoGmail size={25} />
          </a>
          <a href="https://github.com/n2n0n00">
            <FaLinkedin size={25} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
