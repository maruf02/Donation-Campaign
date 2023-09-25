import React, { useEffect, useState } from "react";
import Card from "../Card/Card";

const AllCards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("CardData.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
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
