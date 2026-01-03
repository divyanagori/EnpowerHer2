// components/Navbar.jsx
import React from "react";

// Forward ref to allow input autofocus
const Navbar = React.forwardRef(({ children }, ref) => {
  return (
    <nav
      style={{
        padding: "10px",
        borderBottom: "1px solid #ccc",
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      {React.Children.map(children, (child) => {
        // Attach ref to input only
        if (child.type === "input") {
          return React.cloneElement(child, { ref: ref });
        }
        return child;
      })}
    </nav>
  );
});

export default Navbar;
