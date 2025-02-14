import { useContext } from "react";
import AppContext from "../../context/AppProvider";
import UserGreeting from "./UserGreeting";
import PendingTasks from "./PendingTasks";

const Dashboard = () => {
  const { user } = useContext(AppContext);
  return (
    <main className="flex flex-col gap-10 max-w-[1000px] w-full mx-auto p-10 ">
      <UserGreeting username={user?.name} />
      <section>
        <PendingTasks />
      </section>
    </main>
  );
};

export default Dashboard;
