import { useContext } from "react";
import AppContext from "../../context/AppProvider";

const TaskSection = () => {
  const { user } = useContext(AppContext);
  return (
    <div className="flex flex-col gap-5 ">
      {user?.tasks.map((task, index) => (
        <div
          key={index}
          className="flex justify-between items-center p-3 bg-primary-50 rounded-lg"
        >
          <div>
            <p className=" text-primary-900 font-bold">
              {task.name.toUpperCase()}
            </p>
            <p className=" text-primary-950 text-md font-medium">
              {task.description}
            </p>
          </div>
          <div>
            <div className="text-center text-sm leading-4 font-bold">
              <p>{Math.floor(task.eta / 1000)}</p>
              <p>second/s</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskSection;
