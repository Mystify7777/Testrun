import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="flex items-center justify-center w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {["red", "green", "blue", "purple", "black"].map((colorOption) => (
            <button
              key={colorOption}
              onClick={() => setColor(colorOption)}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: colorOption }}
            >
              {colorOption.charAt(0).toUpperCase() + colorOption.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;