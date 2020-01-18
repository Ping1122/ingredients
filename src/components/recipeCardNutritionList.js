import React from "react";

function RecipeCardNutritionList(props) {
  const { nutritionList } = props;

  return (
    <div className="col-sm">
      <ul className="list-group list-group-flush">
        {nutritionList.map(nutrition => {
          return (
            <li className="list-group-item py-2" key={nutrition[0]}>
              <small>{nutrition[0]}</small>
              <small className="float-right">{nutrition[2]}</small>
              <small className="float-right">{"\xa0"}</small>
              <small className="float-right">{nutrition[1]}</small>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default RecipeCardNutritionList;
