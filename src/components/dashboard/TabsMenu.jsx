import { useState } from "react";
import Tab from "./Tab";
import ExecutionSection from "./ExecutionSection";
import TaskSection from "./TaskSection";
import RobotSection from "./RobotSection";

const TabsMenu = () => {
  const [tabContent, setTabContent] = useState(<ExecutionSection />);
  const [contentSelected, setContentSelected] = useState("Execution Status");
  const tabs = [
    {
      title: "Execution Status",
      component: <ExecutionSection />,
    },
    {
      title: "My Tasks",
      component: <TaskSection />,
    },
    {
      title: "My Robots",
      component: <RobotSection />,
    },
  ];

  const hanldeTabs = (title, component) => {
    setContentSelected(title);
    setTabContent(component);
  };
  return (
    <section className="flex flex-col gap-10 w-full  h-fit justify-between">
      <menu className="flex gap-5">
        {tabs.map((tab, index) => (
          <Tab
            onClick={() => hanldeTabs(tab.title, tab.component)}
            key={index}
            isSelected={contentSelected === tab.title}
          >
            {tab.title}
          </Tab>
        ))}
      </menu>
      <div>{tabContent}</div>
    </section>
  );
};

export default TabsMenu;
