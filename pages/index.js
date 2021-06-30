import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Navbar from '../comps/navbar'

export default function Home() {
  return (
    <div className={styles.container}>
     <Navbar />
     <div className={styles.header}>
      <h1 className={styles.head}>Track your favorite food trucks</h1>
      <h1 className={styles.head}>Try Food Truck Trackr!</h1>
      <button className={styles.button}><a href="/register">Learn More</a></button>
     </div>
    </div>
  )
}
