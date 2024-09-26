import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Slide data
const slides = [
  {
    src: "https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22",
    text: "<span class='text-red-500'>Discover delicious</span> recipes daily",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1700752343056-e89926bf5ff9",
    text: "Explore new <span class='text-red-500'>flavors</span> every day",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1701007201981-918b53b2fd4e",
    text: "Savor exquisite <span class='text-red-500'>dishes</span> from around the world",
  },
];

const Hero = () => {
  return (
    <section className="w-full mb-5 bg-gray-200">
      <div className="w-full h-[600px] md:h-[500px] overflow-hidden rounded-md">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay settings
          className="w-full h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="h-full relative">
              <div className="w-full h-full relative">
                <img
                  src={slide.src}
                  alt=""
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <p
                  className="absolute bottom-4 md:left-5 transform text-white text-4xl lg:text-7xl max-w-2xl w-full z-10 p-5 font-semibold"
                  dangerouslySetInnerHTML={{ __html: slide.text }}
                ></p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;
