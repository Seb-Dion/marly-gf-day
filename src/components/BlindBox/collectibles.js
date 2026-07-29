import {
  TeleportIcon,
  SodaCanIcon,
  FireHeartIcon,
  ShootingStarIcon,
  HoneyBearIcon,
  MoroccoLanternIcon,
  SoulmateHeartsIcon,
  InfinityIcon,
  WinkFaceIcon,
} from './icons.jsx'

export const RARITY = {
  common: { label: 'Common', weight: 10, order: 0 },
  rare: { label: 'Rare', weight: 5, order: 1 },
  legendary: { label: 'Legendary', weight: 3, order: 2 },
}

export const COLLECTIBLES = [
  { id: 'teleport', phrase: 'Computa, teleport me to my gf', icon: TeleportIcon, rarity: 'common' },
  { id: 'diet-coke', phrase: 'CRISP diet coke', icon: SodaCanIcon, rarity: 'common' },
  { id: 'honeybear', phrase: 'I love you honeybear', icon: HoneyBearIcon, rarity: 'common' },
  { id: 'morocco', phrase: "I'm gonna live in Morocco", icon: MoroccoLanternIcon, rarity: 'common' },
  { id: 'know-thats-right', phrase: 'I know that’s right', icon: WinkFaceIcon, rarity: 'common' },
  { id: 'fire-heart', phrase: 'I freaking heart you, bae', icon: FireHeartIcon, rarity: 'rare' },
  { id: 'destiny', phrase: 'You are my dsstny', icon: ShootingStarIcon, rarity: 'rare' },
  { id: 'forever', phrase: 'Forever and always', icon: InfinityIcon, rarity: 'rare' },
  { id: 'soulmate', phrase: 'My soulmate and my best friend', icon: SoulmateHeartsIcon, rarity: 'legendary' },
]

export function drawCollectible() {
  const totalWeight = COLLECTIBLES.reduce((sum, c) => sum + RARITY[c.rarity].weight, 0)
  let roll = Math.random() * totalWeight
  for (const item of COLLECTIBLES) {
    roll -= RARITY[item.rarity].weight
    if (roll <= 0) return item
  }
  return COLLECTIBLES[0]
}
