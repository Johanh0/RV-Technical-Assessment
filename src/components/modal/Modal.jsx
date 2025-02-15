import React from "react";

const Modal = ({ children, ...props }) => {
  return (
    <section className="absolute z-10 flex justify-center items-center w-screen h-screen bg-white ">
      <form
        {...props}
        className=" min-w-[400px] h-fit p-5 bg-gray-50 rounded-md"
      >
        {children}
      </form>
    </section>
  );
};

export default Modal;
