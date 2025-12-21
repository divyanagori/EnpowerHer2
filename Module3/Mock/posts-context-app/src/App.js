import { PostsProvider } from "./context/PostsContext";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import PostsList from "./components/PostsList";
import ThemeToggle from "./components/ThemeToggle";
import "./styles.css";

const AppContent = () => {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <ThemeToggle />
      <PostsList />
    </div>
  );
};

const App = () => (
  <ThemeProvider>
    <PostsProvider>
      <AppContent />
    </PostsProvider>
  </ThemeProvider>
);

export default App;
