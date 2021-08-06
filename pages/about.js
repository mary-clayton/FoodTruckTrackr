import styles from '../styles/Home.module.css';
import "../styles/Home.module.css"
const About = () => {
    return ( 
        <div>
            <div className ={styles.aboutheader}></div>
            <div className={styles.mission}>
                <h1 className={styles.headmission}>Our Mission</h1>
                <p className={styles.para1}>This is a passion project designed by me and coded by me.</p>
            </div>
        </div>
     );
}
 
export default About;