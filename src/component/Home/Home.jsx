import React from "react";
import Header from "../Header/Header";
import AllCards from "../AllCards/AllCards";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <AllCards></AllCards>
    </div>
  );
};

export default Home;
