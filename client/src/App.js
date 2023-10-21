import { useState } from "react";
import { useFetch } from "./hooks";

import styles from "./App.module.css";

import monkeStill from "../assets/images/monke-still.png";
import monkeThink from "../assets/images/monke-think.png";
import monkeTalk from "../assets/images/monke-talk.png";
import monkeError from "../assets/images/monke-error.png";

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
    <div className={styles.monke}>
      <img
        src={
          loading || waiting
            ? monkeThink
            : error
            ? monkeError
            : quote
            ? monkeTalk
            : monkeStill
        }
        alt="Monke face"
      />
      <p>{quote && !(loading || waiting || error) ? quote : ""}</p>
      <p className={styles.error}>
        {error && !(loading || waiting) ? "ERROR: MONKE MAD NO RESPONSE!" : ""}
      </p>
      <button onClick={generate}>Generate</button>
    </div>
  );
}

export default App;
