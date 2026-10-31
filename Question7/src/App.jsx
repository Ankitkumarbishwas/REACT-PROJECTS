
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");

  const students = [
    "Ankit",
    "Vishal",
    "Aman",
    "Shivam",
    "Om",
    "Rishav",
    "subhankar",
    "Piyush"
  ];

  const filteredStudents = students.filter((student) =>
    student.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow">

        <h1 className="text-2xl font-bold mb-4 text-center">
          Student List
        </h1>

        <input
          type="text"
          placeholder="Search student..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border p-3 rounded-lg mb-4"
        />

        <ul>
          {filteredStudents.map((student, index) => (
            <li
              key={index}
              className="p-3 mb-2 bg-gray-100 rounded-lg"
            >
              {student}
            </li>
          ))}
        </ul>

        {filteredStudents.length === 0 && (
          <p className="text-red-500 text-center">
            No student found!
          </p>
        )}

      </div>
    </div>
  );
}

export default App;
