const AddRecipeBanner = ({ title, img }) => {
  return (
    <div className="w-full h-auto overflow-hidden bg-red-50 rounded-xl p-5 flex flex-col md:flex-row items-center shadow-xl">
      <div className="flex justify-center items-center w-full md:w-1/2">
        <p className="text-4xl md:text-5xl font-bold text-primary text-center">
          {title}
        </p>
      </div>
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={img}
          alt="Pizza Maker"
          className="max-w-full h-[300px] mt-10 md:mt-0"
        />
      </div>
    </div>
  );
};

export default AddRecipeBanner;
