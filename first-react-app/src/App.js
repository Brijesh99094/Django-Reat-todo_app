import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";

import React from "react";

const App = () => {
  // eslint-disable-next-line
  const [showForm,setShoewForm] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: "1",
	  day:"dfghj",
      text: "This is an first object",
      reminder: true,
    },
    {
      id: "2",
	  day:"drfghj",
      text: "This is an second object",
      reminder: true,
    },
    {
      id: "3",
	  day:"sdfg",
      text: "This is an third object",
      reminder:false,	
    },
  ]);


   const addTask = (task) =>{
	   const id = Math.floor(Math.random() * 10000) +1
	   const newTask = { id,...task }
	   console.log(newTask)
	   setTasks([...tasks,newTask])
   }
	
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const checkIt = (id) => { 
    setTasks(
	tasks.map((task)=> task.id === id ?  { ...task,reminder:!task.reminder } : task   )
	)
  };
 

  return (
    <div className="App">
      <Header title="Hello" onAdd = {() => setShoewForm(!showForm)} showAddForm = {showForm} />
		  {showForm && <AddTask onAdd={addTask} />}
      <Tasks tasks={tasks} onDelete={deleteTask}  onToggle={checkIt} />
	  
    </div>
  );
};

export default App;
