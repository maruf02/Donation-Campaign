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

  const filterCards = () => {
    if (searchText === "Health" || searchText === "health") {
      // Filter cards with category "clothing"
      const clothingCards = cards.filter((card) => card.category === "Health");
      setDisplayCard(clothingCards);
    } else if (searchText === "Education" || searchText === "education") {
      // Filter cards with category "clothing"
      const clothingCards = cards.filter(
        (card) => card.category === "Education"
      );
      setDisplayCard(clothingCards);
    } else if (searchText === "Clothing" || searchText === "clothing") {
      // Filter cards with category "clothing"
      const clothingCards = cards.filter(
        (card) => card.category === "Clothing"
      );
      setDisplayCard(clothingCards);
    } else if (searchText === "Food" || searchText === "ood") {
      // Filter cards with category "clothing"
      const clothingCards = cards.filter((card) => card.category === "Food");
      setDisplayCard(clothingCards);
    } else {
      // If searchText is not "clothing", show all cards
      setDisplayCard(cards);
    }
  };

  // Call the filterCards function whenever searchText changes
  useEffect(() => {
    filterCards();
  }, [searchText, cards]);

  return (
    <div className="container mx-auto mt-16  grid grid-cols-4 gap-20">
      {displayCard.map((card) => (
        <Card key={card.id} card={card}></Card>
      ))}
    </div>
  );
};

export default AllCards;
