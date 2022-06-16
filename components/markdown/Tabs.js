import React from "react";

export const TabContext = React.createContext();

const Tabs = ({ labels, children }) => {
  const [currentTab, setCurrentTab] = React.useState(labels[0]);

  return (
    <TabContext.Provider value={currentTab}>
      <ul className="flex items-center display cursor-pointer space-x-4">
        {labels.map((label) => (
          <li
            className={
              "block bg-wall-100 tab rounded-xl " +
              (currentTab === label ? "font-semibold" : "")
            }
            key={label}
            onClick={() => setCurrentTab(label)}
          >
            {label}
          </li>
        ))}
      </ul>
      {children}
    </TabContext.Provider>
  );
};

export default Tabs;
