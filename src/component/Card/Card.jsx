import React from "react";

const Card = ({ card }) => {
  const {
    picture,
    category,
    title,
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
  return (
    <div className="">
      <div className="card card-compact w-fit  shadow-xl" style={cardStyle}>
        <figure>
          <img src={picture} alt="" className="w-80 h-48" />
        </figure>
        <div className="card-body">
          <div className="px-3  w-fit rounded-md" style={cardStyleCategoryBg}>
            <p className="text-center  justify-center" style={cardStyleText}>
              {category}
            </p>
          </div>

          <h2 className="card-title " style={cardStyleText}>
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
