import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [grade, setGrade] = useState("");
  const [interests, setInterests] = useState([]);
  const [interest, setInterest] = useState([]);
  const [level, setLevel] = useState([]);
  const [invisible, setInvisible] = useState(true);
  const [interestsVisibility, setInterestsVisibility] = useState(false);
  const [gradeVisibility, setGradeVisibility] = useState(false);

  return (
    <UserContext.Provider
      value={{
        grade,
        interests,
        setGrade,
        setInterests,
        interest,
        setInterest,
        level,
        setLevel,
        invisible,
        setInvisible,
        interestsVisibility,
        setInterestsVisibility,
        gradeVisibility,
        setGradeVisibility
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
