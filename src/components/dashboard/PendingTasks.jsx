const PendingTasks = ({ tasksNumber }) => {
  return (
    <article className="flex justify-center items-center w-[300px] h-full bg-primary-950 p-5 rounded-lg">
      <div className="flex flex-col justify-center items-center text-center gap-5">
        <p className="text-primary-400 text-3xl">Pending Tasks</p>
        <p className="text-primary-600 text-5xl font-bold">{tasksNumber}</p>
      </div>
    </article>
  );
};

export default PendingTasks;
