"use client";
import { createContext, useContext, useState } from "react";

export const Context = createContext();

export const UserContext = ({ children }) => {
  const [postsData, setPostsData] = useState([]);

  return (
    <>
      <Context.Provider value={{ postsData, setPostsData }}>
        {children}
      </Context.Provider>
    </>
  );
};

export const usePosts = () => {
  return useContext(Context);
};
