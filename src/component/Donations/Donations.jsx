import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoreDonate } from "../../utility/localStorage";
import DonateCard from "../DonateCard/DonateCard";

const Donations = () => {
  const donates = useLoaderData();
  const [haveDonate, setHaveDonate] = useState([]);
  const [allDonateData, setAllDonateData] = useState(4);

  useEffect(() => {
    const storedCardId = getStoreDonate();
    if (donates.length > 0) {
      const donated = donates.filter((donate) =>
        storedCardId.includes(donate.id)
      );
      // console.log(donated);
      setHaveDonate(donated);
    }
  }, []);

  console.log(haveDonate);
  return (
    <div className="container mx-auto mt-20">
      <div className="grid grid-cols-2 gap-10">
        {haveDonate.slice(0, allDonateData).map((card) => (
          <DonateCard key={card.id} card={card}></DonateCard>
        ))}
      </div>
      <div className={allDonateData >= haveDonate.length ? "hidden" : ""}>
        <div className="text-center mt-10 ">
          <button
            onClick={() => setAllDonateData(haveDonate.length)}
            className="px-7 py-3 bg-[#009444] text-white rounded-lg"
          >
            See All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Donations;
