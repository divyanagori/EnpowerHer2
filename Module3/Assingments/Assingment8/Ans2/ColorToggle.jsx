// ColorToggle.jsx
import { useState } from "react";

export default function ColorToggle() {
  const [isRed, setIsRed] = useState(true);

  return (
    <div>
      <div
        style={{
          color: isRed ? "red" : "blue",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        This text changes color
      </div>

      <button onClick={() => setIsRed(!isRed)}>
        Toggle Color
      </button>
    </div>
  );
}
