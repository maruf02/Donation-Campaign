import React, { useEffect, useState } from "react";
import Card from "../Card/Card";

const AllCards = ({ searchText }) => {
  const [cards, setCards] = useState([]);
  console.log("object", searchText);
  const [displayCard, setDisplayCard] = useState([]);

  // if (searchText === "Health") {
  //   const healthcard = cards.filter((card) => card.category === "Health");
  //   setCards(healthcard);
  // }
  useEffect(() => {
    fetch("CardData.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
    // .then((data) => setDisplayCard(data));
  }, []);
  return (
    <div className="container mx-auto mt-16  grid grid-cols-4 gap-20">
      {cards.map((card) => (
        <Card key={card.id} card={card}></Card>
      ))}
    </div>
  );
};

export default AllCards;
