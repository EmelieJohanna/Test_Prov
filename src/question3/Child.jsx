export default function Child({ onSelect }) {
  const handleSelectChange = (e) => {
    const selectedColor = e.target.value;
    onSelect(selectedColor);
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
}
