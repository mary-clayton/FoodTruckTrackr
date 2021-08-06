import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Nav.module.css'
import { useContext } from 'react'
import  AuthContext  from '../stores/authContext';


export default function Navbar () {
   const { user, login, logout } = useContext(AuthContext)          
        
    return ( 
        <div className={styles.mainnavbar}>
             <div className={styles.logo}>
             <Link href="/">
                <a className={styles.link}><img className={styles.logo} src="./logo.png"/></a>
                </Link>
            </div>
        <nav className= {styles.navbar}>
            <Link href="/dashboard">
                { user ? <a className={styles.link}>Dashboard</a> : ""}
                </Link>
            <Link href="/about">
                <a className={styles.link}>About</a>
                </Link>
                {user ? "": <a className={styles.link} onClick={login}>Login/Register</a>} 
            <Link href="/contact">
                <a className={styles.link}>Contact</a>
                </Link>
            {user ? <a className={styles.link} onClick={logout}>Logout</a>: ""}
        </nav>
        </div>
    );
}