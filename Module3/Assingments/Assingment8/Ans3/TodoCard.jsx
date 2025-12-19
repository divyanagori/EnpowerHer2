// TodoCard.jsx
function TodoCard({ userId, title, completed }) {
  return (
    <div style={{ border: "1px solid #ccc", margin: "8px", padding: "8px" }}>
      <p><strong>User ID:</strong> {userId}</p>
      <p><strong>Title:</strong> {title}</p>
      <p><strong>Completed:</strong> {completed ? "Yes" : "No"}</p>
    </div>
  );
}

export default TodoCard;
