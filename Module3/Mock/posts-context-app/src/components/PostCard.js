import { useState } from "react";
import { usePosts } from "../context/PostsContext";
import { useTheme } from "../context/ThemeContext";

const PostCard = ({ post }) => {
  const { updatePost, deletePost } = usePosts();
  const { theme } = useTheme();

  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  const handleUpdate = () => {
    updatePost(post.id, { title, body });
    setIsEditing(false);
  };

  return (
    <li className={`post-card ${theme}`}>
      {isEditing ? (
        <>
          <input value={title} onChange={e => setTitle(e.target.value)} />
          <textarea value={body} onChange={e => setBody(e.target.value)} />
          <button onClick={handleUpdate}>Save</button>
        </>
      ) : (
        <>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deletePost(post.id)}>Delete</button>
        </>
      )}
    </li>
  );
};

export default PostCard;
