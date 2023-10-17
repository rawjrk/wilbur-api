import { useFetch } from "./hooks";

function App() {
  const [generate, data, loading, error] = useFetch("/api", { quotes: [null] });
  const [quote] = data.quotes;

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
      <button onClick={generate}>Generate!</button>
    </>
  );
}

export default App;
