import styles from './Note.module.css'

export default function Note() {
  return (
    <section className="section" id="note">
      <div className="container">
        <div className={styles.card}>
          <span className={styles.quoteMark}>&ldquo;</span>
          {/* TODO(you): replace this paragraph with your actual note to Marly before sharing the link. */}
          <p className={styles.text}>
            Write something here, Marly — this is the part where I get to ramble about
            everything I love about you. Replace this placeholder paragraph in{' '}
            <code>src/components/Note.jsx</code> with the real thing before you send this to her.
          </p>
          <span className={styles.signature}>— [sign it with your name]</span>
        </div>
      </div>
    </section>
  )
}
