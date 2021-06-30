import Link from 'next/link';
import styles from '../styles/Nav.module.css'


const Navbar = () => {
    return ( 
        <div className={styles.mainnavbar}>
             <div className={styles.logo}>
             <Link href="/">
                <a className={styles.link}><h1>Food Truck Trackr</h1></a>
                </Link>
            </div>
        <nav className= {styles.navbar}>
            <Link href="/about">
                <a className={styles.link}>About</a>
                </Link>
            <Link href="/signin">
                <a className={styles.link}>Sign In</a>
                </Link>
            <Link href="/register">
                <a className={styles.link}>Register</a>
                </Link>
            <Link href="/contact">
                <a className={styles.link}>Contact</a>
                </Link>
        </nav>
        </div>
    );
}
 
export default Navbar;