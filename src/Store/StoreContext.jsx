import { createContext } from "react";

export const StoreData = createContext();

const MainContext = ({ children }) => {
  return (
    <StoreData.Provider value={{ data: "Hello World" }}>
      {children}
    </StoreData.Provider>
  );
};

export default MainContext;
