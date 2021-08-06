import Link from 'next/link';
import styles from '../styles/Nav.module.css'
import React from 'react'


class NavBar extends React.Component {
    state = {
    } 
    
    render() {
             
        
    return ( 
        <div className={styles.mainnavbar}>
             <div className={styles.logo}>
             <Link href="/">
                <a className={styles.link}><img className={styles.logo} src="./logo.png"/></a>
                </Link>
            </div>
        <nav className= {styles.navbar}>
            <Link href="/dashboard">
                 {this.state.user ? <a className={styles.link}>Dashboard</a>: ""}
                </Link>
            <Link href="/about">
                <a className={styles.link}>About</a>
                </Link>
            <Link href="/login">
                 {this.state.user ?  "" : <a className={styles.link}>Login</a>}
                </Link>
                <Link href="/signup">
                {this.state.user ? "" : <a className={styles.link}>Register</a>}
                </Link>
            <Link href="/contact">
                <a className={styles.link}>Contact</a>
                </Link>
            {this.state.user && <a className={styles.link}>Logout</a> }
        </nav>
        </div>
    );
}
}

export default NavBar;