'use client'
import { motion } from 'framer-motion'
import { useCountUp } from '@/hooks/useCountUp'
import { STATS, type Stat } from '@/lib/constants'

function StatItem({ stat, index }: { stat: Stat; index: number }) {
  const count = useCountUp(stat.value, 1500, true)

  return (
    <motion.div
      className="flex flex-col items-center gap-1.5 text-center px-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: 'easeOut' }}
    >
      <div className="flex items-baseline gap-1">
        <span className="font-display font-extrabold text-4xl md:text-5xl text-white tracking-tight">
          {stat.prefix ?? ''}{count}{stat.suffix}
        </span>
        <motion.span
          className="text-xl"
          initial={{ rotate: -10, scale: 0 }}
          whileInView={{ rotate: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.12 + 0.3 }}
        >
          {stat.icon}
        </motion.span>
      </div>
      <span className="section-label text-text-secondary">{stat.label}</span>
    </motion.div>
  )
}

export default function StatsBar() {
  return (
    <section className="bg-bg-secondary border-y border-border-subtle py-10">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x divide-border-subtle">
          {STATS.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
