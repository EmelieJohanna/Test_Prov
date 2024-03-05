// 2. Uppdatera E-post 3p
// Skapa en React-komponent för att visa och uppdatera användarens e-postadress.
// Från början visas användarens nuvarande e-postadress.
// Bredvid e-postadressen ska det finnas en "Redigera"-knapp.

// När "Redigera" klickas, visa ett inputfält för att skriva in en ny e-postadress
// och byt "Redigera"-knappen till en "Spara"-knapp.
// När "Spara" klickas, uppdatera e-postadressen och visa den uppdaterade adressen.

import { useState } from "react";

function App() {
  const [email, setEmail] = useState("emelie.emelie@emelie.com");
  const [newEmail, setNewEmail] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  function handleEditing() {
    setIsEditing(true);
    setNewEmail(email);
  }

  function handleSave() {
    setEmail(newEmail);
    setIsEditing(false);
  }

  function handleChange(e) {
    setNewEmail(e.target.value);
  }
  return (
    <>
      <div>
        <p>Email: {email}</p>
        {isEditing ? (
          <div>
            <input type="email" value={newEmail} onChange={handleChange} />
            {/* Spara knapp */}
            <button onClick={handleSave}>Save</button>
          </div>
        ) : (
          <div>
            <button onClick={handleEditing}>Edit</button>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
