import { useEffect, useRef } from 'react'
import confetti from 'canvas-confetti'
import { COLLECTIBLES, RARITY } from './collectibles.js'
import styles from './CollectionGrid.module.css'

export default function CollectionGrid({ collected }) {
  const celebratedRef = useRef(false)

  useEffect(() => {
    if (collected.length === COLLECTIBLES.length && !celebratedRef.current) {
      celebratedRef.current = true
      confetti({
        particleCount: 160,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#ff8fb9', '#83d3f5', '#ffcd5c', '#f2508c'],
      })
    }
  }, [collected.length])

  const complete = collected.length === COLLECTIBLES.length

  return (
    <div className={styles.wrap}>
      <div className={styles.progressRow}>
        <span className={styles.progressLabel}>
          {complete ? 'You caught them all! 💕' : `Collection: ${collected.length} / ${COLLECTIBLES.length}`}
        </span>
        <div className={styles.progressTrack}>
          <div
            className={styles.progressFill}
            style={{ width: `${(collected.length / COLLECTIBLES.length) * 100}%` }}
          />
        </div>
      </div>

      <div className={styles.grid}>
        {COLLECTIBLES.map((item) => {
          const unlocked = collected.includes(item.id)
          const Icon = item.icon
          return (
            <div
              key={item.id}
              className={`${styles.slot} ${styles[item.rarity]} ${unlocked ? styles.unlocked : styles.locked}`}
              title={unlocked ? item.phrase : 'Not yet unlocked'}
            >
              {unlocked ? (
                <>
                  <Icon className={styles.icon} />
                  <span className={styles.rarityTag}>{RARITY[item.rarity].label}</span>
                </>
              ) : (
                <span className={styles.question}>?</span>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
