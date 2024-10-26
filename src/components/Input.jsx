import React from "react";

function Input({ className, ...props }, ref) {
  return (
    <div className="flex relative">
      <input
        className={`w-[34.5rem] h-[4.6rem] rounded-full bg-[#181A48] body-text text-[1.6rem] leading-[3.1rem] pl-[2.2rem] ${className}`}
        {...props}
        ref={ref}
      />
      <button className="sub-heading text-[1.6rem] bg-[#9292DC] h-[4.6rem] rounded-full px-[2.2rem] absolute right-0">
        Submit
      </button>
    </div>
  );
}

export default React.forwardRef(Input);
