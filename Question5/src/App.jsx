import ResultCard from "./components/ResultCard";

function App() {
  const students = [
    { id: 1, name: "shivam", marks: 85 },
    { id: 2, name: "rohan", marks: 35 },
    { id: 3, name: "om", marks: 67 },
    { id: 4, name: "rittik", marks: 77 },
    { id: 5, name: "vishal", marks: 40 },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-10 flex flex-col  items-center justify-cemter" >
      <div className="h-auto w-[500px] rounded-lg shadow-md py-5 bg-sky-200">
        <h1 className="text-3xl font-bold text-center mb-6">
          Student Results
        </h1>

        <div className="max-w-md mx-auto">
          {students.map((student) => (
            <ResultCard
              key={student.id}
              name={student.name}
              marks={student.marks}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
