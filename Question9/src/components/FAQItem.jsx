
import { useState } from "react";

function FAQItem({ question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="bg-white p-4 rounded-lg shadow mb-3">
      <h2
        onClick={() => setShowAnswer(!showAnswer)}
        className="text-lg font-bold cursor-pointer flex justify-between"
      >
        {question}
        <span>{showAnswer ? "-" : "+"}</span>
      </h2>

      {showAnswer && (
        <p className="mt-3 text-gray-600">
          {answer}
        </p>
      )}
    </div>
  );
}

export default FAQItem;