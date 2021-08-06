import Link from 'next/link';
import styles from '../styles/Nav.module.css'
import firebase from 'firebase'
import React from 'react'
import {removeUserCookie} from '../pages/api/userCookie'
class NavBar extends React.Component {
    render() {
        console.log(this.props.isLoggedIn)
        const signOutUser = e => {
            firebase.auth().signOut().then(function() {
                // Sign-out successful.
                removeUserCookie();
                }).catch(function(error) {
                // An error happened.
                console.log(error.message)
                  });
                }
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
                 {this.props.isLoggedIn === true ? "" : <a className={styles.link}>Login</a>}
                </Link>
                <Link href="/signup">
                {this.props.isLoggedIn == true ? "" : <a className={styles.link}>Register</a>}
                </Link>
            <Link href="/contact">
                <a className={styles.link}>Contact</a>
                </Link>
            {this.props.isLoggedIn === true ? <a className={styles.link} onClick={signOutUser}>Logout</a>: "" }
        </nav>
        </div>
    );
}
}
export default NavBar;