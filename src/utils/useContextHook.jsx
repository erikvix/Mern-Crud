import { createContext } from "react";

export const useContextHook = createContext();
export const UserStorage = ({ children, prop }) => {
  return (
    <useContextHook.Provider value={{}}>{children}</useContextHook.Provider>
  );
};
