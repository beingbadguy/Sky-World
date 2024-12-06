import { createContext, useState } from "react";
import products from "../Data/Data.json";

export const StoreData = createContext();

const MainContext = ({ children }) => {
  const [data, setData] = useState(products);
  return <StoreData.Provider value={{ data }}>{children}</StoreData.Provider>;
};

export default MainContext;
