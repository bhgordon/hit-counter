"use client";
import React from "react";

import "./styles.css";

function CountButton({ hits }) {
  const [isHidden, setIsHidden] = React.useState(true);

  const handleClick = () => {
    setIsHidden(!isHidden);
  };

  return (
    <button onClick={handleClick} className={isHidden ? "censored" : undefined}>
      {hits}
    </button>
  );
}

export default CountButton;
