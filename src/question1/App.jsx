// 1. Kommentarslista 3p
// Skapa en React-komponent för att hantera och visa en lista
// med kommentarer. Användare ska kunna lägga till och ta bort kommentarer.
// Listan är tom från början.

// Skapa Ett inputfält och en "Lägg till"-knapp för nya kommentarer.
// och en "Ta bort"-knapp bredvid varje kommentar för att ta bort den från listan.

import { useState } from "react";

function App() {
  const [comments, setComments] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function handleInputChange(e) {
    // e.preventDefault();
    setInputValue(e.target.value);
  }

  function handleAdd(e) {
    if (inputValue.trim() !== "") {
      e.preventDefault();
      setComments([...comments, inputValue]);
      // setComments.push(inputValue);
      setInputValue("");
    }
  }

  function handleDelete(index) {
    const newComments = [...comments];
    newComments.splice(index, 1);
    setComments(newComments);
  }
  console.log(comments);
  return (
    <div>
      <input
        placeholder="Type an amazing comment"
        type="text"
        value={inputValue}
        // onChange={(e) => handleInputChange(e.target.value)}
        onChange={handleInputChange}
      />
      <button onClick={handleAdd}>Add comment to list</button>
      <ul>
        {comments &&
          comments.map((comment, index) => (
            <div>
              <li key={index}>
                {comment}
                <button onClick={() => handleDelete(index)}>Delete</button>
              </li>
            </div>
          ))}
      </ul>
    </div>
  );
}

export default App;
