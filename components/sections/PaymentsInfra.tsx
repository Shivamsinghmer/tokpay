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

const STATS = [
  { label: 'Active Corridors', value: '12+' },
  { label: 'Avg Settlement',   value: '< 2m' },
  { label: 'Success Rate',     value: '99.7%' },
]

export default function PaymentsInfra() {
  return (
    <section id="payments" className="bg-bg-secondary py-10 md:py-20 px-4 w-full overflow-x-hidden">
      <div className="max-w-6xl mx-auto w-full">

        {/* Two-column layout: stacks on mobile, side-by-side on md+ */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start w-full min-w-0">

          {/* ── LEFT: Copy ─ */}
          <motion.div
            className="min-w-0 w-full"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <p className="section-label mb-2 text-xs">Payments</p>

            <h2 className="font-display font-bold text-xl sm:text-2xl md:text-h1 text-white mb-3 md:mb-4 leading-tight break-words w-full">
              Cross-Border Payments Infrastructure
            </h2>

            <p className="text-text-secondary text-sm leading-relaxed mb-5 w-full">
              Build global payment experiences using stablecoin and fiat settlement
              rails with faster movement, treasury visibility, and programmable workflows.
            </p>

            {/* Feature list */}
            <div className="flex flex-col divide-y divide-border-subtle">
              {PAYMENT_FEATURES.map((f, i) => (
                <motion.div
                  key={f.num}
                  className="flex gap-3 py-4 group"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.1 + i * 0.08 }}
                  whileHover={{ x: 4 }}
                >
                  <span className="text-accent font-mono text-xs font-medium mt-0.5 shrink-0 w-6 md:w-8">
                    {f.num} /
                  </span>
                  <div className="min-w-0">
                    <p className="font-display font-semibold text-white text-sm group-hover:text-accent transition-colors break-words">
                      {f.title}
                    </p>
                    <p className="text-text-muted text-xs mt-0.5 leading-relaxed break-words">
                      {f.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT: Visualization card ─ */}
          <motion.div
            className="min-w-0 w-full"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          >
            <div className="card-base p-3 sm:p-5 overflow-hidden w-full max-w-full">

              {/* Card header */}
              <div className="flex items-center justify-between mb-3">
                <div className="min-w-0 mr-2">
                  <p className="font-display font-semibold text-white text-sm leading-tight">
                    Global Payment Network
                  </p>
                  <p className="text-text-muted text-[10px] mt-0.5">UAE-anchored routing hub</p>
                </div>
                <motion.span
                  className="flex items-center gap-1 text-[10px] text-emerald-400 border border-emerald-400/20 bg-emerald-400/10 px-2 py-0.5 rounded-full shrink-0"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  <motion.span
                    className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  Active
                </motion.span>
              </div>

              {/* SVG corridor diagram */}
              <div
                className="relative bg-bg-primary rounded-xl overflow-hidden w-full max-w-full aspect-[400/280]"
              >
                <svg
                  viewBox="0 0 400 280"
                  className="w-full h-full"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <radialGradient id="hub-glow-pm" cx="50%" cy="50%" r="50%">
                      <stop offset="0%"   stopColor="#3B5BFF" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#3B5BFF" stopOpacity="0"    />
                    </radialGradient>
                    <radialGradient id="node-fill-pm" cx="50%" cy="50%" r="50%">
                      <stop offset="0%"   stopColor="#3B5BFF" stopOpacity="0.30" />
                      <stop offset="100%" stopColor="#3B5BFF" stopOpacity="0.08" />
                    </radialGradient>
                  </defs>

                  {/* Hub glow */}
                  <circle cx={UAE.cx} cy={UAE.cy} r="100" fill="url(#hub-glow-pm)" />

                  {/* Lines */}
                  {NETWORK_NODES.map(n => {
                    const mx = (UAE.cx + n.cx) / 2
                    const my = (UAE.cy + n.cy) / 2
                    return (
                      <g key={`line-${n.label}`}>
                        <line
                          x1={UAE.cx} y1={UAE.cy} x2={n.cx} y2={n.cy}
                          stroke={n.active ? '#3B5BFF' : 'rgba(59,91,255,0.18)'}
                          strokeWidth={n.active ? '1.5' : '0.8'}
                          strokeDasharray={n.active ? '6 4' : '4 8'}
                          className={n.active ? 'animate-dash-flow' : ''}
                          strokeOpacity={n.active ? 0.9 : 0.5}
                        />
                        {n.active && (
                          <text x={mx} y={my - 5} textAnchor="middle"
                            fill="#6B8FFF" fontSize="5.5"
                            fontFamily="Inter, sans-serif" opacity="0.85"
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
                      {n.active && (
                        <circle cx={n.cx} cy={n.cy} r="22" fill="none"
                          stroke="rgba(59,91,255,0.22)" strokeWidth="1"
                        >
                          <animate attributeName="r" values="20;28;20" dur="3s" repeatCount="indefinite" />
                          <animate attributeName="stroke-opacity" values="0.22;0.04;0.22" dur="3s" repeatCount="indefinite" />
                        </circle>
                      )}
                      <circle
                        cx={n.cx} cy={n.cy}
                        r={n.active ? 18 : 13}
                        fill={n.active ? 'url(#node-fill-pm)' : 'rgba(59,91,255,0.04)'}
                        stroke={n.active ? '#3B5BFF' : 'rgba(59,91,255,0.22)'}
                        strokeWidth={n.active ? '1.5' : '0.8'}
                      />
                      <text
                        x={n.cx} y={n.cy + (n.active ? -1 : 3)}
                        textAnchor="middle"
                        fill={n.active ? '#D4DCF5' : '#5A6480'}
                        fontSize={n.active ? 7 : 6.5}
                        fontFamily="Inter, sans-serif"
                        fontWeight={n.active ? '600' : '400'}
                      >
                        {n.label}
                      </text>
                      {n.active && (
                        <text x={n.cx} y={n.cy + 9} textAnchor="middle"
                          fill="#7B9FFF" fontSize="6" fontFamily="Inter, sans-serif"
                        >
                          {n.currency}
                        </text>
                      )}
                    </g>
                  ))}

                  {/* UAE hub */}
                  <circle cx={UAE.cx} cy={UAE.cy} r="40" fill="none"
                    stroke="rgba(59,91,255,0.14)" strokeWidth="1"
                  >
                    <animate attributeName="r" values="38;48;38" dur="4s" repeatCount="indefinite" />
                    <animate attributeName="stroke-opacity" values="0.14;0.03;0.14" dur="4s" repeatCount="indefinite" />
                  </circle>
                  <circle cx={UAE.cx} cy={UAE.cy} r="28"
                    fill="rgba(59,91,255,0.22)" stroke="#3B5BFF" strokeWidth="2" />
                  <circle cx={UAE.cx} cy={UAE.cy} r="21" fill="rgba(59,91,255,0.12)" />
                  <text x={UAE.cx} y={UAE.cy + 4} textAnchor="middle"
                    fill="white" fontSize="10"
                    fontFamily="Aldrich, sans-serif" fontWeight="700"
                  >
                    UAE
                  </text>
                </svg>
              </div>

              {/* Stats row */}
              <div className="mt-2.5 grid grid-cols-3 gap-1.5">
                {STATS.map((s, i) => (
                  <motion.div
                    key={s.label}
                    className="bg-bg-secondary/60 rounded-lg p-1.5 md:p-2 border border-border-subtle text-center"
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.4 + i * 0.07 }}
                  >
                    <p className="font-display font-bold text-xs sm:text-sm text-white">{s.value}</p>
                    <p className="text-text-muted text-[9px] mt-0.5 font-body leading-tight">{s.label}</p>
                  </motion.div>
                ))}
              </div>

              {/* Marquee */}
              <div className="mt-2 overflow-hidden">
                <div className="flex gap-2 animate-marquee whitespace-nowrap">
                  {[...CORRIDOR_TAGS, ...CORRIDOR_TAGS].map((tag, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1 text-[10px] text-text-muted border border-border-subtle px-2 py-0.5 rounded-full shrink-0"
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
      </div>
    </section>
  )
}
