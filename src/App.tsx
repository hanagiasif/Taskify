import React, { useState } from "react";
import InputFeild from "./components/InputFeild";
import "./App.css";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputFeild todo={todo} setTodo={setTodo} />
    </div>
  );
};

export default App;
