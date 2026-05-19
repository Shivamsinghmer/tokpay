'use client'
import { motion } from 'framer-motion'
import { PAYMENT_FEATURES, CORRIDOR_TAGS } from '@/lib/constants'

const UAE = { cx: 200, cy: 140 }

const NETWORK_NODES = [
  { cx: 62,  cy: 58,  label: 'India',    currency: 'INR', active: true  },
  { cx: 338, cy: 70,  label: 'Nigeria',  currency: 'NGN', active: true  },
  { cx: 52,  cy: 208, label: 'Kenya',    currency: 'KES', active: true  },
  { cx: 352, cy: 215, label: 'Thailand', currency: 'THB', active: false },
  { cx: 200, cy: 262, label: 'KSA',      currency: 'SAR', active: false },
  { cx: 200, cy: 18,  label: 'Europe',   currency: 'EUR', active: false },
]

export default function PaymentsInfra() {
  return (
    <section id="payments" className="bg-bg-secondary py-20 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT — content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <motion.p
            className="section-label mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Payments
          </motion.p>
          <motion.h2
            className="font-display font-bold text-h2 text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            Cross-Border Payments Infrastructure
          </motion.h2>
          <motion.p
            className="text-text-secondary text-base leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Build global payment experiences using stablecoin and fiat settlement rails
            with faster movement, treasury visibility, and programmable workflows.
          </motion.p>

          <div className="flex flex-col divide-y divide-border-subtle">
            {PAYMENT_FEATURES.map((f, i) => (
              <motion.div
                key={f.num}
                className="flex gap-4 py-5 group"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.25 + i * 0.1 }}
                whileHover={{ x: 4 }}
              >
                <span className="text-accent font-mono text-xs font-medium mt-1 shrink-0">{f.num} /</span>
                <div>
                  <p className="font-display font-semibold text-white text-base group-hover:text-accent transition-colors">
                    {f.title}
                  </p>
                  <p className="text-text-muted text-sm mt-1">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT — corridor visualization card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        >
          <div className="card-base p-6 overflow-hidden">
            {/* Card header */}
            <div className="flex items-center justify-between mb-5">
              <div>
                <span className="font-display font-semibold text-white text-sm">Global Payment Network</span>
                <p className="text-text-muted text-xs mt-0.5">UAE-anchored routing hub</p>
              </div>
              <motion.span
                className="flex items-center gap-1.5 text-xs text-emerald-400 border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 rounded-full"
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
                Active
              </motion.span>
            </div>

            {/* SVG corridor diagram */}
            <div className="relative bg-bg-primary rounded-xl overflow-hidden" style={{ height: 290 }}>
              <svg viewBox="0 0 400 280" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient id="hub-glow-pm" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#3B5BFF" stopOpacity="0.22" />
                    <stop offset="100%" stopColor="#3B5BFF" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient id="node-fill-pm" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#3B5BFF" stopOpacity="0.28" />
                    <stop offset="100%" stopColor="#3B5BFF" stopOpacity="0.08" />
                  </radialGradient>
                </defs>

                {/* Hub ambient glow */}
                <circle cx={UAE.cx} cy={UAE.cy} r="90" fill="url(#hub-glow-pm)" />

                {/* Connection lines + mid-point currency labels */}
                {NETWORK_NODES.map(n => {
                  const mx = (UAE.cx + n.cx) / 2
                  const my = (UAE.cy + n.cy) / 2
                  return (
                    <g key={`line-${n.label}`}>
                      <line
                        x1={UAE.cx} y1={UAE.cy} x2={n.cx} y2={n.cy}
                        stroke={n.active ? '#3B5BFF' : 'rgba(59,91,255,0.15)'}
                        strokeWidth={n.active ? '1.5' : '0.75'}
                        strokeDasharray={n.active ? '6 4' : '4 8'}
                        className={n.active ? 'animate-dash-flow' : ''}
                        strokeOpacity={n.active ? 0.85 : 0.45}
                      />
                      {n.active && (
                        <text
                          x={mx} y={my - 5}
                          textAnchor="middle"
                          fill="#6B8FFF"
                          fontSize="5.5"
                          fontFamily="Inter, sans-serif"
                          opacity="0.9"
                        >
                          AED → {n.currency}
                        </text>
                      )}
                    </g>
                  )
                })}

                {/* Nodes */}
                {NETWORK_NODES.map(n => (
                  <g key={n.label}>
                    {/* Animated pulse ring on active nodes */}
                    {n.active && (
                      <circle cx={n.cx} cy={n.cy} r="24" fill="none"
                        stroke="rgba(59,91,255,0.2)" strokeWidth="1">
                        <animate attributeName="r" values="22;30;22" dur="3s" repeatCount="indefinite" />
                        <animate attributeName="stroke-opacity" values="0.2;0.04;0.2" dur="3s" repeatCount="indefinite" />
                      </circle>
                    )}
                    {/* Node circle */}
                    <circle
                      cx={n.cx} cy={n.cy}
                      r={n.active ? 20 : 15}
                      fill={n.active ? 'url(#node-fill-pm)' : 'rgba(59,91,255,0.04)'}
                      stroke={n.active ? '#3B5BFF' : 'rgba(59,91,255,0.2)'}
                      strokeWidth={n.active ? '1.5' : '0.75'}
                    />
                    {/* Country name */}
                    <text
                      x={n.cx} y={n.cy + (n.active ? -2 : 3)}
                      textAnchor="middle"
                      fill={n.active ? '#D4DCF5' : '#5A6480'}
                      fontSize={n.active ? 7 : 6.5}
                      fontFamily="Inter, sans-serif"
                      fontWeight={n.active ? '500' : '400'}
                    >
                      {n.label}
                    </text>
                    {/* Currency tag on active nodes */}
                    {n.active && (
                      <text
                        x={n.cx} y={n.cy + 9}
                        textAnchor="middle"
                        fill="#7B9FFF"
                        fontSize="6"
                        fontFamily="Inter, sans-serif"
                      >
                        {n.currency}
                      </text>
                    )}
                  </g>
                ))}

                {/* UAE hub — outer animated ring */}
                <circle cx={UAE.cx} cy={UAE.cy} r="42" fill="none"
                  stroke="rgba(59,91,255,0.12)" strokeWidth="1">
                  <animate attributeName="r" values="40;50;40" dur="4s" repeatCount="indefinite" />
                  <animate attributeName="stroke-opacity" values="0.12;0.03;0.12" dur="4s" repeatCount="indefinite" />
                </circle>
                {/* UAE hub — body */}
                <circle cx={UAE.cx} cy={UAE.cy} r="30" fill="rgba(59,91,255,0.22)" stroke="#3B5BFF" strokeWidth="2" />
                <circle cx={UAE.cx} cy={UAE.cy} r="23" fill="rgba(59,91,255,0.12)" />
                <text x={UAE.cx} y={UAE.cy + 4}
                  textAnchor="middle" fill="white"
                  fontSize="10" fontFamily="Aldrich, sans-serif" fontWeight="700"
                >
                  UAE
                </text>
              </svg>
            </div>

            {/* Stats row */}
            <div className="mt-4 grid grid-cols-3 gap-2">
              {[
                { label: 'Active Corridors', value: '12+' },
                { label: 'Avg Settlement',   value: '< 2 min' },
                { label: 'Success Rate',     value: '99.7%' },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  className="bg-bg-secondary/60 rounded-lg p-2.5 border border-border-subtle text-center"
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 + i * 0.08 }}
                >
                  <p className="font-display font-bold text-sm text-white">{s.value}</p>
                  <p className="text-text-muted text-[10px] mt-0.5 font-body">{s.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Marquee ticker */}
            <div className="mt-3 overflow-hidden">
              <div className="flex gap-5 animate-marquee whitespace-nowrap">
                {[...CORRIDOR_TAGS, ...CORRIDOR_TAGS].map((tag, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 text-xs text-text-muted border border-border-subtle px-3 py-1 rounded-full shrink-0"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
