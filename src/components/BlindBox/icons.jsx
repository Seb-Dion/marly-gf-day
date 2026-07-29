// Hand-drawn line icons for each collectible. Stroke-based, single color
// (currentColor) so rarity styling can tint them via CSS.

const base = {
  viewBox: '0 0 64 64',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 3,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function TeleportIcon(props) {
  return (
    <svg {...base} {...props}>
      <ellipse cx="32" cy="50" rx="18" ry="6" />
      <ellipse cx="32" cy="38" rx="12" ry="4" opacity="0.6" />
      <path d="M32 44V16" strokeDasharray="2 5" />
      <path d="M20 20L32 8L44 20" />
      <circle cx="32" cy="8" r="3" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function SodaCanIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="20" y="12" width="24" height="40" rx="6" />
      <path d="M20 22H44" opacity="0.5" />
      <path d="M26 8L38 8" />
      <circle cx="35" cy="16" r="1.6" fill="currentColor" stroke="none" />
      <path d="M40 30q4 3 0 6M40 38q4 3 0 6" opacity="0.7" />
    </svg>
  )
}

export function FireHeartIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M32 46S12 33 12 20a10 10 0 0 1 18-6 10 10 0 0 1 18 6c0 8-9 16-16 22Z" />
      <path d="M32 20c2 4-2 5-1 9 1-2 4-1 4 2 0-4 3-3 2-7" opacity="0.7" />
    </svg>
  )
}

export function ShootingStarIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M34 8l3.5 8.5L46 20l-8.5 3.5L34 32l-3.5-8.5L22 20l8.5-3.5Z" />
      <path d="M14 40l8 6M10 46l4 3" opacity="0.6" />
      <circle cx="46" cy="44" r="2" fill="currentColor" stroke="none" opacity="0.6" />
    </svg>
  )
}

export function HoneyBearIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="32" cy="32" r="16" />
      <circle cx="20" cy="18" r="5" />
      <circle cx="44" cy="18" r="5" />
      <circle cx="26" cy="30" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="38" cy="30" r="1.6" fill="currentColor" stroke="none" />
      <path d="M28 38q4 3 8 0" />
      <path d="M32 44q3 6 0 10q-3-4 0-10Z" opacity="0.7" />
    </svg>
  )
}

export function MoroccoLanternIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M32 6c6 6 10 12 10 18H22c0-6 4-12 10-18Z" />
      <rect x="20" y="24" width="24" height="22" rx="4" />
      <path d="M20 30H44M20 40H44" opacity="0.6" />
      <path d="M32 46v8" />
      <path d="M26 54H38" />
    </svg>
  )
}

export function SoulmateHeartsIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M24 40S10 30 10 19a8 8 0 0 1 14-5 8 8 0 0 1 14 5c0 6-6 12-14 18Z" />
      <path d="M40 44S26 34 26 23a8 8 0 0 1 14-5 8 8 0 0 1 14 5c0 6-6 12-14 18Z" />
      <path d="M32 50l2 4 2-4" opacity="0.7" />
    </svg>
  )
}

export function InfinityIcon(props) {
  return (
    <svg {...base} {...props}>
      <ellipse cx="24" cy="32" rx="11" ry="9" />
      <ellipse cx="40" cy="32" rx="11" ry="9" />
      <circle cx="12" cy="14" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="52" cy="50" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="52" cy="14" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function WinkFaceIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="32" cy="32" r="18" />
      <path d="M22 28h8M36 30q4-3 8 0" />
      <path d="M24 40q8 6 16 0" />
    </svg>
  )
}
