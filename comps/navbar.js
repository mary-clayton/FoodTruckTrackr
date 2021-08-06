import Link from 'next/link';
import styles from '../styles/Nav.module.css'
import firebase from 'firebase'
import React from 'react'
import { withRouter } from 'next/router';

class NavBar extends React.Component {
    constructor(props) {
        super(props)
    
    this.state = {
        user: firebase.auth().currentUser
    } 
}

    render() {
        const signOutUser = () => {
            firebase.auth()
            .signOut()
            .then(this.props.router.push("/"))
            .catch(function(error) {
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
            <Link href="/dashboard">
                 {this.state.user && <a className={styles.link}>Dashboard</a>}
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
            {this.state.user && <a className={styles.link} onClick={signOutUser()}>Logout</a> }
        </nav>
        </div>
    );
}
}

export default withRouter(NavBar);