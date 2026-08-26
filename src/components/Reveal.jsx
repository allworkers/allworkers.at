import { useEffect, useRef, useState } from 'react'

// Robust scroll-reveal: fades/slides content in when it enters the viewport.
// Guarantees visibility via a timeout fallback and IO-unsupported fallback,
// so content can never get stuck hidden (e.g. reduced-motion, odd browsers).
export default function Reveal({ children, delay = 0, y = 24, className = '' }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const prefersReduced =
      typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced || typeof IntersectionObserver === 'undefined') {
      setShown(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true)
            io.disconnect()
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
    )
    io.observe(el)
    // Safety net: never leave content hidden.
    const t = setTimeout(() => setShown(true), 1600)
    return () => {
      io.disconnect()
      clearTimeout(t)
    }
  }, [])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? 'none' : `translateY(${y}px)`,
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  )
}
