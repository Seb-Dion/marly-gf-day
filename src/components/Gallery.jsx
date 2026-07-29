import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PhotoSlot from './PhotoSlot.jsx'
import styles from './Gallery.module.css'

const PHOTOS = [
  { src: 'gallery-1.jpg', label: 'First date', aspect: '1 / 1' },
  { src: 'gallery-2.jpg', label: 'A trip we took', aspect: '4 / 5' },
  { src: 'gallery-3.jpg', label: 'Being goofy', aspect: '1 / 1' },
  { src: 'gallery-4.jpg', label: 'A good day', aspect: '4 / 5' },
  { src: 'gallery-5.jpg', label: 'Us, being us', aspect: '1 / 1' },
  { src: 'gallery-6.jpg', label: 'One more for the road', aspect: '4 / 5' },
]

export default function Gallery() {
  const [open, setOpen] = useState(null)

  return (
    <section className="section" id="gallery">
      <div className="container">
        <span className="section-eyebrow">Us</span>
        <h2 className="section-title">A few of my favorites</h2>
        <p className="section-subtitle">
          Tap a photo to see it bigger. (Swap the placeholders for real ones in{' '}
          <code>public/photos/</code>.)
        </p>

        <div className={styles.grid}>
          {PHOTOS.map((photo, i) => (
            <button
              key={photo.src}
              type="button"
              className={styles.tile}
              onClick={() => setOpen(photo)}
              style={{ '--tilt': i % 2 === 0 ? '-1.5deg' : '1.5deg' }}
            >
              <PhotoSlot src={photo.src} alt={photo.label} aspect={photo.aspect} label={photo.label} />
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.lightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
          >
            <motion.div
              className={styles.lightboxInner}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <PhotoSlot src={open.src} alt={open.label} aspect="4 / 5" label={open.label} />
              <p className={styles.caption}>{open.label}</p>
              <button type="button" className={styles.close} onClick={() => setOpen(null)} aria-label="Close">
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
