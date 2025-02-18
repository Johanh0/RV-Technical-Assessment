const InputModal = ({
  inputTitle,
  inputType,
  isDescription,
  inputDescription = false,
  ...inputProps
}) => {
  return (
    <>
      <label
        htmlFor="inputname"
        className="block text-gray-800 font-semibold text-sm cursor-pointer"
      >
        {inputTitle}
      </label>
      <div className="mt-2">
        <input
          {...inputProps}
          required
          id="inputname"
          type={inputType}
          name="inputname"
          className="block w-full rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800 outline-primary-800"
        />
      </div>
      {isDescription && (
        <label className="pt-1 block text-gray-500 text-sm">
          {inputDescription}
        </label>
      )}
    </>
  );
};

export default InputModal;
