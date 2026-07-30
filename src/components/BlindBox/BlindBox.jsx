import { useCallback, useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'
import boxImg from './sonny_angel-removebg-preview.png'
import { RARITY, drawPick } from './collectibles.js'
import styles from './BlindBox.module.css'

const HOLD_MS = 1500
const RING_R = 168
const RING_C = 2 * Math.PI * RING_R

const RARITY_CONFETTI = {
  common: { particleCount: 60, spread: 70, colors: ['#ffcbe0', '#ff82b2', '#ffffff'] },
  rare: { particleCount: 110, spread: 90, colors: ['#ff82b2', '#f75c96', '#ffe6f0', '#ffffff'] },
  legendary: {
    particleCount: 200,
    spread: 120,
    colors: ['#8a1f45', '#df3d78', '#ff82b2', '#ffcbe0', '#ffffff'],
  },
}

export default function BlindBox() {
  // idle → charging → bursting → revealed
  const [phase, setPhase] = useState('idle')
  const [charge, setCharge] = useState(0)
  const [result, setResult] = useState(null)

  const rafRef = useRef(0)
  const timersRef = useRef([])
  const phaseRef = useRef(phase)
  phaseRef.current = phase

  const clearTimers = useCallback(() => {
    cancelAnimationFrame(rafRef.current)
    timersRef.current.forEach(clearTimeout)
    timersRef.current = []
  }, [])

  useEffect(() => clearTimers, [clearTimers])

  const later = useCallback((fn, ms) => {
    timersRef.current.push(setTimeout(fn, ms))
  }, [])

  const burst = useCallback(() => {
    cancelAnimationFrame(rafRef.current)
    setCharge(1)
    setPhase('bursting')

    const pick = drawPick()
    const conf = RARITY_CONFETTI[pick.rarity]

    // box pops first, then the shower, then the card
    later(() => {
      confetti({ ...conf, origin: { y: 0.45 }, startVelocity: 42, scalar: 1.1 })
      if (pick.rarity === 'legendary') {
        later(() => confetti({ ...conf, origin: { y: 0.4, x: 0.28 }, angle: 60 }), 180)
        later(() => confetti({ ...conf, origin: { y: 0.4, x: 0.72 }, angle: 120 }), 330)
      }
    }, 180)

    later(() => {
      setResult(pick)
      setPhase('revealed')
    }, 800)
  }, [later])

  const startHold = useCallback(() => {
    if (phaseRef.current !== 'idle') return
    setPhase('charging')
    const start = performance.now()
    const tick = (now) => {
      const p = Math.min(1, (now - start) / HOLD_MS)
      setCharge(p)
      if (p >= 1) burst()
      else rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
  }, [burst])

  const cancelHold = useCallback(() => {
    if (phaseRef.current !== 'charging') return
    cancelAnimationFrame(rafRef.current)
    setPhase('idle')
    setCharge(0)
  }, [])

  function reset() {
    clearTimers()
    setResult(null)
    setCharge(0)
    setPhase('idle')
  }

  const charging = phase === 'charging'
  const bursting = phase === 'bursting'
  const showBox = phase !== 'revealed'

  return (
    <section className={styles.section} id="blind-box">
      <div className={styles.stage}>
        <AnimatePresence mode="wait">
          {showBox ? (
            <motion.div
              key="box"
              className={styles.boxZone}
              exit={{ opacity: 0, transition: { duration: 0.18 } }}
            >
              <div className={styles.boxHolder}>
                <svg className={styles.ring} viewBox="0 0 360 360" aria-hidden="true">
                  <circle className={styles.ringTrack} cx="180" cy="180" r={RING_R} />
                  <circle
                    className={styles.ringFill}
                    cx="180" cy="180" r={RING_R}
                    strokeDasharray={RING_C}
                    strokeDashoffset={RING_C * (1 - charge)}
                    style={{ opacity: charge > 0 ? 1 : 0 }}
                  />
                </svg>

                <div
                  className={styles.glow}
                  style={{ opacity: charge * 0.8, transform: `scale(${0.65 + charge * 0.6})` }}
                  aria-hidden="true"
                />

                {bursting && <span className={styles.rays} aria-hidden="true" />}
                {bursting && <span className={styles.flash} aria-hidden="true" />}

                <button
                  type="button"
                  className={`${styles.boxButton} ${charging ? styles.charging : ''} ${
                    bursting ? styles.bursting : ''
                  }`}
                  style={{ '--amp': charge * 8, '--charge': charge }}
                  onPointerDown={startHold}
                  onPointerUp={cancelHold}
                  onPointerLeave={cancelHold}
                  onPointerCancel={cancelHold}
                  onContextMenu={(e) => e.preventDefault()}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      startHold()
                    }
                  }}
                  onKeyUp={cancelHold}
                  disabled={bursting}
                  aria-label="hold to open your blind box"
                >
                  <img src={boxImg} alt="" className={styles.boxImg} draggable="false" />
                </button>
              </div>

              <span className={`${styles.prompt} ${charging ? styles.promptActive : ''}`}>
                {bursting ? '✨' : charging ? 'keep holding…' : 'hold to open'}
              </span>
            </motion.div>
          ) : (
            <motion.div
              key="reveal"
              className={styles.revealZone}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <motion.div
                className={`${styles.card} ${styles[result.rarity]}`}
                initial={{ scale: 0.3, opacity: 0, y: 30, rotate: -6 }}
                animate={{ scale: 1, opacity: 1, y: 0, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 220, damping: 16 }}
              >
                <img src={result.src} alt="" className={styles.cardPhoto} />
                <span className={styles.badge}>{RARITY[result.rarity].label}</span>
              </motion.div>

              <motion.button
                type="button"
                className={styles.again}
                onClick={reset}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
              >
                open another
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
