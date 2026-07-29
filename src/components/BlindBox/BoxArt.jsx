export default function BoxArt(props) {
  return (
    <svg viewBox="0 0 200 200" {...props}>
      <defs>
        <linearGradient id="boxBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ff8fb9" />
          <stop offset="100%" stopColor="#f2508c" />
        </linearGradient>
        <linearGradient id="boxLid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffb8d4" />
          <stop offset="100%" stopColor="#ff8fb9" />
        </linearGradient>
      </defs>

      <rect x="30" y="90" width="140" height="90" rx="10" fill="url(#boxBody)" />
      <rect x="30" y="90" width="140" height="90" rx="10" stroke="#a82a5e" strokeOpacity="0.15" strokeWidth="2" fill="none" />

      <rect x="22" y="66" width="156" height="34" rx="10" fill="url(#boxLid)" />
      <rect x="22" y="66" width="156" height="34" rx="10" stroke="#a82a5e" strokeOpacity="0.15" strokeWidth="2" fill="none" />

      <rect x="90" y="66" width="20" height="114" fill="#83d3f5" opacity="0.9" />
      <rect x="30" y="120" width="140" height="14" fill="#83d3f5" opacity="0.9" />

      <path
        d="M100 66c-14-10-30-4-30-16s16-18 30-6c14-12 30-6 30 6s-16 6-30 16Z"
        fill="#5bc0ea"
      />
      <circle cx="100" cy="52" r="6" fill="#eefaff" />
    </svg>
  )
}
