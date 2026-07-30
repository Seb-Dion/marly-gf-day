import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './WelcomeModal.module.css'

export default function WelcomeModal() {
  const [open, setOpen] = useState(true)
  const closeRef = useRef(null)

  // esc to close + no background scrolling while it's up
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    closeRef.current?.focus()
    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={() => setOpen(false)}
        >
          <motion.div
            className={styles.card}
            role="dialog"
            aria-modal="true"
            aria-label="a message for you"
            initial={{ scale: 0.85, opacity: 0, y: 24 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 12 }}
            transition={{ type: 'spring', stiffness: 240, damping: 22 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              ref={closeRef}
              type="button"
              className={styles.close}
              onClick={() => setOpen(false)}
              aria-label="close"
            >
              ✕
            </button>

            {/* TODO(you): replace this paragraph with your message to Marly. */}
            <p className={styles.message}>
              Happy national girlfriend's day to the only girlfriend ever. I've been wanting to make
              a website for you for a while now, and once I saw that it was gf's day I was like wow
              this is perfect! I hope you enjoy opening your blind boxes bubba, this was so fun to make
              and it definitely helped me refine my coding skills before starting my job hehe. My perfect
              girl, I miss you more than words can describe. I love you more and more everyday, two weeks from
              today we'll be reunited!!
            </p>
            <span>-Sebastian♡</span>

            <button type="button" className={styles.enter} onClick={() => setOpen(false)}>
              open my gift
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
