import React, { useState } from "react";

const Context = React.createContext({});

const ContextProvider = ({ children }) => {
  const [input, setInput] = useState("aksjdlaksd");
  const [movements, setMovements] = useState([{}]);
  const [movement, setMovement] = useState({
    id: null,
    type: "",
    category: "",
    mount: 0,
    date: "",
  });
  return (
    <Context.Provider value={(input, setInput)}>{children}</Context.Provider>
  );
};

export default ContextProvider;
