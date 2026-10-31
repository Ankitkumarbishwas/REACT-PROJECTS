import { useState } from "react";

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md text-center">
        <h1 className="text-2xl font-bold mb-4">
          {isLoggedIn ? "Welcome Back!" : "Please Login"}
        </h1>

        <button
          onClick={() => setIsLoggedIn(!isLoggedIn)}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  );
}

export default Login;