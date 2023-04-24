import { useEffect, useState } from "react";
import { createContext } from "react";
import Cookies from "js-cookie";

export const CurrentUserContext = createContext(null);

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    Cookies.set("currentUser", JSON.stringify(currentUser));
  }, [currentUser]);

  useEffect(() => {
    const cookieUser = Cookies.get("currentUser");
    if (typeof cookieUser !== "undefined" && cookieUser !== "undefined") {
      setCurrentUser(JSON.parse(cookieUser));
    }
  }, []);

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </CurrentUserContext.Provider>
  );
};
