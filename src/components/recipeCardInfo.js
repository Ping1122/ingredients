import React from "react";

function RecipeCardInfo(props) {
  const { title, description } = props.info;
  return (
    <div className="mt-3 mx-4 mb-2">
      <h5 className="card-title mb-0 ">{title}</h5>
      <small className="card-text text-secondary">{description}</small>
    </div>
  );
}

export default RecipeCardInfo;
