import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setEditing] = useState(false);

  function handleEditClick() {
    setEditing(true);
  }

  let playerName = <span className="player-name">{name}</span>;
//   let btnCaption = "Edit";
  if (isEditing) {
    playerName = <input type="text" required />;
    // btnCaption = "Save";
  }
  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing?"Save":"Edit"}</button>
    </li>
  );
}
