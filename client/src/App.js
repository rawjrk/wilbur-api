import { useState } from "react";

function App() {
  const [quote, setQuote] = useState("");

  const handleClick = async () => {
    try {
      fetch("/api")
        .then((res) => res.json())
        .then((data) => setQuote(data.quotes[0]));
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <h2>Wilbur Says</h2>
      <p>{quote}</p>
      <button onClick={handleClick}>Generate!</button>
    </>
  );
}

export default App;
