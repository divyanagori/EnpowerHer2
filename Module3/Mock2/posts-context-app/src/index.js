import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { PostsProvider } from "./context/PostsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <PostsProvider>
    <App />
  </PostsProvider>
);
