import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import { getStoreDonate } from "../../utility/localStorage";

const Statistics = () => {
  const [cards, setCards] = useState([]);
  const [totalCards, setTotalCards] = useState(0);
  const [totalStoreCards, setTotalStoreCards] = useState(0);

  useEffect(() => {
    fetch("CardData.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
    // .then((data) => setDisplayCard(data));
  }, []);
  useEffect(() => {
    const storedCardId = getStoreDonate();
    setTotalStoreCards(storedCardId.length);
    const newCardLength = cards.length - storedCardId.length;
    setTotalCards(newCardLength);
  }, [cards]);

  // console.log(cards.length);
  // const totalCards = cards.length;
  // const storedCardId = getStoreDonate();
  // const totalStoreCards = storedCardId.length;

  const data = [
    ["Task", "Hours per Day"],
    ["Your Donation", totalStoreCards],
    ["Total Donation", totalCards],
  ];

  const options = {
    title: "My Daily Activities",
    legend: {
      position: "bottom",
    },
    colors: ["#00C49F", "#FF444A"],
  };

  return (
    <div>
      <h2>card length: {cards.length}</h2>
      <h2>donate Store Length:{totalStoreCards}</h2>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      />
    </div>
  );
};

export default Statistics;
