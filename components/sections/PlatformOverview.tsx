'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PLATFORM_TABS } from '@/lib/constants'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

export default function PlatformOverview() {
  const [active, setActive] = useState(0)
  const tab = PLATFORM_TABS[active]

  return (
    <section id="platform" className="bg-bg-primary py-14 md:py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
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
            Platform
          </motion.p>
          <motion.h2
            className="font-display font-bold text-h2 text-white max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Financial Infrastructure Built for the Internet Economy
          </motion.h2>
          <motion.p
            className="text-text-secondary text-base mt-4 max-w-lg mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            TokPay combines payment orchestration, stablecoin settlement, treasury infrastructure,
            liquidity coordination, and payout rails into a unified platform.
          </motion.p>
        </motion.div>

        {/* Two-column tab layout */}
        <div className="grid md:grid-cols-2 gap-6 items-start">
          {/* LEFT — tab list */}
          <motion.div
            className="flex flex-col gap-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {PLATFORM_TABS.map((t, i) => (
              <motion.button
                key={t.number}
                onClick={() => setActive(i)}
                className={`text-left px-4 sm:px-6 py-4 sm:py-5 rounded-xl border transition-colors duration-200 group ${
                  active === i
                    ? 'border-accent-border bg-accent-soft'
                    : 'border-border-card bg-bg-card hover:border-border-card/50'
                }`}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.99 }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
              >
                <div className="flex items-start gap-4">
                  <span
                    className={`font-mono text-xs font-medium mt-1 ${
                      active === i ? 'text-accent' : 'text-text-muted'
                    }`}
                  >
                    {t.number} /
                  </span>
                  <div>
                    <p
                      className={`font-display font-semibold text-base ${
                        active === i ? 'text-white' : 'text-text-secondary'
                      }`}
                    >
                      {t.title}
                    </p>
                    <p className="text-text-muted text-sm mt-1">{t.description}</p>
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* RIGHT — dashboard panel */}
          <motion.div
            className="card-base p-5 min-h-[320px]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                {/* Panel header */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-display font-semibold text-white">{tab.panel.header}</span>
                  <div className="flex items-center gap-2 text-xs text-text-muted">
                    <motion.span
                      className="w-2 h-2 rounded-full bg-emerald-400"
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    Live
                  </div>
                </div>

                {/* Metrics row */}
                {tab.panel.metrics.length > 0 && (
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {tab.panel.metrics.map((m, i) => (
                      <motion.div
                        key={m.label}
                        className="bg-bg-secondary/60 rounded-xl p-3 border border-border-subtle"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.3 }}
                      >
                        <p className="text-text-muted text-xs mb-1">{m.label}</p>
                        <p className="font-display font-bold text-base sm:text-xl text-white">{m.value}</p>
                        {m.change && <p className={`text-xs mt-1 ${m.color}`}>{m.change}</p>}
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* Transaction list */}
                {tab.panel.transactions.length > 0 && (
                  <div className="flex flex-col gap-2">
                    {tab.panel.transactions.map((tx, i) => (
                      <motion.div
                        key={tx.corridor}
                        className="flex items-center justify-between py-3 px-3 rounded-lg
                                   bg-bg-secondary/40 border border-border-subtle"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08, duration: 0.3 }}
                      >
                        <span className="text-xs sm:text-sm font-body text-white min-w-0 truncate max-w-[90px] sm:max-w-none">{tx.corridor}</span>
                        <span className="text-xs sm:text-sm font-mono text-text-secondary shrink-0">{tx.amount}</span>
                        <span className="flex items-center gap-1.5 text-xs px-2 py-1 rounded-full bg-black/30 border border-border-subtle">
                          <span className={`w-1.5 h-1.5 rounded-full ${tx.color}`} />
                          {tx.status}
                        </span>
                        <span className="text-xs text-text-muted hidden sm:block">{tx.time}</span>
                      </motion.div>
                    ))}
                  </div>
                )}

                {tab.panel.metrics.length === 0 && (
                  <div className="flex items-center justify-center h-48 text-text-muted text-sm">
                    Dashboard for {tab.title}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
