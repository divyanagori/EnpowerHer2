import { useState, useContext } from "react";
import { PostsContext } from "../context/PostsContext";

const PostForm = () => {
  const [text, setText] = useState("");
  const { addPost } = useContext(PostsContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim()) return;

    addPost(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter post"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add Post</button>
    </form>
  );
};

export default PostForm;
