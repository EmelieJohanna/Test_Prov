import { useColor } from "./ColorContext";

export default function ColorDisplay() {
  const { state } = useColor();

  return (
    <div>
      <h2>Din favorit färg:</h2>
      <div
        style={{
          width: "200px",
          height: "100px",
          backgroundColor: state.favColor,
        }}
      ></div>
    </div>
  );
}
