import { useState } from "react";

function PostComposer({ onPost }) {
  //  const savedPosts = [];

  const [postText, setPostText] = useState("");
  const maxChars = 200;

  const handleChange = (e) => {
    setPostText(e.target.value);
  };

  const handlePost = () => {
    if (postText.trim === "") return;
    if (postText.length < 1) {
      alert("Please Write Something");
      return;
    }
    // savedPosts.push(postText);
    onPost(postText);
    setPostText("");
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-2xl mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Create a Post
      </h2>

      <textarea
        value={postText}
        onChange={handleChange}
        maxLength={maxChars}
        className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="What's on your mind?"
        rows={5}
      />

      <div className="flex justify-between items-center mt-2">
        <span className="text-sm text-gray-500">
          {postText.length}/{maxChars}
        </span>

        <button
          onClick={handlePost}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-md transition"
        >
          Post
        </button>
      </div>
    </div>
  );
}

export default PostComposer;
