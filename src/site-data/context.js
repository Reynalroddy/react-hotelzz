import React, { useState } from "react";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [sideBar, setSideBar] = useState(false);

  const openSideBar = () => {
    setSideBar(true);
  };

  const closeSideBar = () => {
    setSideBar(false);
  };

  return (
    <AppContext.Provider value={{ closeSideBar, openSideBar, sideBar }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
