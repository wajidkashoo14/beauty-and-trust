import styles from '../styles/hero.module.css'

export default function Hero() {
  return (
    <div className={styles.container}>
      <h3 className="poppins z-100 text-white text-lg">A TEAM OF PROFESSIONAL EXPERTS</h3>
      <h1 className="poppins z-50 text-white text-7xl">Trust Our Experience</h1>
      <button>Get in touch</button>
    </div>
  );
}
