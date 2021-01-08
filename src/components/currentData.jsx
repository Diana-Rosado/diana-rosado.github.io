import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [grade, setGrade] = useState("");
  const [interests, setInterests] = useState([]);
  const [interest, setInterest] = useState([]);

  return (
    <UserContext.Provider
      value={{
        grade,
        interests,
        setGrade,
        setInterests,
        interest,
        setInterest,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
