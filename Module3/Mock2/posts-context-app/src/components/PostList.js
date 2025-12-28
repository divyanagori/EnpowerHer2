import { useContext } from "react";
import { PostsContext } from "../context/PostsContext";

const PostList = () => {
  const { posts, deletePost } = useContext(PostsContext);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <span>{post.text}</span>
          <button onClick={() => deletePost(post.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default PostList;
