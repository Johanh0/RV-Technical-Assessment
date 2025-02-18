import React from "react";

const Tab = ({ children, isSelected, ...props }) => {
  return (
    <p
      {...props}
      className={`${
        isSelected ? "bg-primary-100" : ""
      } p-2 text-primary-900 hover:text-primary-800 hover:bg-primary-100 rounded-lg cursor-pointer font-bold`}
    >
      {children}
    </p>
  );
};

export default Tab;
