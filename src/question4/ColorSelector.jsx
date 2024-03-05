import { useColor } from "./ColorContext";

const ColorSelector = () => {
  const { dispatch } = useColor();

  const handleSelectChange = (e) => {
    dispatch({ type: "setFav", payload: e.target.value });
  };
  return (
    <div>
      <label htmlFor="favCol">Favorite color?</label>
      <select name="favCol" onChange={handleSelectChange}>
        <option value="pink">Pink</option>
        <option value="blue">Blue</option>
        <option value="red">Red</option>
        <option value="silver">Silver</option>
      </select>
    </div>
  );
};

export default ColorSelector;
