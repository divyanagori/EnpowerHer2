import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { toggleTheme } = useTheme();

  return <button onClick={toggleTheme}>Switch Theme</button>;
};

export default ThemeToggle;
