// Q1: Create a `StudentCard` component that accepts student name, course, and marks through props. Display at least 4 student cards using the same component.

import StudentCard from "./components/StudentCart";


function App() {
  return (
    <div className="flex items-center justify-center mt-16 flex">
      <div className="grid grid-cols-2 gap-5 p-4">
        <StudentCard name="Ankit" course="BCA" marks="85"/>
        <StudentCard name="Vishal" course="BCA" marks="87"/>
        <StudentCard name="Om" course="BCA" marks="95"/>
        <StudentCard name="Shivam" course="Btech" marks="97"/>
      </div>
    </div>
  )
}

export default App;