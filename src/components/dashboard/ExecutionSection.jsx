import { useContext, useState } from "react";
import AppContext from "../../context/AppProvider";
import PrimaryButton from "../buttons/PrimaryButton";

const ExecutionSection = () => {
  const { user } = useContext(AppContext);
  const [robotSelected, setRobotSelected] = useState(user?.robots[0]);

  const hanldeChange = (event) => {
    const robotName = event.target.value;
    setRobotSelected(user.robots.find((robot) => robotName == robot.name));
  };
  return (
    <section className="flex flex-col gap-10">
      <div className="flex flex-col gap-3 w-fit py-3 px-5 bg-primary-50 rounded-lg">
        <div>
          <p className=" text-primary-950 font-bold ">Choose Your Robot</p>
        </div>
        <div className="">
          {user?.robots.length < 1 ? (
            <p className=" text-sm text-primary-400">
              Go to the tab "My Robots" and add a robot
            </p>
          ) : (
            <div className="flex items-center gap-5">
              <div>
                <img
                  src={robotSelected?.image}
                  alt=""
                  className="w-30 rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor=""
                    className="text-xs font-bold text-primary-950"
                  >
                    Your Robots
                  </label>
                  <select
                    onChange={(event) => hanldeChange(event)}
                    name=""
                    id=""
                    className="text-lg bg-primary-100 rounded-sm"
                  >
                    {user?.robots.map((robot) => (
                      <option key={robot.id} value={robot.name}>
                        {robot.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex gap-5">
                  <p className=" text-primary-950 font-bold text-xs">
                    Task Capacity:{" "}
                    <span className=" text-primary-500">
                      {robotSelected?.taskCapacity}
                    </span>
                  </p>
                  <p className=" text-primary-950 font-bold text-xs">
                    Speed:{" "}
                    <span className=" text-primary-500">
                      {robotSelected?.speedModifier}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
        {user?.robots.length >= 1 && <PrimaryButton>Start Tasks</PrimaryButton>}
      </div>
      <div></div>
    </section>
  );
};

export default ExecutionSection;
