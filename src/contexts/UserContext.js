import { Auth } from "aws-amplify";
import React, { useContext, createContext, useState, useEffect } from "react";

const UserContext = createContext();

export default UserContext;

export function UserProvider(props) {
  const [user, setUser] = useState(null);

  async function getCurrentUser() {
    const currentUser = await Auth.currentAuthenticatedUser();
    setUser(currentUser);
  }
  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <UserContext.Provider {...props} value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }

  return context;
}
