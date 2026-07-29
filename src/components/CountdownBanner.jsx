import { useEffect, useRef, useState } from 'react'
import confetti from 'canvas-confetti'
import styles from './CountdownBanner.module.css'

function getPhase() {
  const now = new Date()
  const year = now.getFullYear()
  const target = new Date(year, 7, 1, 0, 0, 0) // August 1st
  const dayAfter = new Date(year, 7, 2, 0, 0, 0)

  if (now < target) return { phase: 'countdown', target, now }
  if (now < dayAfter) return { phase: 'today', now }
  return { phase: 'after', now }
}

function splitRemaining(ms) {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000))
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  }
}

export default function CountdownBanner() {
  const [state, setState] = useState(getPhase)
  const firedConfetti = useRef(false)

  useEffect(() => {
    const id = setInterval(() => setState(getPhase()), 1000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    if (state.phase === 'today' && !firedConfetti.current) {
      firedConfetti.current = true
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.3 },
        colors: ['#ff8fb9', '#83d3f5', '#ffcd5c'],
      })
    }
  }, [state.phase])

  if (state.phase === 'today') {
    return (
      <div className={`${styles.banner} ${styles.today}`}>
        🎉 It's National Girlfriend's Day — today is all about you! 🎉
      </div>
    )
  }

  if (state.phase === 'after') {
    return (
      <div className={styles.banner}>
        💗 Girlfriend's Day may have passed, but every day is Marly day.
      </div>
    )
  }

  const { days, hours, minutes, seconds } = splitRemaining(state.target - state.now)

  return (
    <div className={styles.banner}>
      <span className={styles.label}>Counting down to your day</span>
      <div className={styles.units}>
        <Unit value={days} label="days" />
        <Unit value={hours} label="hrs" />
        <Unit value={minutes} label="min" />
        <Unit value={seconds} label="sec" />
      </div>
    </div>
  )
}

function Unit({ value, label }) {
  return (
    <div className={styles.unit}>
      <span className={styles.unitValue}>{String(value).padStart(2, '0')}</span>
      <span className={styles.unitLabel}>{label}</span>
    </div>
  )
}
