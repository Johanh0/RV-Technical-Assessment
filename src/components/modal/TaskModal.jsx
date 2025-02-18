// Task modal is display everytime the user try to create a new task
const TaskModal = ({
  titleInput,
  timeInput,
  descriptionInput,
  setTitleInput,
  setTimeInput,
  setDescriptionInput,
}) => {
  return (
    <div className="flex flex-col  justify-between gap-5">
      <div className="flex-1">
        <label
          htmlFor="inputname"
          className="block text-gray-800 font-semibold text-sm cursor-pointer"
        >
          Task Title
        </label>
        <div className="mt-2">
          <input
            onInput={(event) => setTitleInput(event.target.value)}
            required
            id="inputname"
            type="text"
            name="inputname"
            value={titleInput}
            className=" block w-full rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800 outline-primary-800"
          />
        </div>
      </div>
      <div className="flex-1">
        <label
          htmlFor="input-time"
          className="block text-gray-800 font-semibold text-sm cursor-pointer"
        >
          Time Required (milliseconds)
        </label>
        <div className="mt-2">
          <input
            onInput={(event) => setTimeInput(event.target.value)}
            required
            id="input-time"
            type="number"
            name="inputname"
            value={timeInput}
            className=" block w-full rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800 outline-primary-800"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <label
          htmlFor="input-description"
          className="block text-gray-800 font-semibold text-sm cursor-pointer mt-2"
        >
          Description
        </label>
        <textarea
          onInput={(event) => setDescriptionInput(event.target.value)}
          className=" max-h-[100px] block w-full rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800 outline-primary-800"
          value={descriptionInput}
          id="input-description"
        ></textarea>
      </div>
    </div>
  );
};

export default TaskModal;
