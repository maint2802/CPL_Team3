import "./App.css";
import { useState, createContext } from "react";
import Parent from "./components/Parent";

export const ContextAPI = createContext();

function App() {
  const [todolist, setTodolist] = useState([]);

  return (
    <ContextAPI.Provider
      value={{ todolist: todolist, setTodolist: setTodolist }}
    >
      <div className="App">
        <Parent />
        <div>
          {todolist.map((todo, index) => {
            return <p key={index}>{todo}</p>;
          })}
        </div>
      </div>
    </ContextAPI.Provider>
  );
}

export default App;

// State management
// App -> Parent -> Child

// Global state

// localstorage
// Context API (useContext)
// Redux
