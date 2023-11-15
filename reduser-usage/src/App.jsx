import { useReducer } from "react";
import "./App.css";

function App() {
  const startState = {
    num1: 0,
    num2: 1,
    num3: 2,
  };
  const fun = (state, obj) => {
    switch (obj.type) {
      case "type1":
        return { ...state, num1: obj.load };
      case "type2":
        return { ...state, num2: obj.load };
      case "type3":
        return { ...state, num3: obj.load };
    }
  };
  const [value, setValue] = useReducer(fun, startState);
  return (
    <>
      <input
        type="text"
        onChange={(event) => {
          setValue({ type: "type1", load: event.target.value });
        }}
      />
      <input
        type="text"
        onChange={(event) => {
          setValue({ type: "type2", load: event.target.value });
        }}
      />
      <input
        type="text"
        onChange={(event) => {
          setValue({ type: "type3", load: event.target.value });
        }}
      />
      <br />
      <br />
      <span>{value.num1}</span>
      <br />
      <br />
      <span>{value.num2}</span>
      <br />
      <br />
      <span>{value.num3}</span>
    </>
  );
}

export default App;
