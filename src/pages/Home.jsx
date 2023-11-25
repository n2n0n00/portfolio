import { Profile } from "../components/index";

const Home = () => {
  return (
    <div className="flex h-full w-full flex-col">
      <div className="logo m-20 max-[770px]:m-10">
        DEV<span className="text-[#8a9df9]">ELOPER</span>.
      </div>
      <div className="mx-20 mb-20 flex flex-row items-center justify-between max-[1230px]:m-10 max-[825px]:m-4 max-[825px]:flex-col-reverse max-[825px]:items-center">
        <div className="flex flex-col gap-12 max-[825px]:mt-8">
          <div className="flex flex-col justify-evenly gap-4">
            <p className="hero_text_red ">Hi, I&apos;m Athena</p>

            <h1 className="h1_bold w-[600px] max-[825px]:w-full">
              Front End and Occasional Back End Developer
            </h1>
            <p className="hero_text_white w-[600px] max-[825px]:w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit mattis.
            </p>
          </div>
        </div>

        <div className="flex flex-row items-center justify-center">
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default Home;
