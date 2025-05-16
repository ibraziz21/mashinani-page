'use client'
import { useRef, useEffect, useState } from 'react'

type Stat = { label: string; value: number }
const stats: Stat[] = [
  { label: 'Youth Trained', value: 35 },
  { label: 'Cohorts',       value: 12 },
]

/* ⬇︎ custom counting hook (unchanged) */
const useCountUp = (target: number, inView: boolean) => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!inView) return
    const duration = 1200
    const steps    = 30
    const inc      = target / steps
    let cur = 0, step = 0
    const id = setInterval(() => {
      cur += inc
      step += 1
      setCount(step === steps ? target : Math.round(cur))
      if (step === steps) clearInterval(id)
    }, duration / steps)
    return () => clearInterval(id)
  }, [inView, target])
  return count
}

/* ⬇︎ small wrapper component per stat */
function StatItem({ label, value, inView }: Stat & { inView: boolean }) {
  const count = useCountUp(value, inView)
  return (
    <div className='flex flex-col items-center'>
      <dt className='text-4xl font-extrabold tracking-tight text-[#0a3224]'>
        {count.toLocaleString()}
      </dt>
      <dd className='mt-2 text-sm font-medium text-gray-600'>{label}</dd>
    </div>
  )
}

export default function ImpactStats() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setVisible] = useState(false)

  /* observe once */
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      className='mx-auto mt-24 max-w-5xl px-6 text-center lg:px-8'
    >
      <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
        Our&nbsp;Impact&nbsp;in&nbsp;Numbers
      </h2>

      <dl className='mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2'>
        {stats.map((s) => (
          <StatItem key={s.label} {...s} inView={isVisible} />
        ))}
      </dl>
    </section>
  )
}
