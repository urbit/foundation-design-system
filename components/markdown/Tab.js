import React from "react";
import { TabContext } from "./Tabs";

const Tab = ({ label, children }) => {
  const currentTab = React.useContext(TabContext);

  if (label !== currentTab) {
    return null;
  }

  return children;
};

export default Tab;
