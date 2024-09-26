import React from "react";
import RecipieCard from "../cards/RecipieCard";

const RecipiesFromConnection = () => {
  return (
    <div>
      <h3 className="text-xl font-bold">Recipies From Connection</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        <RecipieCard />
        <RecipieCard />
        <RecipieCard />
        <RecipieCard />
        <RecipieCard />
        <RecipieCard />
        <RecipieCard />
        <RecipieCard />
        <RecipieCard />
        <RecipieCard />
      </div>
    </div>
  );
};

export default RecipiesFromConnection;
