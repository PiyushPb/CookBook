import { RiImageAddLine } from "react-icons/ri";
import { TbMoodEdit } from "react-icons/tb";
import { FiExternalLink } from "react-icons/fi";
import RecipieCard from "../components/cards/RecipieCard";

const ProfilePage = () => {
  return (
    <div>
      <ProfileBanner
        thumbnailUrl={
          "https://images.unsplash.com/photo-1725034408642-a3a0ecefd94e"
        }
      />
      <ProfileSection />
    </div>
  );
};

const ProfileBanner = ({ thumbnailUrl }) => {
  return (
    <div className="w-full h-[300px] bg-gray-900 flex justify-center items-center overflow-hidden">
      {thumbnailUrl ? (
        <img
          src={thumbnailUrl}
          alt="Profile cover"
          className="w-full h-full object-cover object-center"
        />
      ) : (
        <div className="flex flex-col gap-1 justify-center items-center">
          <RiImageAddLine className="text-white text-4xl" aria-hidden="true" />
          <span className="text-white text-[20px] font-semibold">
            Add a cover image
          </span>
        </div>
      )}
    </div>
  );
};

const ProfileSection = () => {
  return (
    <section className="w-full min-h-screen p-5 xl:p-10 relative flex gap-10 flex-col xl:flex-row">
      {/* Left section */}
      <div className="w-full xl:w-[25%] h-fit bg-white p-5 xl:p-10 z-1 rounded-xl shadow-xl xl:sticky top-10">
        <UserProfile />
        <UserLinks />
      </div>
      <div className="h-fit w-70%">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
          <RecipieCard />
          <RecipieCard />
          <RecipieCard />
          <RecipieCard />
          <RecipieCard />
          <RecipieCard />
          <RecipieCard />
          <RecipieCard />
          <RecipieCard />
        </div>
      </div>
    </section>
  );
};

const UserProfile = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-3">
      {/* Profile image */}
      <div className="w-[150px] h-[150px] rounded-full overflow-hidden">
        <img
          src="https://imgv3.fotor.com/images/blog-richtext-image/10-profile-picture-ideas-to-make-you-stand-out.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-center">
        {/* name */}
        <p className="text-xl font-semibold">Piyush Pardeshi</p>
        {/* username */}
        <p className="text-md text-lightGray">@piyush</p>
      </div>
      <div>
        <button className="w-full bg-primary text-white px-5 py-2 rounded-xl hover:bg-primary/80 duration-300 transition-colors flex flex-row gap-3 justify-center items-center">
          <TbMoodEdit className="text-xl" />
          Edit profile
        </button>
      </div>
    </div>
  );
};

const UserLinks = () => {
  return (
    <div className="mt-5">
      <h4 className="font-semibold">Links</h4>
      <div className="border-[1px] border-gray-300 rounded-xl mt-3">
        <ul>
          <li className="px-5 py-4 flex justify-between items-center hover:bg-gray-100 duration-200 transition-colors cursor-pointer border-b-[1px]">
            <span>Facebook</span>
            <FiExternalLink />
          </li>
          <li className="px-5 py-4 flex justify-between items-center hover:bg-gray-100 duration-200 transition-colors cursor-pointer border-b-[1px]">
            <span>Facebook</span>
            <FiExternalLink />
          </li>
          <li className="px-5 py-4 flex justify-between items-center hover:bg-gray-100 duration-200 transition-colors cursor-pointer">
            <span>Facebook</span>
            <FiExternalLink />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfilePage;
