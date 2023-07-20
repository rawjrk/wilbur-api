import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <button className={styles.generateButton}>Generate Quote</button>
      <p className={styles.description}>
        Press the button, so the wise monke speak to you.
      </p>
    </>
  )
}
