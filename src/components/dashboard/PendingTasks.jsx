const PendingTasks = () => {
  return (
    <article className=" w-fit h-fit bg-primary-950 p-5 rounded-lg">
      <div className="flex flex-col justify-center items-center gap-5">
        <p className="text-primary-400 text-lg">Pending Tasks</p>
        <p className="text-primary-400 text-4xl">0</p>
      </div>
    </article>
  );
};

export default PendingTasks;
