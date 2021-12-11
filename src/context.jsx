import React, { useState, useContext, createContext } from "react";

const HakimChatContext = createContext();

export const Provider = ({ children }) => {
  const [createType, setCreateType] = useState("");
  const [isCreating, setIsCreating] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  return (
    <HakimChatContext.Provider
      value={{
        createType,
        setCreateType,
        isCreating,
        setIsCreating,
        isEditing,
        setIsEditing,
      }}
    >
      {children}
    </HakimChatContext.Provider>
  );
};

export const useGlobalContext = () => useContext(HakimChatContext);
