import styles from '../styles/Home.module.css'
import Navbar from '../comps/navbar'
const Login = () => {
    return ( 
        <div className={styles.login}>
            <Navbar/>
            <div className={styles.card}>
    
                <form className={styles.form1}>
                <h1>Log In</h1>
                    <label for="username">Username:</label>
                    <input className={styles.inputaccess} type="text"></input>
                    <br/>
                    <label for="password">password</label>
                    <input className={styles.inputaccess} type="password"></input>
                    <br/>
                    <button className={styles.button}>Login</button>
                </form>
            </div>
        </div>
     );
}
 
export default Login;