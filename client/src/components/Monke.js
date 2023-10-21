import styles from "./Monke.module.css";

import monkeStill from "../assets/images/face/still.png";
import monkeThink from "../assets/images/face/think.png";
import monkeTalk from "../assets/images/face/talk.png";
import monkeError from "../assets/images/face/error.png";

function Monke({ status = "still", quote = "", generate = (f) => f }) {
  let imgSrc;

  switch (status) {
    case "error":
      imgSrc = monkeError;
      break;
    case "think":
      imgSrc = monkeThink;
      break;
    case "talk":
      imgSrc = monkeTalk;
      break;
    default:
      imgSrc = monkeStill;
      break;
  }

  return (
    <div className={styles.monke}>
      <img src={imgSrc} alt="Monke face" />

      <div>
        <p>{status === "talk" ? `- ${quote}` : ""}</p>
        <p className={styles.error}>
          {status === "error" ? "ERROR: MONKE MAD NO RESPONSE!" : ""}
        </p>
      </div>

      <button onClick={generate}>Generate Quote</button>
    </div>
  );
}

export default Monke;
