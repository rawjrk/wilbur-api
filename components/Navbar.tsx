import styles from './Navbar.module.css'
import Link from 'next/link'

export default function NavigationBar() {
  return (
    <nav className={styles.navigation}>
      <Link href="/">
        <h3>Wilbur Quotes</h3>
      </Link>
      <Link href="/api">API</Link>
      <Link href="/docs">Docs</Link>
    </nav>
  )
}
