import styles from "./Monke.module.css";
import monkeStill from "../assets/images/monke-still.png";
import monkeThink from "../assets/images/monke-think.png";
import monkeTalk from "../assets/images/monke-talk.png";
import monkeError from "../assets/images/monke-error.png";

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

      <p>{status === "talk" ? quote : ""}</p>
      <p className={styles.error}>
        {status === "error" ? "ERROR: MONKE MAD NO RESPONSE!" : ""}
      </p>

      <button onClick={generate}>Generate</button>
    </div>
  );
}

export default Monke;
