function InsertTodo({task, setTask, handelInsert}){
    return(
        <div className="flex gap-2">
            <input type="text" placeholder="e.g Class work" onChange={(e) => setTask(e.target.value)} value={task} className="w-full border px-3 py-2 rounded"/>
            <button onClick={() => {
                handelInsert(task);
                setTask("");
            }} className="bg-teal-500 text-white px-3 py-2 rounded">Go</button>
        </div>
    )
}

export default InsertTodo;