import { ROBOT_TYPES } from "../../utils/Robot";

// Robot modal is display everytime the user try to create a new user
const RobotModal = ({ robotSelected, handleChange, handleInput }) => {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <img src={robotSelected?.image} alt="" className=" w-full rounded-lg" />
      </div>
      <div className="flex flex-col gap-2 ">
        <p className="text-2xl text-primary-950 font-bold">
          {robotSelected?.type}
        </p>
        <p className=" text-primary-900">{robotSelected?.description}</p>
      </div>
      <div className="flex flex-col md:flex-row md:gap-15">
        <p className=" text-primary-950 font-bold text-md">
          Task Capacity:{" "}
          <span className=" text-primary-500">
            {robotSelected?.taskCapacity}
          </span>
        </p>
        <p className=" text-primary-950 font-bold text-md">
          Speed:{" "}
          <span className=" text-primary-500">
            {robotSelected?.speedModifier}
          </span>
        </p>
      </div>
      <div className="flex items-center justify-between gap-5">
        <div className="flex-1">
          <label
            htmlFor="inputname"
            className="block text-gray-800 font-semibold text-sm cursor-pointer"
          >
            Robot Name
          </label>
          <div className="mt-2">
            <input
              required
              id="inputname"
              type="text"
              name="inputname"
              className=" block w-full rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800 outline-primary-800"
              onInput={handleInput}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label
            htmlFor=""
            className="block text-gray-800 font-semibold text-sm cursor-pointer"
          >
            Robot Type
          </label>
          <div className="mt-2">
            <select
              onChange={(event) => handleChange(event)}
              name=""
              id=""
              className="block w-full rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800 outline-primary-800"
            >
              <option value={ROBOT_TYPES.UNIPEDAL.type}>
                {ROBOT_TYPES.UNIPEDAL.type}
              </option>
              <option value={ROBOT_TYPES.BIPEDAL.type}>
                {ROBOT_TYPES.BIPEDAL.type}
              </option>
              <option value={ROBOT_TYPES.QUADRUPEDAL.type}>
                {ROBOT_TYPES.QUADRUPEDAL.type}
              </option>
              <option value={ROBOT_TYPES.ARACHNID.type}>
                {ROBOT_TYPES.ARACHNID.type}
              </option>
              <option value={ROBOT_TYPES.RADIAL.type}>
                {ROBOT_TYPES.RADIAL.type}
              </option>
              <option value={ROBOT_TYPES.AERONAUTICAL.type}>
                {ROBOT_TYPES.AERONAUTICAL.type}
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RobotModal;
