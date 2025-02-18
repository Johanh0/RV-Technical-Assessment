import React from "react";

const PrimaryButton = ({ children, fitButton, ...props }) => {
  return (
    <div className={`mt-3 mx-auto ${fitButton && "w-fit"}`}>
      <button
        {...props}
        className="w-full py-2 px-3 text-white bg-primary-950 hover:bg-primary-900 rounded-md cursor-pointer"
      >
        {children}
      </button>
    </div>
  );
};

export default PrimaryButton;
