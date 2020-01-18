import React from "react";

function RecipeCardImg(props) {
  const { url } = props.img;
  return (
    <div className="col-sm p-0">
      <img
        src={url}
        className="rounded"
        alt="..."
        style={{
          width: "100%",
          height: "163px",
          objectFit: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat"
        }}
      />
    </div>
  );
}

export default RecipeCardImg;
