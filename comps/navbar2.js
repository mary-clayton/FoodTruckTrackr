import Link from 'next/link';
import styles from '../styles/Nav.module.css'


const Navbar = () => {
    return ( 
        <div className={styles.mainnavbar}>
             <div className={styles.logo}>
             <Link href="/">
                <a className={styles.link}><img className={styles.logo} src="./logo.png"/></a>
                </Link>
            </div>
        <nav className= {styles.navbar}>
            <Link href="/about">
                <a className={styles.link}>About</a>
                </Link>
            <Link href="/login">
                <a className={styles.link}>Login</a>
                </Link>
            <Link href="/contact">
                <a className={styles.link}>Contact</a>
                </Link>
                <Link href="/">
                <a className={styles.link}>Logout</a>
                </Link>
        </nav>
        </div>
    );
}
 
export default Navbar;