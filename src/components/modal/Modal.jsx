import React from "react";

const Modal = ({ children, ...props }) => {
  return (
    <section className="absolute flex justify-center items-center w-screen h-screen bg-black/35 ">
      <form {...props} className=" min-w-[400px] h-fit p-5 bg-white rounded-md">
        {children}
      </form>
    </section>
  );
};

export default Modal;
