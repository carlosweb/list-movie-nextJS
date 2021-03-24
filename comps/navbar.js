import Link from 'next/link'
import styles from '../styles/Home.module.scss'

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link href="/">
                    <h1>Movie</h1>
                </Link>
            </div>
            <ul>
                <li>
                    <Link href="/busca">Sobre</Link>
                </li>
                <li>
                    <Link href="/busca">Ir para busca</Link>
                </li>
                <li>
                    <Link href="/contact">Contato</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;