import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'
import BoxArt from './BoxArt.jsx'
import { RARITY, drawCollectible } from './collectibles.js'
import CollectionGrid from './CollectionGrid.jsx'
import { useCollection } from '../../hooks/useCollection.js'
import styles from './BlindBox.module.css'

const RARITY_CONFETTI = {
  common: { particleCount: 30, spread: 55, colors: ['#83d3f5', '#ff8fb9'] },
  rare: { particleCount: 70, spread: 75, colors: ['#ff6aa5', '#5bc0ea', '#ffffff'] },
  legendary: { particleCount: 160, spread: 110, colors: ['#ffcd5c', '#ff6aa5', '#83d3f5'] },
}

export default function BlindBox() {
  const [phase, setPhase] = useState('idle') // idle | shaking | revealed
  const [result, setResult] = useState(null)
  const { collected, addToCollection } = useCollection()

  function openBox() {
    if (phase !== 'idle') return
    setPhase('shaking')
    window.setTimeout(() => {
      const item = drawCollectible()
      setResult(item)
      setPhase('revealed')
      addToCollection(item.id)

      const conf = RARITY_CONFETTI[item.rarity]
      confetti({ ...conf, origin: { y: 0.55 } })
      if (item.rarity === 'legendary') {
        window.setTimeout(() => confetti({ ...conf, origin: { y: 0.45, x: 0.3 } }), 200)
        window.setTimeout(() => confetti({ ...conf, origin: { y: 0.45, x: 0.7 } }), 350)
      }
    }, 650)
  }

  function openAnother() {
    setResult(null)
    setPhase('idle')
  }

  return (
    <section className="section" id="blind-box">
      <div className="container">
        <span className="section-eyebrow">The main event</span>
        <h2 className="section-title">Open your blind box</h2>
        <p className="section-subtitle">
          Nine collectibles, three rarity tiers. Some are common, some are rare, and one is
          legendary. Keep opening to collect them all.
        </p>

        <div className={styles.stage}>
          <AnimatePresence mode="wait">
            {phase !== 'revealed' ? (
              <motion.button
                key="box"
                type="button"
                className={styles.boxButton}
                onClick={openBox}
                disabled={phase === 'shaking'}
                animate={
                  phase === 'shaking'
                    ? { rotate: [0, -8, 8, -7, 7, -4, 4, 0], x: [0, -4, 4, -3, 3, 0] }
                    : { y: [0, -8, 0] }
                }
                transition={
                  phase === 'shaking'
                    ? { duration: 0.65, ease: 'easeInOut' }
                    : { duration: 2.4, repeat: Infinity, ease: 'easeInOut' }
                }
                whileHover={phase === 'idle' ? { scale: 1.04 } : undefined}
                exit={{ scale: 0.6, opacity: 0, transition: { duration: 0.25 } }}
              >
                <BoxArt className={styles.boxArt} />
                <span className={styles.boxPrompt}>
                  {phase === 'shaking' ? 'Opening…' : 'Tap to open'}
                </span>
              </motion.button>
            ) : (
              <motion.div
                key="reveal"
                className={`${styles.revealCard} ${styles[result.rarity]}`}
                initial={{ scale: 0.4, opacity: 0, y: 40 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 260, damping: 18 }}
              >
                <span className={styles.rarityBadge}>{RARITY[result.rarity].label}</span>
                <result.icon className={styles.revealIcon} />
                <p className={styles.revealPhrase}>&ldquo;{result.phrase}&rdquo;</p>
              </motion.div>
            )}
          </AnimatePresence>

          {phase === 'revealed' && (
            <motion.button
              type="button"
              className="pink-btn"
              onClick={openAnother}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Open another
            </motion.button>
          )}
        </div>

        <CollectionGrid collected={collected} />
      </div>
    </section>
  )
}
