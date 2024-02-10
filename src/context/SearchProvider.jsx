import { createContext, useContext, useState } from "react";

const SearchContext = createContext();
function SearchProvider({ children }) {
  const [searchValue, setSearchValue] = useState("");

  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      {children}
    </SearchContext.Provider>
  );
}
export default SearchProvider;

export const useSearch = () => {
  return useContext(SearchContext);
};
