import FAQItem from "./components/FAQItem";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">
          Frequently Asked Questions
        </h1>

        <FAQItem
          question="1. What is React?"
          answer="React is a JavaScript library used to build user interfaces."
        />

        <FAQItem
          question="2. What is JSX?"
          answer="JSX allows us to write HTML-like syntax inside JavaScript."
        />

        <FAQItem
          question="3. What are props?"
          answer="Props are used to pass data from a parent component to a child component."
        />

        <FAQItem
          question="4. What is useState?"
          answer="useState is a React Hook used to manage state in a component."
        />

        <FAQItem
          question="5. What is an event handler?"
          answer="An event handler is a function that runs when an event occurs, such as a button click."
        />
      </div>
    </div>
  );
}

export default App;
