import { motion } from 'framer-motion'
import styles from './Hero.module.css'

const FLOATERS = [
  { left: '7%', top: '22%', size: 20, delay: 0 },
  { left: '88%', top: '18%', size: 26, delay: 0.6 },
  { left: '16%', top: '74%', size: 15, delay: 1.1 },
  { left: '91%', top: '70%', size: 22, delay: 0.3 },
  { left: '46%', top: '10%', size: 13, delay: 0.9 },
  { left: '76%', top: '86%', size: 18, delay: 1.4 },
]

function HeartGlyph({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 21s-7.5-4.7-10.2-9.3C.2 8.7 1.4 5 5 4.1c2.2-.5 4.1.5 5 2.3.9-1.8 2.8-2.8 5-2.3 3.6.9 4.8 4.6 3.2 7.6C19.5 16.3 12 21 12 21z" />
    </svg>
  )
}

export default function Hero() {
  return (
    <header className={styles.hero}>
      <div className={styles.floaters} aria-hidden="true">
        {FLOATERS.map((f, i) => (
          <span
            key={i}
            className={styles.floater}
            style={{ left: f.left, top: f.top, animationDelay: `${f.delay}s` }}
          >
            <HeartGlyph size={f.size} />
          </span>
        ))}
      </div>

      <motion.div
        className={`container ${styles.inner}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <h1 className={styles.title}>happy national gf's day baby</h1>
        <p className={styles.subtitle}>
          here's a blindbox of some of our favorite pictures!
        </p>
      </motion.div>
    </header>
  )
}
