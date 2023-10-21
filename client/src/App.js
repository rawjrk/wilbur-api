import { useState } from "react";
import { useFetch } from "./hooks";

import Monke from "./components/Monke";

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

  const monkeStatus =
    loading || waiting ? "think" : error ? "error" : quote ? "talk" : "still";

  return <Monke status={monkeStatus} quote={quote} generate={generate} />;
}

export default App;
