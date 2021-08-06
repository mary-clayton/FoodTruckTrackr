import styles from '../styles/Home.module.css';
import Image from 'next/image';
import abouthead from '../public/aboutheader.png';
const About = () => {
    return ( 
        <div>
            <Image src={abouthead} alt="about header"/>
            <div className={styles.mission}>
                <h1 className={styles.headmission}>Our Mission</h1>
                <p className={styles.para1}></p>
            </div>
        </div>
     );
}
 
export default About;