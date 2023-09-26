import React from "react";
import { Link } from "react-router-dom";

const DonateCard = ({ card }) => {
  const {
    id,
    picture,
    category,
    title,
    price,
    color_for_card_bg,
    color_for_category_bg,
    color_for_text_button_bg,
  } = card;

  const cardStyle = {
    backgroundColor: color_for_card_bg,
  };
  const cardStyleText = {
    color: color_for_text_button_bg,
  };
  const cardStyleCategoryBg = {
    backgroundColor: color_for_category_bg,
  };
  const btnStyle = {
    backgroundColor: color_for_text_button_bg,
  };
  return (
    <div
      className="w-fit md:w-[600px]  shadow-xl flex flex-col md:flex-row ml-10 "
      style={cardStyle}
    >
      <div>
        <figure>
          <img src={picture} alt="" className="w-52 h-48" />
        </figure>
      </div>
      <div className="card-body">
        <div className="px-3  w-fit rounded-md" style={cardStyleCategoryBg}>
          <p className="text-center  justify-center" style={cardStyleText}>
            {category}
          </p>
        </div>
        <h2 className="card-title text-black text-2xl">{title}</h2>
        <h2 className="card-title " style={cardStyleText}>
          ${price}
        </h2>
        <Link to={`/cardDonation/${id}`}>
          <div className=" rounded ">
            <button className="px-6 py-2  rounded text-white" style={btnStyle}>
              View Details
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DonateCard;
