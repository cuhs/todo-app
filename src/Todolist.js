import './App.css';

import React from 'react'
import { useState } from 'react'

function TodoList () {

    const [tasks, setTasks] = useState( [["Bomblab", "CS33 project", "10/25"],["study math", "I'm cooked", "10/18"],["study physics","I'm even more cooked", "10/21"]] )
    const [title, setTitle] = useState('')
    const [notes, setNotes] = useState('')
    const [due, setDue] = useState('')
    
    function deleteTask(index){
        const newTasks = [...tasks]
        newTasks.splice(index, 1)
        setTasks(newTasks)
    }
    function addTask() {
        setTasks([...tasks, [title, notes, due]])
    }
    function handleChange(e, target){
        if (target == "title") {
          setTitle(e.target.value)
        } else if (target == "notes") {
          setNotes(e.target.value)
        } else {
          setDue(e.target.value)
        }
    }



  return (
    <div>
      <p>Title of my task list</p>

      <div>
        <input type="text" value={title} onChange={(e) => handleChange(e, "title")} placeholder="Task Title" />
      </div>
      <div>
        <input type="text" value={notes} onChange={(e) => handleChange(e, "notes")} placeholder="Task Notes" />
      </div>
      <div>
         <input type="text" value={due} onChange={(e) => handleChange(e, "due")} placeholder="Task Due Date" />
      </div>
      <div>
        <button onClick={()=>addTask()}>Add Task</button>
      </div>
      {tasks.map((task, index) => (

      <div className="task">
        <p>Name: {task[0]}</p>
        <p>Description: {task[1]}</p>
        <p>Due date: {task[2]}</p>
        <button onClick={() => deleteTask(index)}> Remove </button>
       </div>
      ))}

    </div>
  );
}
export default TodoList;