function ResultCard({ name, marks }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md border mb-3">
      <h2 className="text-xl font-bold">{name}</h2>

      <p className="text-gray-600">Marks: {marks}</p>

      <p
        className={`font-bold mt-2 ${
          marks >= 40 ? "text-green-600" : "text-red-600"
        }`}
      >
        Result: {marks >= 40 ? "Pass" : "Fail"}
      </p>
    </div>
  );
}

export default ResultCard;