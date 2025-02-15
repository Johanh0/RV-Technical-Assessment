import PrimaryButton from "../buttons/PrimaryButton";

const EmptyMessage = ({ message, buttonContent, buttonClick }) => {
  return (
    <div className="flex flex-col gap-4">
      <p className=" text-primary-400 text-lg">{message}</p>

      {/* <button>{buttonContent}</button> */}
      <PrimaryButton onClick={buttonClick}>{buttonContent}</PrimaryButton>
    </div>
  );
};

export default EmptyMessage;
