import React from "react";

const Modal = ({ children, ...props }) => {
  return (
    <section className="fixed top-0 left-0 z-10 flex justify-center items-center w-full h-full bg-white ">
      <form
        {...props}
        className=" min-w-[400px] max-w-[500px] h-fit p-5 bg-gray-50 rounded-md"
      >
        {children}
      </form>
    </section>
  );
};

export default Modal;
