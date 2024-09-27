import { act, useState } from "react";
import AddImageForm from "../components/addRecipe/AddImageForm";
import AddCookingTime from "../components/addRecipe/AddCookingTime";
import DescribeTheRecipe from "../components/addRecipe/DescribeTheRecipe";

const AddRecipe = () => {
  const [activeForm, setActiveForm] = useState("AddImageForm");

  return (
    <div className="max-w-[900px] mx-auto p-5">
      {activeForm === "AddImageForm" && (
        <AddImageForm setActiveForm={setActiveForm} />
      )}
      {activeForm === "AddCookingTime" && (
        <AddCookingTime setActiveForm={setActiveForm} />
      )}
      {activeForm === "DescribeTheRecipe" && (
        <DescribeTheRecipe setActiveForm={setActiveForm} />
      )}
    </div>
  );
};

export default AddRecipe;
