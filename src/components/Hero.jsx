import { motion } from 'framer-motion'
import PhotoSlot from './PhotoSlot.jsx'
import CountdownBanner from './CountdownBanner.jsx'
import styles from './Hero.module.css'

const FLOATERS = [
  { left: '6%', top: '18%', size: 20, delay: 0 },
  { left: '88%', top: '12%', size: 26, delay: 0.6 },
  { left: '14%', top: '72%', size: 16, delay: 1.1 },
  { left: '92%', top: '68%', size: 22, delay: 0.3 },
  { left: '48%', top: '8%', size: 14, delay: 0.9 },
  { left: '78%', top: '85%', size: 18, delay: 1.4 },
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

      <div className={`container ${styles.inner}`}>
        <motion.div
          className={styles.copy}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className={styles.eyebrow}>National Girlfriend's Day · August 1st</span>
          <h1 className={styles.title}>
            Happy Girlfriend's Day, <span className={styles.name}>Marly</span>
          </h1>
          <p className={styles.subtitle}>
            A little corner of the internet, made just for you.
          </p>
          <a href="#blind-box" className="pink-btn">
            Open your gift ↓
          </a>
        </motion.div>

        <motion.div
          className={styles.photoWrap}
          initial={{ opacity: 0, scale: 0.92, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: -3 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
        >
          <PhotoSlot
            src="hero.jpg"
            alt="Us"
            aspect="4 / 5"
            label="Your favorite photo of us"
            className={styles.heroPhoto}
          />
        </motion.div>
      </div>

      <div className="container">
        <CountdownBanner />
      </div>
    </header>
  )
}
