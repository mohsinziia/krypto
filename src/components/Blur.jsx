import React from "react";

function Blur({ className }) {
  return (
    <div
      className={`absolute z-10 aspect-square rounded-full blur-[200px] w-[400px] ${className}`}
    ></div>
  );
}

export default Blur;
