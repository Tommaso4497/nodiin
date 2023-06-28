import React from "react";
const TikToIcons = ({color, width,height}) => {
  return (
      <svg
        viewBox="0 0 54 54"
        width={width ? width: "24px"} height={height ? height : "24px"}
        fill={color}
      >
        <defs></defs>
        <path
          d="M 39.303 0 C 40.342 7.663 45.329 12.231 54 12.717 L 54 21.336 C 48.975 21.757 44.574 20.348 39.454 17.691 L 39.454 33.81 C 39.454 54.288 13.421 60.687 2.955 46.009 C -3.77 36.565 0.348 19.991 21.922 19.327 L 21.922 28.416 C 20.279 28.643 18.522 28.999 16.916 29.469 C 12.118 30.862 9.397 33.47 10.153 38.071 C 11.608 46.884 30.462 49.493 28.893 32.271 L 28.893 0.016 L 39.303 0.016 L 39.303 0 Z"
        ></path>
      </svg>
  );
};
export default TikToIcons;
