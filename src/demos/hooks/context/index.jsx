import React, {
  createContext,
  useState,
  useContext,
} from "react";

const contextObj = createContext("default");

const ContextComp = (props, ref) => {
  const context = useContext(contextObj);
  return (
    <p>
      {context}
    </p>
  );
};

export default function App() {
  const [name, setName] = useState("James9527");
  return (
    <>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <contextObj.Provider value={name}>
        <ContextComp />
      </contextObj.Provider>
    </>
  );
}
