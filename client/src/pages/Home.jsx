import React from "react";
import Hero from "../components/home/Hero";
import RecipiesFromConnection from "../components/home/RecipiesFromConnection";
import MostPopularRecipies from "../components/home/MostPopularRecipies";

const Home = () => {
  return (
    <main>
      <Hero />
      <RecipiesFromConnection />
      <MostPopularRecipies />
    </main>
  );
};

export default Home;
