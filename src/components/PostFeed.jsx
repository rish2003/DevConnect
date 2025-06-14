import PostComposer from "./PostComposer";
import PostItem from "./PostItem";
import { useState } from "react";

const PostFeed = () => {
  const [posts, setPosts] = useState([]);

  const handleNewPost = (content) => {
    const newPost = {
      id: Date.now(),
      content,
      likes: 0,
      isEditing: false,
    };
    setPosts([newPost, ...posts]);
  };

  const handleLike = (id) => {
    setPosts((prev) =>
      prev.map((post) => {
        if (post.id === id) {
          return { ...post, likes: post.likes + 1 };
        } else {
          return post;
        }
      })
    );
  };

  const handleUnlike = (id) => {
    setPosts((prev) =>
      prev.map((post) => {
        if (post.id === id && post.likes != 0) {
          return { ...post, likes: post.likes - 1 };
        } else {
          return post;
        }
      })
    );
  };

  const handleDelete = (id) => {
    setPosts((prev) =>
      prev.filter((post) => {
        post.id !== id;
      })
    );
  };

  const toggleEdit = (id) => {
    setPosts((prev) =>
      prev.map((post) => {
        if (post.id === id) {
          return { ...post, isEditing: !post.isEditing };
        } else {
          return post;
        }
      })
    );
  };

  const handleSave = (id, newContent) => {
    setPosts((prev) =>
      prev.map((post) => {
        if (post.id === id) {
          return { ...post, newContent, isEditing: false };
        } else {
          return post;
        }
      })
    );
  };

  return (
    <div className="space-y-6">
      <PostComposer onPost={handleNewPost} />
      <div className="max-w-2xl mx-auto space-y-4">
        {posts.map((post) => (
          <PostItem
            key={post.id}
            post={post}
            onLike={handleLike}
            onUnlike={handleUnlike}
            onDelete={handleDelete}
            onToggleEdit={toggleEdit}
            onSave={handleSave}
          />
        ))}
      </div>
    </div>
  );
};

export default PostFeed;
