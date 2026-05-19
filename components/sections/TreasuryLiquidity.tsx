'use client'
import { motion } from 'framer-motion'
import {
  TREASURY_FEATURES,
  LIQUIDITY_PROVIDERS,
  PROVIDER_STATUS_COLORS,
} from '@/lib/constants'

export default function TreasuryLiquidity() {
  return (
    <section id="treasury" className="bg-bg-secondary py-20 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* LEFT — features */}
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
            Treasury & Liquidity
          </motion.p>
          <motion.h2
            className="font-display font-bold text-h2 text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            Treasury Infrastructure at Scale
          </motion.h2>
          <motion.p
            className="text-text-secondary text-base leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Manage multi-currency treasury, access institutional liquidity, and connect to
            settlement providers through a unified routing engine.
          </motion.p>

          <div className="flex flex-col divide-y divide-border-subtle">
            {TREASURY_FEATURES.map((f, i) => (
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

        {/* RIGHT — Liquidity Routing Engine card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        >
          <div className="card-base p-6">
            <motion.div
              className="flex items-center justify-between mb-6"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <span className="font-display font-semibold text-white">Liquidity Routing Engine</span>
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
                Active
              </motion.span>
            </motion.div>

            {/* Total liquidity metric */}
            <motion.div
              className="bg-bg-primary rounded-lg p-4 mb-5 border border-border-subtle"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.35 }}
            >
              <p className="text-text-muted text-xs mb-1">Total Available Liquidity</p>
              <p className="font-display font-bold text-2xl text-white">$48.2M</p>
              <p className="text-emerald-400 text-xs mt-1">+$2.1M in last 24 hours</p>
            </motion.div>

            {/* Provider rows with animated bars */}
            <div className="flex flex-col gap-4">
              {LIQUIDITY_PROVIDERS.map((provider, i) => (
                <motion.div
                  key={provider.name}
                  className="flex flex-col gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.15 }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-body text-text-secondary">{provider.name}</span>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-mono ${PROVIDER_STATUS_COLORS[provider.status]}`}>
                        {provider.coverage}%
                      </span>
                      <span className={`text-xs ${PROVIDER_STATUS_COLORS[provider.status]}`}>
                        {provider.status}
                      </span>
                    </div>
                  </div>
                  <div className="h-1.5 bg-border-subtle rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-shimmer-bar"
                      style={{
                        backgroundSize: '200% 100%',
                      }}
                      initial={{ width: '0%' }}
                      whileInView={{ width: `${provider.coverage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.5 + i * 0.15, ease: 'easeOut' }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Network stats */}
            <motion.div
              className="mt-5 grid grid-cols-2 gap-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              {[
                { label: 'Avg. Route Time', value: '< 2 min' },
                { label: 'Settlement Success', value: '99.7%' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="bg-bg-secondary/60 rounded-lg p-3 border border-border-subtle"
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.65 + i * 0.1 }}
                >
                  <p className="text-text-muted text-xs mb-1">{stat.label}</p>
                  <p className="font-display font-bold text-base text-white">{stat.value}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
