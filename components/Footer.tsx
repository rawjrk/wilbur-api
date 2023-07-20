import styles from './Footer.module.css'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      rawjrk &bull;&nbsp;
      <Link href="https://github.com/rawjrk/wilbur-api">github</Link>
    </footer>
  )
}
