import {
  FaStar,
  FaStarHalfStroke,
  FaRegStar,
  FaRegHeart,
} from "react-icons/fa6";

import { IoMdAlarm } from "react-icons/io";
import { LuLeaf } from "react-icons/lu";
import { BiCategory } from "react-icons/bi";

const RecipieCard = () => {
  return (
    <div className="max-w-[450px] w-full p-4 rounded-xl bg-white shadow-lg hover:shadow-xl hover:scale-[1.02] duration-300 cursor-pointer">
      <div className="relative">
        <div className="w-full h-[200px] overflow-hidden rounded-md mb-1">
          <img
            src="https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22"
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="absolute bottom-3 right-3 p-2 bg-white rounded-full">
          <FaRegHeart className="text-primary text-[18px]" />
        </div>
      </div>
      <span className="text-[14px] text-lightGray">By Piyush Pardeshi</span>
      <h2 className="text-xl font-bold">Creamy Sazib Skillet Paneer</h2>
      <div className="flex justify-start items-center gap-2">
        <div className="flex flex-row items-center gap-0.5">
          <FaStar className="text-primary" />
          <FaStar className="text-primary" />
          <FaStar className="text-primary" />
          <FaStarHalfStroke className="text-primary" />
          <FaRegStar className="text-primary" />
        </div>
        <span className="text-[14px] text-lightGray">(3.5)</span>
      </div>
      <div className="mt-2 flex gap-4 flex-wrap">
        <div className="px-3 py-2 bg-primary/10 w-fit rounded-full flex flex-row items-center justify-center gap-1">
          <IoMdAlarm className="text-primary text-[18px]" />
          <span className="text-primary text-[14px]">25 min</span>
        </div>
        <div className="px-3 py-2 bg-primary/10 w-fit rounded-full flex flex-row items-center justify-center gap-1">
          <LuLeaf className="text-primary text-[18px]" />
          <span className="text-primary text-[14px]">11 Ingredients</span>
        </div>
        <div className="px-3 py-2 bg-primary/10 w-fit rounded-full flex flex-row items-center justify-center gap-1">
          <BiCategory className="text-primary text-[18px]" />
          <span className="text-primary text-[14px]">Meal</span>
        </div>
      </div>
    </div>
  );
};

export default RecipieCard;
