import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const CardDetails = () => {
  const cards = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const card = cards.find((card) => card.id === idInt);
  //   console.log("title", card.title);
  const { picture, title, description, price } = card;
  return (
    <div>
      <div className="container mx-auto pt-12">
        <img
          src={picture}
          alt="Your Image"
          className="w-full h-[600px] rounded"
        />
        <div className="relative bg-[#32324a] bg-opacity-60 h-36 -top-36 rounded ">
          <button className="px-6 py-4 bg-lime-400 ml-10 mt-10 rounded">
            Donate ${price}
          </button>
        </div>
        <h1 className="relative -top-20 text-black">{title}</h1>
      </div>
    </div>
  );
};

export default CardDetails;
