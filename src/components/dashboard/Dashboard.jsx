import { useContext, useState, useEffect } from "react";
import AppContext from "../../context/AppProvider";
import UserGreeting from "./UserGreeting";
import PendingTasks from "./PendingTasks";
import ChartTasks from "./ChartTasks";
import TabsMenu from "./TabsMenu";

const Dashboard = () => {
  const { user } = useContext(AppContext);

  const [pendingTasks, setPendingTasks] = useState(user?.tasks.length);

  useEffect(() => {
    setPendingTasks(user?.tasks.length);
  }, [user]);

  return (
    <main className="flex flex-col gap-20 max-w-[1200px] w-full mx-auto p-10 ">
      <UserGreeting username={user?.name} />
      <section className="flex gap-10 w-full  h-fit justify-between">
        <PendingTasks tasksNumber={pendingTasks} />
        <ChartTasks />
      </section>
      <TabsMenu />
    </main>
  );
};

export default Dashboard;
