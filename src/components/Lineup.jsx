import { PICKS, RARITY } from './BlindBox/collectibles.js'
import styles from './Lineup.module.css'

export default function Lineup() {
  return (
    <section className={styles.section} id="lineup">
      <div className="container">
        <ul className={styles.grid}>
          {PICKS.map((pick, i) => (
            <li key={pick.id} className={styles.item} style={{ '--tilt': i % 2 === 0 ? '-1.5deg' : '1.5deg' }}>
              <img src={pick.src} alt="" className={styles.photo} loading="lazy" />
              <span className={`${styles.rarity} ${styles[pick.rarity]}`}>
                {RARITY[pick.rarity].label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
