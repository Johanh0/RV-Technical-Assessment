import { useState } from "react";
import Tab from "./Tab";
import TaskSection from "./TaskSection";
import TodoSection from "./todoSection";
import RobotSection from "./RobotSection";

const TabsMenu = () => {
  const [tabContent, setTabContent] = useState(<TaskSection />);
  const [contentSelected, setContentSelected] = useState("Tasks");
  const tabs = [
    {
      title: "Tasks",
      component: <TaskSection />,
    },
    {
      title: "To-Do",
      component: <TodoSection />,
    },
    {
      title: "Robots",
      component: <RobotSection />,
    },
  ];

  const hanldeTabs = (title, component) => {
    setContentSelected(title);
    setTabContent(component);
  };
  return (
    <section className="flex flex-col gap-10 w-full  h-fit justify-between">
      <menu className="flex gap-10">
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
