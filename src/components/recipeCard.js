import React from "react";
import RecipeCardDropdown from "./recipeCardDropdown";
import RecipeCardImg from "./recipeCardImg";
import RecipeCardNutritionList from "./recipeCardNutritionList";
import RecipeCardInfo from "./recipeCardInfo";

function RecipeCard(props) {
  const { info, img, nutritionList } = props.recipe;
  return (
    <div
      className="card m-2 shadow"
      style={{ width: "50%", display: "inline-block", textAlign: "left" }}
    >
      <div className="row pr-4">
        <div className="col-sm">
          <RecipeCardInfo info={info} />
        </div>
        <div className="col-sm-13">
          <RecipeCardDropdown />
        </div>
      </div>
      <div className="card mx-5 mb-3 shadow-sm">
        <div className="row m-0">
          <RecipeCardImg img={img} />
          <RecipeCardNutritionList nutritionList={nutritionList} />
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
