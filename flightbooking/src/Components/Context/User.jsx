import React from "react";

export const User = React.createContext();

export const UserProvider = ({ children }) => {
  const [loggedUser, setLoggedUser] = React.useState({});
  React.useEffect(() => {
    let loggedUserlist =
      JSON.parse(localStorage.getItem("loggedUserBooking")) || {};
    setLoggedUser(loggedUserlist);
  }, []);
  return (
    <UserProvider value={{ loggedUser, setLoggedUser }}>
      {children}
    </UserProvider>
  );
};
