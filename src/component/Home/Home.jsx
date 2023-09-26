import React, { useState } from "react";
import Header from "../Header/Header";
import AllCards from "../AllCards/AllCards";

const Home = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <div>
      <Header setSearchText={setSearchText}></Header>
      <AllCards searchText={searchText}></AllCards>
    </div>
  );
};

export default Home;
