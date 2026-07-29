import { useState } from 'react'
import styles from './PhotoSlot.module.css'

/**
 * Renders a photo from /public/photos/<src>. Falls back to a labeled
 * placeholder if the file hasn't been added yet, so the layout looks
 * intentional instead of broken until real photos are dropped in.
 */
export default function PhotoSlot({ src, alt, aspect = '1 / 1', label, className = '' }) {
  const [errored, setErrored] = useState(false)
  const path = `${import.meta.env.BASE_URL}photos/${src}`

  if (errored) {
    return (
      <div className={`${styles.placeholder} ${className}`} style={{ aspectRatio: aspect }}>
        <svg viewBox="0 0 48 48" fill="none" className={styles.icon} aria-hidden="true">
          <rect x="5" y="12" width="38" height="28" rx="6" stroke="currentColor" strokeWidth="2.4" />
          <circle cx="24" cy="26" r="8" stroke="currentColor" strokeWidth="2.4" />
          <path d="M17 12L20 7H28L31 12" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className={styles.placeholderLabel}>{label || 'Add a photo'}</span>
        <span className={styles.placeholderHint}>public/photos/{src}</span>
      </div>
    )
  }

  return (
    <img
      src={path}
      alt={alt}
      className={`${styles.photo} ${className}`}
      style={{ aspectRatio: aspect }}
      onError={() => setErrored(true)}
      loading="lazy"
    />
  )
}
