import { useState } from "react";
import { useFetch } from "./hooks";

function App() {
  const [run, data, loading, error] = useFetch("/api", { quotes: [null] });
  const [quote] = data.quotes;

  const [waiting, setWaiting] = useState(false);

  const generate = () => {
    setWaiting(true);
    run();

    setTimeout(() => {
      setWaiting(false);
    }, 1000);
  };

  return (
    <>
      <h2>Wilbur Says</h2>
      {loading || waiting ? (
        <p>🍌 [loading...]</p>
      ) : error ? (
        <p>🤷 [error]</p>
      ) : quote ? (
        <p>🐵 {quote}</p>
      ) : (
        <p>🐒 [empty]</p>
      )}
      <button onClick={generate}>Generate!</button>
    </>
  );
}

export default App;
