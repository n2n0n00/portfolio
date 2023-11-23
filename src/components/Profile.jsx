import { image1 } from "../assets/images.js";

const Profile = () => {
  return (
    <div className="h-full w-full">
      <div className="hero_image_container hero_image_container_media">
        <div className="hero_image left-6 top-5">
          <img src={image1} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
