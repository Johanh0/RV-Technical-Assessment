import { useContext, useState } from "react";
import AppContext from "../../context/AppProvider";
import TaskExecution from "./TaskExecution";
import PrimaryButton from "../buttons/PrimaryButton";

const ExecutionSection = () => {
  const { user, setUser } = useContext(AppContext);
  const [robotSelected, setRobotSelected] = useState(user?.robots[0]);

  const hanldeChange = (event) => {
    // Get the robot name
    const robotName = event.target.value;

    // Use the robot name to get the robot and saved it in the state robotSelected
    setRobotSelected(user.robots.find((robot) => robotName == robot.name));
  };

  const handleStartTask = () => {
    // Get the task capacity
    const robotTaskCapacity = robotSelected.taskCapacity;

    let i = 0;
    while (i < robotTaskCapacity && user.tasks.length > 0) {
      // Get the first task
      const userTask = user.tasks[0];

      // Save the task in the robotSelected
      robotSelected.tasks.push(userTask);

      // Delete the task from the user
      user.tasks = user.tasks.filter((task) => task.id !== userTask.id);
      i++;
    }

    // Update tasks from user and robotSelected
    const newRobotTasks = { ...robotSelected };
    const updateUser = { ...user };
    setRobotSelected(newRobotTasks);
    setUser(updateUser);
  };

  const handleTaskDone = (id) => {
    // Get the task that is completed by the ID
    const task = robotSelected.tasks.find((task) => task.id == id);
    // Change the state of the task to done
    task.isDone = true;
  };

  return (
    <section className="flex flex-col md:flex-row  gap-10">
      <div className="flex flex-col gap-3 w-full md:w-fit h-fit py-3 px-5 bg-primary-50 rounded-lg">
        <div>
          <p className=" text-primary-950 font-bold ">Choose Your Robot</p>
        </div>
        <div>
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
        {user?.robots.length >= 1 && (
          <PrimaryButton onClick={handleStartTask}>Start Tasks</PrimaryButton>
        )}
      </div>
      <div className="flex-1 flex flex-col gap-5">
        {robotSelected?.tasks.map((task) => (
          <TaskExecution
            key={task.id}
            eta={task.eta}
            taskTitle={task.name}
            taskDescription={task.description}
            speed={robotSelected.speedModifier}
            isDone={task.isDone}
            onComplete={() => handleTaskDone(task.id)}
          />
        ))}
      </div>
    </section>
  );
};

export default ExecutionSection;
