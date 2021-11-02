import { useScrollYPosition } from "hooks";
import React, { useContext } from "react";

const Context = React.createContext();

export function useGlobalStateContext() {
  return useContext(Context);
}

export const ContextProvider = ({ children }) => {
  const offsetY = useScrollYPosition();

  return <Context.Provider value={{ offsetY }}>{children}</Context.Provider>;
};
