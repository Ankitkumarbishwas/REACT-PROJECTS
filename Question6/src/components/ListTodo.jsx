function ListTodo({ data, handelDelete, handelDoneToggel }) {
    return (
        <ul className="flex flex-col py-4 max-h-[450px] overflow-y-auto mt-4">
            {
                data.map((item, index) => {
                    return (
                        <li className="px-3 py-2 flex justify-between">
                            <span>{item.id}. {item.isDone ? <del>{item.task}</del> : item.task} </span>
                            <span className="flex gap-1">
                                {item.isDone ? <button onClick={() => handelDoneToggel(item.id)} className="rounded bg-orange-600 text-white px-2 py-1 text-xs">undone</button> : <button onClick={() => handelDoneToggel(item.id)} className="rounded bg-green-600 text-white px-2 py-1 text-xs">Done</button>}
                                <button onClick={() => {
                                    handelDelete(item.id);
                                }} className="rounded bg-red-600 text-white px-2 py-1 text-xs">X</button>
                            </span>
                        </li>
                    )
                })
            }


        </ul>
    )
}

export default ListTodo;