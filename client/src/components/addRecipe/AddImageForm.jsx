import { FaUpload } from "react-icons/fa"; // Import the upload icon
import PizzaMaker from "../../assets/PizzaMaker.svg";
import AddRecipieBanner from "./AddRecipieBanner";

const AddImageForm = ({ setActiveForm }) => {
  return (
    <div>
      <AddRecipieBanner title="Add Recipe" img={PizzaMaker} />
      <div className="recipeContainer mt-5">
        <div className="w-full h-[400px] border-[2px] border-dashed border-gray-300 flex flex-col items-center justify-center">
          <FaUpload className="text-4xl text-gray-400 mb-2" />
          <p className="text-gray text-lg mt-2">Upload or drag and drop here</p>
        </div>
        <div>
          <button
            className="nextButton"
            onClick={() => setActiveForm("AddCookingTime")}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddImageForm;
