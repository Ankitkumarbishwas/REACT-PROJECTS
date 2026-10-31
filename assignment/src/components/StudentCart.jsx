function StudentCard(props){
    return(
        <div className="bg-white text-indigo-600 rounded-lg p-6 border border-indigo-200 text-bold flex flex-col gap-2">
            <h2>Name:- {props.name}</h2>
            <p>Course:- {props.course}</p>
            <p>Marks:- {props.marks}</p>
        </div>
    )
}

export default StudentCard