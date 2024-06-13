import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);

  };

  return (
    <div id="main">
      <label htmlFor="name">Enter your name:</label>
      <br />
      <br />
      <input 
      type="text" 
      id="name" 
      value={name} 
      onChange={handleChange} />

     <p>Hello {name}!</p>
    </div>
  );
};

export default App;
