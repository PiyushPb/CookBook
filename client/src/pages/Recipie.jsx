import React from "react";
import "../styles/App.css";
import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import {
  FaStar,
  FaStarHalfStroke,
  FaRegStar,
  FaInstagram,
} from "react-icons/fa6";
import { IoMdHeartEmpty } from "react-icons/io";
import { FiDownload } from "react-icons/fi";
import { GoShareAndroid, GoCopy } from "react-icons/go";
import { FaTwitter, FaFacebookF, FaWhatsapp } from "react-icons/fa";

const shareLink = "https://example.com";

const Recipe = () => {
  return (
    <main className="flex flex-col md:flex-row justify-between max-w-[1400px] mx-auto min-h-screen">
      <section className="w-full md:max-w-[60%] xl:max-w-[70%] p-5 flex flex-col gap-5 h-fit">
        <RecipeHeader />
        <RecipeFeatures />
        <RecipeContainer />
      </section>
      <section className="w-full md:max-w-[40%] xl:max-w-[30%] h-fit pt-0 md:pt-5 p-5 sticky top-0 flex flex-col-reverse md:flex-col gap-5">
        <RecipeButtons />
        <div className="flex flex-col gap-5">
          <RecipeIngredients />
          <RecipeNutrition />
          <RecipeAdditionTips />
        </div>
      </section>
    </main>
  );
};
// Left container
const RecipeHeader = () => {
  return (
    <div className="recipeContainer">
      <h2 className="text-2xl font-bold">
        Creamy sazon skillet chicken with fusion of garden fresh veggies
      </h2>
      <div className="w-full h-fit overflow-hidden rounded-lg mt-5">
        <img
          src="https://images.unsplash.com/photo-1719937206255-cc337bccfc7d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div className="mt-5 flex flex-col-reverse xl:flex-row justify-between xl:items-center">
        <div className="flex justify-start items-center gap-2">
          <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
            <img
              src="https://xsgames.co/randomusers/avatar.php?g=male"
              alt=""
              className="object-cover object-center"
            />
          </div>
          <div>
            <h3 className="text-text text-[14px] font-semibold">
              Piyush Pardeshi
            </h3>
            <span className="text-[14px] text-lightGray">
              Posted on 26 Sept 2024
            </span>
          </div>
          <div>
            <Button
              variant="outlined"
              className="text-[14px] font-semibold text-primary outline-none border-primary normal-case"
            >
              Follow
            </Button>
          </div>
        </div>

        <div className="flex gap-1 mb-5 xl:mb-0">
          <div className="px-3 py-1 rounded-md bg-primary/10 w-fit">
            <span className="text-primary text-[14px] font-semibold">
              15 Reviews
            </span>
          </div>
          <div className="px-3 py-1 rounded-md bg-primary/10 w-fit">
            <div className="flex justify-start items-center gap-2">
              <div className="flex flex-row items-center gap-0.5">
                <FaStar className="text-primary" />
                <FaStar className="text-primary" />
                <FaStar className="text-primary" />
                <FaStarHalfStroke className="text-primary" />
                <FaRegStar className="text-primary" />
              </div>
              <span className="text-primary text-[14px] font-semibold">
                (3.5)
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const RecipeFeatures = () => {
  const features = [
    { label: "Prep Time", value: "10 Min" },
    { label: "Cook Time", value: "20 Min" },
    { label: "Total Time", value: "30 Min" },
    { label: "Servings", value: "4" },
    { label: "Calories", value: "250" },
  ];

  return (
    <div className="recipeContainer flex flex-wrap justify-between">
      {features.map((feature, index) => (
        <div key={index} className={`flex-1 min-w-[150px] p-4`}>
          <h4 className="text-primary font-bold text-[14px]">
            {feature.label} :
          </h4>
          <span className="text-text font-semibold text-[14px]">
            {feature.value}
          </span>
        </div>
      ))}
    </div>
  );
};

const RecipeContainer = () => {
  return (
    <div className="recipeContainer">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque quidem
      voluptatem officiis accusamus consequuntur illo sint architecto optio, ut,
      impedit ab minus inventore porro earum laboriosam deserunt, nesciunt
      minima molestiae?
    </div>
  );
};

//Right container

const RecipeButtons = () => {
  const shareOnPlatform = (platform) => {
    let url = "";
    switch (platform) {
      case "twitter":
        url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
          shareLink
        )}`;
        break;
      case "whatsapp":
        url = `https://api.whatsapp.com/send?text=${encodeURIComponent(
          shareLink
        )}`;
        break;
      case "instagram":
        url = `instagram://share?text=${encodeURIComponent(shareLink)}`;
        break;
      case "facebook":
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          shareLink
        )}`;
        break;
      case "copyUrl":
        navigator.clipboard
          .writeText(shareLink)
          .then(() => {
            alert("Link copied to clipboard!");
          })
          .catch((err) => {
            console.error("Failed to copy: ", err);
          });
        return; // Exit the function after copying
      default:
        return;
    }
    window.open(url, "_blank");
  };

  return (
    <div className="flex gap-2">
      <button className="flex justify-center items-center gap-2 bg-white rounded-md shadow-lg px-4 py-3 w-full">
        <IoMdHeartEmpty className="text-[20px]" />
        <span className="text-[16px]">Like</span>
      </button>
      <button className="flex justify-center items-center gap-2 bg-white rounded-md shadow-lg px-4 py-3 w-full">
        <FiDownload className="text-[20px]" />
        <span className="text-[16px]">Download</span>
      </button>
      <Menu>
        <MenuHandler>
          <button className="flex justify-center items-center gap-2 bg-white rounded-md shadow-lg px-4 py-3 w-full">
            <GoShareAndroid className="text-[20px]" />
            <span className="text-[16px]">Share</span>
          </button>
        </MenuHandler>
        <MenuList>
          <MenuItem onClick={() => shareOnPlatform("twitter")}>
            <div className="flex gap-2 justify-start items-center">
              <FaTwitter /> Twitter
            </div>
          </MenuItem>
          <MenuItem onClick={() => shareOnPlatform("whatsapp")}>
            <div className="flex gap-2 justify-start items-center">
              <FaWhatsapp /> WhatsApp
            </div>
          </MenuItem>
          <MenuItem onClick={() => shareOnPlatform("instagram")}>
            <div className="flex gap-2 justify-start items-center">
              <FaInstagram /> Instagram
            </div>
          </MenuItem>
          <MenuItem onClick={() => shareOnPlatform("facebook")}>
            <div className="flex gap-2 justify-start items-center">
              <FaFacebookF /> Facebook
            </div>
          </MenuItem>
          <hr className="my-3" />
          <MenuItem onClick={() => shareOnPlatform("copyUrl")}>
            <div className="flex gap-2 justify-start items-center">
              <GoCopy /> Copy Url
            </div>
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

const RecipeIngredients = () => {
  return (
    <div className="recipeContainer">
      <h3 className="text-xl font-semibold mb-3">Recipie Ingredients</h3>
      <ul className="list-outside list-disc ml-6 flex flex-col gap-3 text-[14px]">
        <li className="marker:text-primary text-text">
          1 TableSpoon ground coriander
        </li>
        <li className="marker:text-primary text-text">
          1 TableSpoon ground coriander
        </li>
        <li className="marker:text-primary text-text">
          1 TableSpoon ground coriander
        </li>
        <li className="marker:text-primary text-text">
          1 TableSpoon ground coriander
        </li>
        <li className="marker:text-primary text-text">
          1 TableSpoon ground coriander
        </li>
        <li className="marker:text-primary text-text">
          1 TableSpoon ground coriander
        </li>
        <li className="marker:text-primary text-text">
          1 TableSpoon ground coriander
        </li>
        <li className="marker:text-primary text-text">
          1 TableSpoon ground coriander
        </li>
        <li className="marker:text-primary text-text">
          1 TableSpoon ground coriander
        </li>
        <li className="marker:text-primary text-text">
          1 TableSpoon ground coriander
        </li>
      </ul>
    </div>
  );
};

const RecipeNutrition = () => {
  return (
    <div className="recipeContainer">
      <h3 className="text-xl font-semibold mb-3">Recipie Nutrition</h3>
      <ul className="flex flex-col gap-3 text-[14px]">
        <li className="text-text border-b-[1px] pb-2 border-lightGray/30 flex justify-between items-center">
          <span>Calories :</span>
          <p className="font-semibold text-primary">519</p>
        </li>
        <li className="text-text border-b-[1px] pb-2 border-lightGray/30 flex justify-between items-center">
          <span>Calories :</span>
          <p className="font-semibold text-primary">519</p>
        </li>
        <li className="text-text border-b-[1px] pb-2 border-lightGray/30 flex justify-between items-center">
          <span>Calories :</span>
          <p className="font-semibold text-primary">519</p>
        </li>
        <li className="text-text border-b-[1px] pb-2 border-lightGray/30 flex justify-between items-center">
          <span>Calories :</span>
          <p className="font-semibold text-primary">519</p>
        </li>
      </ul>
    </div>
  );
};

const RecipeAdditionTips = () => {
  return (
    <div className="recipeContainer">
      <h3 className="text-xl font-semibold mb-3">Additional Tip</h3>
      <p className="text-text text-[14px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor adipisci
        quisquam non expedita, dolorem quae nobis sit tenetur veritatis deserunt
        fugit eveniet sequi in, velit quasi voluptates laborum voluptas placeat.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut veniam
        itaque quasi optio cupiditate, enim commodi, est qui a ratione
        asperiores ipsam, blanditiis dolorum eius consequuntur iste praesentium
        animi corporis!
      </p>
    </div>
  );
};

export default Recipe;
