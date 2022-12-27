import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children, user }) => {
  const [loggedin, setLoggedin] = useState(user === null ? false : true);

  return (
    <UserContext.Provider value={{ loggedin, setLoggedin }}>
      {children}
    </UserContext.Provider>
  );
};
