import {Link} from 'react-router-dom'
import styles from './NavBar.module.css'

function NavBar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav_list}>
        <li>
          <Link to="/" className={styles.link}>Home</Link>
        </li>
        <li>
          <Link to="/empresa" className={styles.link}>Empresa</Link>
        </li>
        <li>
          <Link to="/contato" className={styles.link}>Contato</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar