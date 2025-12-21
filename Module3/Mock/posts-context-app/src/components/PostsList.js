import { usePosts } from "../context/PostsContext";
import PostCard from "./PostCard";

const PostsList = () => {
  const { posts } = usePosts();

  return (
    <ul className="posts-list">
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </ul>
  );
};

export default PostsList;
