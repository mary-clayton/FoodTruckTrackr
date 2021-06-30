import Navbar from '../comps/navbar'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import abouthead from '../public/aboutheader.png'
const About = () => {
    return ( 
        <div>
            <Navbar/>
            <Image src={abouthead}/>
            <div className={styles.mission}>
                <h1 className={styles.headmission}>Our Mission</h1>
                <p className={styles.para1}>Every true "foodie" worth their salt knows that some of the best food in any city can be found on food trucks - but 
                    knowing when and where those trucks will be can be next to impossible, and discovering new ones often relies on 
                    word-of-mouth that is long on tales of delicious, but short on actual details. FoodTruck TrackR was designed to 
                    make finding and eating at a food truck fast, easy and fun.  Quickly see all of our Operator partners' nearby food 
                    trucks that currently open, view their current real-time GPS location, know the scheduled arrival and departure times, 
                    view photos, read customer reviews and much more, all in our easy to use app.  
                    Try FoodTruck TrackR today, and enjoy the best food YOUR city has to offer.</p>
            </div>
        </div>
     );
}
 
export default About;