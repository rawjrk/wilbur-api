import { useState } from "react";

function App() {
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleClick = async () => {
    try {
      setError(false);
      setLoading(true);
      const response = await fetch("/api");
      const data = await response.json();

      setTimeout(() => {
        setQuote(data.quotes[0]);
        setLoading(false);
      }, 3000);
    } catch (err) {
      console.error(err);

      setTimeout(() => {
        setError(true);
        setLoading(false);
      }, 3000);
    }
  };

  return (
    <>
      <h2>Wilbur Says</h2>
      {loading ? (
        <p>🍌 [loading...]</p>
      ) : error ? (
        <p>🤷 [error]</p>
      ) : quote ? (
        <p>🐵 {quote}</p>
      ) : (
        <p>🐒 [empty]</p>
      )}
      <button onClick={handleClick}>Generate!</button>
    </>
  );
}

export default App;
