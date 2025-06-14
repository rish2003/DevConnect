// src/components/PostItem.jsx
import { useState } from "react";

const PostItem = ({
  post,
  onLike,
  onUnlike,
  onDelete,
  onToggleEdit,
  onSave,
}) => {
  const [editContent, setEditContent] = useState(post.content);

  const handleSaveClick = () => {
    onSave(post.id, editContent);
  };

  const handleCancelClick = () => {
    setEditContent(post.content);
    onToggleEdit(post.id);
  };

  return (
    <div className="bg-white shadow rounded-lg p-4 flex flex-col gap-3">
      {post.isEditing ? (
        <>
          <textarea
            className="border border-gray-300 rounded p-2 w-full"
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
          />
          <div className="flex justify-end gap-4">
            <button
              onClick={handleSaveClick}
              className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
            >
              Save
            </button>
            <button
              onClick={handleCancelClick}
              className="bg-gray-400 hover:bg-gray-500 text-white px-3 py-1 rounded"
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <p className="text-gray-800">{post.content}</p>
          <div className="flex justify-between text-sm text-gray-600">
            <span>
              {post.likes} {post.likes === 1 ? "Like" : "Likes"}
            </span>
            <div className="space-x-2">
              <button
                onClick={() => onLike(post.id)}
                className="text-red-500 hover:underline"
              >
                ❤️ Like
              </button>
              <button
                onClick={() => onUnlike(post.id)}
                className="text-blue-500 hover:underline"
              >
                💔 Unlike
              </button>
              <button
                onClick={() => onToggleEdit(post.id)}
                className="text-yellow-600 hover:underline"
              >
                ✏️ Edit
              </button>
              <button
                onClick={() => onDelete(post.id)}
                className="text-gray-500 hover:underline"
              >
                🗑️ Delete
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PostItem;
