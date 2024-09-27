import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import DescribeTheRecipeImg from "../../assets/DescribeTheRecipeImg.svg";
import AddRecipieBanner from "./AddRecipieBanner";
import { ImCancelCircle } from "react-icons/im";

const DescribeTheRecipe = ({ setActiveForm }) => {
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState([
    { value: "", isError: false },
  ]);
  const [errorMessage, setErrorMessage] = useState("");
  const minLength = 500;
  const maxLength = 10000;

  const charCount = description.replace(/<[^>]+>/g, "").length;

  const addIngredientField = () => {
    const lastIngredient = ingredients[ingredients.length - 1];

    if (lastIngredient.value.trim() === "") {
      setErrorMessage(
        "Please fill out the previous ingredient before adding a new one."
      );
      return;
    }

    setErrorMessage("");
    setIngredients([...ingredients, { value: "", isError: false }]);
  };

  const handleIngredientChange = (index, value) => {
    const newIngredients = [...ingredients];
    newIngredients[index].value = value;
    newIngredients[index].isError = value.trim() === "";
    setIngredients(newIngredients);
  };

  const removeIngredientField = (index) => {
    const newIngredients = ingredients.filter((_, i) => i !== index);
    setIngredients(newIngredients);
  };

  return (
    <div>
      <AddRecipieBanner
        title="Describe the recipe"
        img={DescribeTheRecipeImg}
      />
      <div className="recipeContainer mt-5">
        <div>
          <h3 className="text-xl font-semibold mb-3">Recipe Description</h3>
          <ReactQuill
            value={description}
            onChange={setDescription}
            placeholder="Write your recipe description here..."
          />
          <div className="mt-2 flex justify-between flex-wrap">
            <span className="text-lightGray text-[14px]">
              Minimum {minLength} characters required.
            </span>
            <span className="text-lightGray text-[14px]">
              Character Count: {charCount}/{maxLength}
            </span>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-3">Recipe Ingredients</h3>
          <div className="flex flex-col gap-3">
            {ingredients.map((ingredient, index) => (
              <InputField
                key={index}
                index={index}
                value={ingredient.value}
                isError={ingredient.isError}
                onChange={handleIngredientChange}
                onRemove={removeIngredientField}
              />
            ))}
          </div>
          <div>
            {errorMessage && (
              <span className="text-red-500 text-sm">{errorMessage}</span>
            )}
          </div>
          <button className="previousButton mt-2" onClick={addIngredientField}>
            Add New Ingredient
          </button>
        </div>

        <div className="flex gap-2 mt-5">
          <button
            className="previousButton"
            onClick={() => setActiveForm("AddCookingTime")}
          >
            Previous
          </button>
          <button
            className="nextButton"
            disabled={charCount < minLength || charCount > maxLength}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

const InputField = ({ index, value, isError, onChange, onRemove }) => {
  return (
    <div className="flex flex-row justify-center items-center gap-2">
      <div
        className={`w-full px-3 py-2 border-[1px] ${
          isError ? "border-red-500" : "border-gray-400"
        } rounded-md`}
      >
        <input
          type="text"
          placeholder="1 Tablespoon ground coriander"
          className="w-full outline-none"
          value={value}
          onChange={(e) => onChange(index, e.target.value)}
        />
      </div>
      <ImCancelCircle
        className="text-xl text-primary cursor-pointer"
        onClick={() => onRemove(index)}
      />
    </div>
  );
};

export default DescribeTheRecipe;
