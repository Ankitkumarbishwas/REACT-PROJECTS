import PostCard from "./Components/PostCard";


function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-6">
        Posts
      </h1>

      <div className="max-w-lg mx-auto">
        <PostCard
          title="Learning React"
          description="React is a JavaScript library for building user interfaces."
        />

        <PostCard
          title="Learning JavaScript"
          description="JavaScript makes websites interactive."
        />

        <PostCard
          title="Learning Python"
          description="Python is a beginner-friendly programming language."
        />
      </div>
    </div>
  );
}

export default App;
