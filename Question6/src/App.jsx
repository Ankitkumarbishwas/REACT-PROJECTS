import { useState } from "react";
import InsertTodo from "./components/InsertTodo.jsx";
import ListTodo from "./components/ListTodo";

function App(){
  const [data, setData] = useState([])
  const [task, setTask] = useState("");

  const handelInsert = (task) => {
    setData([...data, {id:data.length+1, task:task, isDone:false}])
  }

  const handelDelete = (id) => {
    const newData = data.filter((item) => item.id != id);
    setData(newData);
  }  

  const handelDoneToggel = (id) => {
    setData(data.filter((item) => {
      if(item.id == id){
        item.isDone = !item.isDone;
      }
      return item;
    }));

  }
  return(
    <div className="h-screen w-full flex justify-center items-center bg-sky-200">
      <div className="bg-slate-100 min-h-[500px] w-4/12 py-10 px-5 rounded-lg shadow-md">

      <h1 className="text-4xl font-bold text-center mb-10">TODO APP</h1>

      <InsertTodo task={task} setTask={setTask} handelInsert={handelInsert}/>
      <ListTodo handelDoneToggel={handelDoneToggel} handelDelete={handelDelete} data={data}/>
      </div>
    </div>
  )
}

export default App;