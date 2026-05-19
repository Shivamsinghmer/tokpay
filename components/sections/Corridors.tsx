'use client'
import { motion } from 'framer-motion'
import { CORRIDOR_GROUPS } from '@/lib/constants'

const CORRIDOR_NODES = [
  { cx: 80,  cy: 50,  label: 'India',    active: true  },
  { cx: 80,  cy: 150, label: 'Nigeria',  active: true  },
  { cx: 200, cy: 20,  label: 'Kenya',    active: true  },
  { cx: 520, cy: 50,  label: 'Thailand', active: false },
  { cx: 520, cy: 150, label: 'Saudi',    active: false },
  { cx: 400, cy: 20,  label: 'Europe',   active: false },
]

export default function Corridors() {
  return (
    <section id="corridors" className="bg-bg-primary py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            className="section-label mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Corridors
          </motion.p>
          <motion.h2
            className="font-display font-bold text-h2 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            Focused Corridor Expansion
          </motion.h2>
          <motion.p
            className="text-text-secondary text-base mt-4 max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Building from UAE outward — connecting high-growth corridors with modern payment rails.
          </motion.p>
        </motion.div>

        {/* Hub diagram */}
        <motion.div
          className="card-base p-6 mb-8"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center justify-between mb-6">
            <span className="font-display font-semibold text-white">Active Corridors</span>
            <motion.span
              className="flex items-center gap-2 text-xs text-emerald-400 border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 rounded-full"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <motion.span
                className="w-1.5 h-1.5 rounded-full bg-emerald-400"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              Live · May 2026
            </motion.span>
          </div>

          <svg viewBox="0 0 600 200" className="w-full" xmlns="http://www.w3.org/2000/svg">
            {CORRIDOR_NODES.map(n => (
              <g key={n.label}>
                <line
                  x1="300" y1="100" x2={n.cx} y2={n.cy}
                  stroke={n.active ? '#3B5BFF' : 'rgba(59,91,255,0.20)'}
                  strokeWidth={n.active ? '1.5' : '1'}
                  strokeDasharray="6 4"
                  className={n.active ? 'animate-dash-flow' : ''}
                />
                <circle
                  cx={n.cx} cy={n.cy} r="22"
                  fill={n.active ? 'rgba(59,91,255,0.12)' : 'rgba(59,91,255,0.04)'}
                  stroke={n.active ? '#3B5BFF' : 'rgba(59,91,255,0.20)'}
                  strokeWidth="1"
                />
                <text
                  x={n.cx} y={n.cy + 4}
                  textAnchor="middle"
                  fill={n.active ? '#B8C0D9' : '#5A6480'}
                  fontSize="7"
                  fontFamily="Inter, sans-serif"
                >
                  {n.label}
                </text>
              </g>
            ))}
            <circle cx="300" cy="100" r="32" fill="rgba(59,91,255,0.18)" stroke="#3B5BFF" strokeWidth="1.5" />
            <circle cx="300" cy="100" r="42" fill="none" stroke="rgba(59,91,255,0.08)" strokeWidth="1" className="animate-pulse" />
            <text x="300" y="104" textAnchor="middle" fill="white" fontSize="10" fontFamily="Aldrich, sans-serif" fontWeight="700">UAE</text>
          </svg>
        </motion.div>

        {/* Status cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {CORRIDOR_GROUPS.map((group, i) => (
            <motion.div
              key={group.group}
              className={`card-base p-5 border-l-4 ${group.color}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.35 + i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <p className="section-label mb-4">{group.group}</p>
              <ul className="flex flex-col gap-2">
                {group.items.map(item => (
                  <li key={item} className="flex items-center gap-2 text-sm text-text-secondary">
                    <span className="w-1 h-1 rounded-full bg-text-muted shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
