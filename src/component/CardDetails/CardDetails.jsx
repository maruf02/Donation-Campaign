import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getStoreDonate, saveDonate } from "../../utility/localStorage";

const CardDetails = () => {
  const cards = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const card = cards.find((card) => card.id === idInt);
  //   console.log("title", card.title);
  const { picture, title, description, price, color_for_text_button_bg } = card;

  const btnStyle = {
    backgroundColor: color_for_text_button_bg,
  };

  const handleDonate = () => {
    saveDonate(idInt);
    toast("Successfully Donated!!");
  };

  return (
    <div>
      <div className="container mx-auto pt-12">
        <img
          src={picture}
          alt="Your Image"
          className="w-screen h-[600px] rounded"
        />
        <div className="relative bg-[#32324a] bg-opacity-60 h-36 -top-36 rounded ">
          <button
            onClick={handleDonate}
            className="px-6 py-4  ml-10 mt-10 rounded text-white"
            style={btnStyle}
          >
            Donate ${price}
          </button>
        </div>
        <h1 className="relative -top-20 text-black text-3xl">{title}</h1>
        <h2 className="relative -top-16 text-black pb-20 ">{description}</h2>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CardDetails;
