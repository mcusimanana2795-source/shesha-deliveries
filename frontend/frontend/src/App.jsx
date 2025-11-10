import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("https://YOUR-BACKEND-URL.onrender.com/") // Replace with your Render backend URL
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => setMessage("Error fetching backend"));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Hello, world!</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;

