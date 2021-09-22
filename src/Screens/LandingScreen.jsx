import React, { useState } from "react";
import "../Styles/Landing.css";

export default function LandingScreen() {
  const [focused, setFocused] = useState(false);
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  return (
    <div className="Container">
      <p>Hi! Welcome to</p>
      <p>Re-Fractor</p>
      <div className="inputContainer">
        <h3>What should we call you?</h3>
        <input
          placeholder="Tell us a bit about yourself"
          type="text"
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </div>
    </div>
  );
}
