import pick1 from '../../assets/picks/pick-1.jpg'
import pick2 from '../../assets/picks/pick-2.jpg'
import pick3 from '../../assets/picks/pick-3.jpg'
import pick4 from '../../assets/picks/pick-4.jpg'
import pick5 from '../../assets/picks/pick-5.jpg'
import pick6 from '../../assets/picks/pick-6.jpg'
import pick7 from '../../assets/picks/pick-7.jpg'
import pick8 from '../../assets/picks/pick-8.jpg'
import pick9 from '../../assets/picks/pick-9.jpg'

// weight is relative, not a percentage — see drawPick below
export const RARITY = {
  common: { label: 'common', weight: 10 },
  rare: { label: 'rare', weight: 5 },
  legendary: { label: 'legendary', weight: 3 },
  mythical: { label: 'mythical', weight: 1 },
}

// display order for anything that walks all rarity tiers (e.g. the collection tracker)
export const RARITY_ORDER = ['common', 'rare', 'legendary', 'mythical']

// mythical picks stay a mystery in the gallery — see Lineup.jsx — but reveal like any other pull
export const PICKS = [
  { id: 'pick-1', src: pick1, rarity: 'common' },
  { id: 'pick-3', src: pick3, rarity: 'common' },
  { id: 'pick-5', src: pick5, rarity: 'common' },
  { id: 'pick-4', src: pick4, rarity: 'rare' },
  { id: 'pick-6', src: pick6, rarity: 'rare' },
  { id: 'pick-2', src: pick2, rarity: 'legendary' },
  { id: 'pick-7', src: pick7, rarity: 'mythical' },
  { id: 'pick-8', src: pick8, rarity: 'mythical' },
  { id: 'pick-9', src: pick9, rarity: 'mythical' },
]

export function drawPick() {
  const total = PICKS.reduce((sum, p) => sum + RARITY[p.rarity].weight, 0)
  let roll = Math.random() * total
  for (const pick of PICKS) {
    roll -= RARITY[pick.rarity].weight
    if (roll <= 0) return pick
  }
  return PICKS[0]
}
