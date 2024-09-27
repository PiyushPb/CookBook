import AddRecipeBanner from "./AddRecipieBanner";
import CookingTime from "../../assets/CookingTime.svg";

const AddCookingTime = ({ setActiveForm }) => {
  return (
    <div>
      <AddRecipeBanner title="Add Cooking Details" img={CookingTime} />
      <div className="recipeContainer mt-5">
        <p className="my-5 text-lightGray text-[14px]">
          Please specify the time in minutes, and all the{" "}
          <span className="text-primary font-bold">*</span> marked feilds are
          compulsory to fill.
        </p>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col md:flex-row justify-between items-center w-full gap-5">
            <InputField label="Prep time" placeholder="Enter prep time" />
            <InputField label="Cook time" placeholder="Enter cook time" />
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center w-full gap-5">
            <InputField label="Wait time" placeholder="Enter wait time" />
            <InputField label="Total time" placeholder="Enter total time" />
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center w-full gap-5">
            <InputField
              label="Servings"
              placeholder="Enter servings"
              time={false}
            />
          </div>
        </div>
        <div className="flex gap-2">
          <button
            className="previousButton"
            onClick={() => setActiveForm("AddImageForm")}
          >
            Previous
          </button>
          <button
            className="nextButton"
            onClick={() => setActiveForm("DescribeTheRecipe")}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

const InputField = ({ label, placeholder, time }) => {
  return (
    <div className="w-full">
      <p className="font-semibold text-[14px]">
        {label} <span className="text-primary font-bold">*</span>
      </p>
      <div className="w-full border-[1px] border-gray-300 px-4 py-3 mt-1 flex justify-center items-center rounded-md">
        <input
          type="text"
          className="w-full outline-none focus:outline-none"
          placeholder={placeholder}
        />
        {time !== false && <label className="text-gray-500">min</label>}
      </div>
    </div>
  );
};

export default AddCookingTime;
