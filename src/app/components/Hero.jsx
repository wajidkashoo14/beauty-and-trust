import { useRouter } from 'next/navigation';
import styles from '../styles/hero.module.css'

export default function Hero() {
  const router = useRouter()
  return (
    <div className={styles.container}>
      <h3 className="poppins  text-white text-lg">A TEAM OF PROFESSIONAL EXPERTS</h3>
      <h1 className="poppins text-white text-6xl">Trust Our Experience</h1>
      <button onClick={() => router.push('/contact')}>Get in touch</button>
    </div>
  );
}
