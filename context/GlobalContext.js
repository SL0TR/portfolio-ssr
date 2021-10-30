import { useParallax } from "hooks";
import React, { useContext, useState } from "react";

const Context = React.createContext();

export function useGlobalStateContext() {
  return useContext(Context);
}

export const ContextProvider = ({ children }) => {
  const offsetY = useParallax();
  const [containerHeight, setContainerHeight] = useState({
    hero: 0,
    about: 0,
  });

  return (
    <Context.Provider value={{ offsetY, containerHeight, setContainerHeight }}>
      {children}
    </Context.Provider>
  );
};
