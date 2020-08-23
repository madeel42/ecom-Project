import React, { createContext, useState } from "react";

export const SearchContext = createContext();

// This context provider is passed to any component requiring the context
export const UserProvider = ({ children }) => {
  const [search, setsearch] = useState("");
  const [searchProduct,setsearchProduct] = useState("");
//   const [location, setLocation] = useState("Mars");
const clickHandle = () => {
    setsearchProduct(search)
}
console.log(searchProduct);
  return (
    <SearchContext.Provider
      value={{
        search,
        setsearch,
        searchProduct,
        clickHandle,
        setsearchProduct
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};