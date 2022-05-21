import React, { useState, useContext } from "react";
// make sure to use https
import useFetch from "./useFetch";
export const API_ENDPOINT = `http://www.omdbapi.com/?i=tt3896198&apikey=5a6a569d`;
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("batman");
  const [date, setDate] = useState("");
  const { isLoading, error, data: movies } = useFetch(`&s=${query}`);

  return (
    <AppContext.Provider
      value={{ isLoading, error, movies, query, date, setQuery, setDate }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
