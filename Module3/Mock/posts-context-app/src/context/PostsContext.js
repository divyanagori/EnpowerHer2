import { createContext, useContext, useEffect, useState } from "react";

const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  // Fetch posts on page load
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => setPosts(data.slice(0, 20))); // first 20 posts
  }, []);

  // Update post
  const updatePost = (id, updatedPost) => {
    setPosts(prev =>
      prev.map(post =>
        post.id === id ? { ...post, ...updatedPost } : post
      )
    );
  };

  // Delete post
  const deletePost = (id) => {
    setPosts(prev => prev.filter(post => post.id !== id));
  };

  return (
    <PostsContext.Provider value={{ posts, updatePost, deletePost }}>
      {children}
    </PostsContext.Provider>
  );
};

export const usePosts = () => useContext(PostsContext);
