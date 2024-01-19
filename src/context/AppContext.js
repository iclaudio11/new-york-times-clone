import React, { createContext, useContext } from "react";

const AppContext = createContext();

const useGlobalContext = () => {
  return useContext(AppContext);
};

const AppProvider = ({ children }) => {
  const apiKey = 'tGSXuRhPkNnojNA6gvTNHTClun0h8w0K';
  const apiUrl = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${apiKey}&show-fields=thumbnail,body`;

  const sections = [
    "Home",
    "World",
    "U.S.",
    "Politics",
    "N.Y.",
    "World",
    "Business",
    "Art",
    "Opinion",
    "Health",
    "Real Estate",
    "Technology",
    "Books",
  ];

  const formatSection = (section) => {
    switch (section) {
      case "us":
        return "U.S.";
      case "nyregion":
        return "N.Y";
      case "t-magazine":
        return "magazine";
      case "realestate":
        return "real estate";
      default:
        return section;
    }
  };

  return (
    <AppContext.Provider value={{ sections, formatSection, apiUrl }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, useGlobalContext };
