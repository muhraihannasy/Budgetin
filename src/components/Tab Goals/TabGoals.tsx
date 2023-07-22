import { useEffect, useState } from "react";
import TabCard from "./TabCard";

const TabGoals = () => {
  const [currentTab, setCurrentTab] = useState("");

  const tabs = ["All", "Saving", "Invesment", "Expenditure"];

  const handleChangeTab = (tab: string) => {
    setCurrentTab(tab);
  };

  useEffect(() => {
    setCurrentTab(tabs[0]);
  }, []);

  return (
    <div className="flex gap-2 mb-4 scrollable">
      {tabs.map((tab, index) => (
        <TabCard
          key={tab + index}
          name={tab}
          currentTab={currentTab}
          handleChangeTab={handleChangeTab}
        />
      ))}
    </div>
  );
};

export default TabGoals;
