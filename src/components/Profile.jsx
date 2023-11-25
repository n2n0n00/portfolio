import { homepage } from "../assets/images";

const Profile = () => {
  return (
    <div className="h-full w-full">
      <div className="hero_image_container hero_image_container_media">
        <div className="hero_image top-14 flex flex-col justify-center">
          <img src={homepage} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
