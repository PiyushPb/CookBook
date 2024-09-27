import React from "react";
import Hero from "../components/home/Hero";
import RecipiesFromConnection from "../components/home/RecipiesFromConnection";
import MostPopularRecipies from "../components/home/MostPopularRecipies";

const Home = () => {
  return (
    <main className="p-5">
      <Hero />
      <RecipiesFromConnection />
      <MostPopularRecipies />
    </main>
  );
};

export default Home;
