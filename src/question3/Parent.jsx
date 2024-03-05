import Child from "./Child";
import { useState } from "react";

export default function Parent() {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };
  return (
    <div>
      <Child onSelect={handleColorSelect} />
      <h2>Parent</h2>

      {selectedColor && <p>Din favoritfärg: {selectedColor}</p>}
    </div>
  );
}
