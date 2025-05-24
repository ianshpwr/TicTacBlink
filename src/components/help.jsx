import React from "react";

const Help = () => {
  return (
    <div style={styles.wrapper}>
      <div className="help-container" style={styles.container}>
        <h1 style={styles.heading}>📘 How to Play</h1>

        <h2 className="h2">🎮 Game Overview</h2>
        <p>Two players play on a 3x3 board using random emojis from selected categories.</p>

        <h2 className="h2">🔢 Rules</h2>
        <ul style={styles.list}>
          <li>Each player picks one emoji category (e.g., 🐶, 🍕, ⚽).</li>
          <li>Players take turns placing random emojis from their category.</li>
          <li>Each player can only have 3 emojis on the board at once.</li>
          <li>Placing a 4th emoji removes their oldest one automatically.</li>
          <li>You cannot place a new emoji in the vanished emoji’s spot immediately.</li>
        </ul>

        <h2 className="h2">🏆 Win Condition</h2>
        <p>Make a line of 3 of your own emojis — row, column, or diagonal — to win!</p>

        <h2 className="h2">🚫 No Draws</h2>
        <p>The board never fills fully. Someone will always win.</p>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    height: "100vh",
    overflowY: "auto",
    padding: "0.2rem",
    boxSizing: "border-box",
  },
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: "1rem",
    padding: "1.5rem",
    boxShadow: "0 0 10px #00c4cb",
    fontFamily: '"Exo 2", sans-serif',
    color: "rgba(255, 255, 255, 0.9)",
    textAlign: "center",
  },
  heading: {
    marginBottom: "1rem",
    color: "rgba(255, 255, 255, 0.9)",
  },
  list: {
    textAlign: "left",
    paddingLeft: "1.5rem",
    lineHeight: "1.6",
  },
};

export default Help;
