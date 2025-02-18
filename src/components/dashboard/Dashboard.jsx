import { useContext, useState, useEffect } from "react";
import AppContext from "../../context/AppProvider";
import UserGreeting from "./UserGreeting";
import PendingTasks from "./PendingTasks";
import LeaderBoard from "./LeaderBoard";
import TabsMenu from "./TabsMenu";

const Dashboard = () => {
  const { user } = useContext(AppContext);

  const [pendingTasks, setPendingTasks] = useState(user?.tasks.length);

  useEffect(() => {
    setPendingTasks(user?.tasks.length);
  }, [user]);

  return (
    <main className="flex flex-col gap-20 max-w-[1200px] w-full mx-auto p-5 md:p-10 ">
      <UserGreeting username={user?.name} />
      <section className="flex flex-col md:flex-row gap-10 items-center justify-center md:justify-between w-full  h-fit">
        <PendingTasks tasksNumber={pendingTasks} />
        <LeaderBoard userData={user} />
      </section>
      <TabsMenu />
    </main>
  );
};

export default Dashboard;
