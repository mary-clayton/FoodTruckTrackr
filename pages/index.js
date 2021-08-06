import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
     <div className={styles.header}>
      <h1 className={styles.head}>Track your favorite food trucks</h1>
      <h1 className={styles.head}>Try Food Truck Trackr!</h1>
      <button className={styles.button}><Link href="/signup">Learn More</Link></button>
     </div>
    </div>
  )
}
