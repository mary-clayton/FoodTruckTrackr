import React, { useState } from 'react'
import styles from '../styles/Home.module.css'
import Navbar from '../comps/navbar'
import firebase from 'firebase/app'
import 'firebase/auth'

  const Register = () => {

    return ( 
        <div className={styles.login}>
        <Navbar/>
        <div className={styles.card}>

            <form className={styles.form1}>
            <h1>Register</h1>
                <label htmlFor="email">Email:</label>
                <input className={styles.inputaccess} type="email"
                
                ></input>
                <br/>
                <label htmlFor="password">password</label>
                <input className={styles.inputaccess} type="password"
                
                ></input>
                <br/>
                <button className={styles.button}>Register</button>
                
            </form>
        </div>
    </div>
     );
}
 
export default Register;