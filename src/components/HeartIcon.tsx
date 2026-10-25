// The heart of public/heart.svg, filled with the text color, so that CSS can
// color it
export function HeartIcon({ outlined = false }: { outlined?: boolean }) {
  return (
    <svg
      className="heart"
      viewBox="0 0 100 100"
      width="1em"
      height="1em"
      aria-hidden="true"
    >
      <path
        d="M50 92 C48 80 40 68 30 58 C20 48 14 41 14 30 C14 17 23 9 33 9 C42 9 48 17 50 27 C52 17 58 9 67 9 C77 9 86 17 86 30 C86 41 80 48 70 58 C60 68 52 80 50 92 Z"
        fill="currentColor"
        {...(outlined && {
          stroke: 'black',
          strokeWidth: 6,
          strokeLinejoin: 'round'
        })}
      />
    </svg>
  )
}
