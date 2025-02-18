import ProgressBar from "./ProgressBar";

const TaskExecution = ({
  taskTitle,
  taskDescription,
  eta,
  speed,
  isDone,
  onComplete,
}) => {
  return (
    <div className="flex flex-col gap-3 p-3 w-full bg-primary-50 rounded-lg">
      <div className="flex flex-col gap-1">
        <p className=" text-primary-900 font-bold">{taskTitle.toUpperCase()}</p>
        <p className=" text-primary-950 text-md font-medium">
          {taskDescription}
        </p>
      </div>
      <div>
        <ProgressBar
          eta={eta}
          speed={speed}
          onComplete={onComplete}
          isDone={isDone}
        />
      </div>
    </div>
  );
};

export default TaskExecution;
