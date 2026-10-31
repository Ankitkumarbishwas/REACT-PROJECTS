
import { useState } from "react";

function PostCard({ title, description }) {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  return (
    <div className="bg-white p-5 rounded-xl shadow mb-4">
      <h2 className="text-xl font-bold mb-2">{title}</h2>

      <p className="text-gray-600 mb-4">{description}</p>

      <button
        onClick={() => setLikes(likes + 1)}
        className="bg-green-500 text-white px-4 py-2 rounded mr-3"
      >
        👍 Like {likes}
      </button>

      <button
        onClick={() => setDislikes(dislikes + 1)}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        👎 Dislike {dislikes}
      </button>
    </div>
  );
}

export default PostCard;