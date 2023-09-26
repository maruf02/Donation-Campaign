import React, { useState } from "react";
import Header from "../Header/Header";
import AllCards from "../AllCards/AllCards";
import Banner from "../Banner/Banner";

const Home = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <div>
      <Header setSearchText={setSearchText}></Header>
      <Banner></Banner>
      <AllCards searchText={searchText}></AllCards>
    </div>
  );
};

export default Home;
