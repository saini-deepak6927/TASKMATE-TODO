import { Header } from "./Components/Header.js";
import { AddTask } from "./Components/AddTask.js";
import { ShowTask } from "./Components/ShowTask.js";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [tasklist, setTasklist] = useState(JSON.parse(localStorage.getItem("tasklist")) || []);
  const [task,setTask]=useState({});


  useEffect(()=>{
    localStorage.setItem("tasklist",JSON.stringify(tasklist))
  },[tasklist])
  return (
    <div className="App">
      <Header />
      <AddTask 
      tasklist={tasklist} 
      setTasklist={setTasklist} 
      task={task}
      setTask={setTask}
      />
      <ShowTask tasklist={tasklist}
       setTasklist={setTasklist}
       task={task}
       setTask={setTask}
       />
    </div>
  );
}

export default App;
