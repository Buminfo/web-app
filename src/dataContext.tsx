// "use client";
// import { createContext, useState } from "react";
import { getData } from "../utils/getData";

import { ReactNode, createContext, useContext } from "react";
// Creating the user context
const UserContext = createContext<any>([]);

// Making the function which will wrap the whole app using Context Provider
export default async function AppStore({ children }: { children: ReactNode }) {
  const allBlogs = await getData();

  return (
    <UserContext.Provider value={{ allBlogs }}>{children}</UserContext.Provider>
  );
}

// Make useUserContext Hook to easily use our context throughout the application
export function useUserContext() {
  return useContext(UserContext);
}
