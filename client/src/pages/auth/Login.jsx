import Logo from "../../components/utils/Logo";
import { Input, Checkbox } from "@material-tailwind/react";
import { FcGoogle } from "react-icons/fc";
import { RiMetaLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Login = () => {
  return (
    <div className="w-full h-screen flex flex-row justify-between">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="max-w-[500px] w-full flex flex-col justify-center items-center gap-5">
          <Logo />
          <span className="text-2xl text-primary font-bold mt-5">
            Login to your account
          </span>
          <form className="flex flex-col gap-4 w-full">
            <div className="w-full">
              <Input
                label="Enter your email"
                type="email"
                required
                autoCorrect="off"
                autoComplete="new-email"
              />
            </div>
            <div className="w-full">
              <Input
                label="Password"
                type="password"
                required
                autoCorrect="off"
                autoComplete="new-password"
              />
            </div>
            <div className="w-full flex flex-row justify-between items-center">
              <Checkbox label="Remember me" color="red" />
              <p className="text-primary underline text-[12px]">
                Forgot password?
              </p>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-2 rounded-md transition duration-200 hover:bg-primary/80 hover:shadow-lg"
              >
                Login
              </button>
            </div>
          </form>
          <div className="w-full flex flex-row justify-center items-center">
            <div className="w-full border-t-[1px] border-gray-300"></div>
            <div className="w-full text-center">
              <span className="text-lightGray text-[14px]">
                or continue with
              </span>
            </div>
            <div className="w-full border-t-[1px] border-gray-300"></div>
          </div>
          <div className="flex flex-row gap-2 w-full">
            <button className="w-full border-[1px] border-gray-300 flex flex-row justify-center items-center gap-2 px-3 py-2 rounded-md transition duration-200 hover:bg-gray-200">
              <FcGoogle />
              Google
            </button>
            <button className="w-full border-[1px] border-gray-300 flex flex-row justify-center items-center gap-2 px-3 py-2 rounded-md transition duration-200 hover:bg-gray-200">
              <RiMetaLine />
              Facebook
            </button>
          </div>
          <p>
            Don't have an account?{" "}
            <span>
              <Link to={"/signup"} className="text-primary hover:underline">
                Sign Up
              </Link>
            </span>
          </p>
        </div>
      </div>
      <div className="w-full h-full p-10 justify-center items-center hidden xl:flex">
        <div className="w-full h-full max-w-[800px] overflow-hidden rounded-md">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay settings
            className="w-full h-full"
          >
            <SwiperSlide className="h-full relative">
              <div className="w-full h-full relative">
                <img
                  src="https://images.unsplash.com/photo-1603554593710-89285666b691?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90"></div>
                <p className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-4xl text-center max-w-xl w-full">
                  Discover delicious recipes daily
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide className="h-full relative">
              <div className="w-full h-full relative">
                <img
                  src="https://images.unsplash.com/photo-1517244683847-7456b63c5969?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90"></div>
                <p className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-4xl text-center max-w-xl w-full">
                  Explore new flavors every day
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide className="h-full relative">
              <div className="w-full h-full relative">
                <img
                  src="https://images.unsplash.com/photo-1544240790-eaadf65d012d?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90"></div>
                <p className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-4xl text-center max-w-xl w-full">
                  Savor exquisite dishes from around the world
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Login;
