import { PiChefHatBold } from "react-icons/pi";

const Logo = () => {
  return (
    <div className="flex flex-row items-center gap-2">
      <div className="p-2 bg-primary w-fit rounded-md">
        <PiChefHatBold className="text-2xl text-white" />
      </div>
      <p className="text-xl font-bold text-primary">ChefBook</p>
    </div>
  );
};

export default Logo;
