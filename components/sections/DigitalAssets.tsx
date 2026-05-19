'use client'
import { motion } from 'framer-motion'
import { DIGITAL_ASSETS, DIGITAL_FEATURES } from '@/lib/constants'

const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export default function DigitalAssets() {
  return (
    <section id="digital-assets" className="bg-bg-primary py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
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
            Digital Assets
          </motion.p>
          <motion.h2
            className="font-display font-bold text-h2 text-white max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            Stablecoin & Digital Asset Infrastructure
          </motion.h2>
          <motion.p
            className="text-text-secondary text-base mt-4 max-w-lg mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Manage multi-asset treasury, enable stablecoin settlement, and access institutional custody
            through a single unified platform.
          </motion.p>
        </motion.div>

        {/* Full-width asset card */}
        <motion.div
          className="card-base p-6 mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="font-display font-semibold text-white">Asset Portfolio</span>
              <p className="text-text-muted text-xs mt-1">Multi-asset treasury overview</p>
            </div>
            <motion.div
              className="flex items-center gap-2 text-xs text-emerald-400 border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 rounded-full"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <motion.span
                className="w-1.5 h-1.5 rounded-full bg-emerald-400"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              Live balances
            </motion.div>
          </div>

          {/* Asset balance tiles */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
            {DIGITAL_ASSETS.map((asset, i) => (
              <motion.div
                key={asset.name}
                className="bg-bg-secondary rounded-xl p-5 border border-border-subtle"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                whileHover={{ y: -4, borderColor: 'rgba(59,91,255,0.30)' }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-semibold text-accent bg-accent-soft px-2 py-0.5 rounded">
                    {asset.name}
                  </span>
                  <motion.span
                    className={`text-xs font-mono ${asset.up ? 'text-emerald-400' : 'text-red-400'}`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    {asset.change}
                  </motion.span>
                </div>
                <p className="font-display font-bold text-lg text-white">
                  {asset.symbol}{asset.balance}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Animated bar chart */}
          <div>
            <p className="text-text-muted text-xs mb-4 font-mono uppercase tracking-widest">Portfolio allocation</p>
            <div className="flex flex-col gap-4">
              {DIGITAL_ASSETS.map((asset, i) => (
                <motion.div
                  key={asset.name}
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.15 }}
                >
                  <span className="w-12 text-xs text-text-muted font-mono shrink-0">{asset.name}</span>
                  <div className="flex-1 h-2 bg-border-subtle rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{
                        background: `linear-gradient(90deg, #3B5BFF, #7B9FFF)`,
                        opacity: 0.4 + i * 0.15,
                      }}
                      initial={{ width: '0%' }}
                      whileInView={{ width: `${asset.barWidth}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.4 + i * 0.15, ease: 'easeOut' }}
                    />
                  </div>
                  <span className="text-xs text-text-muted font-mono w-8 shrink-0">{asset.barWidth}%</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 2×2 feature grid */}
        <motion.div
          className="grid sm:grid-cols-2 gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {DIGITAL_FEATURES.map((feat) => (
            <motion.div
              key={feat.title}
              className="card-base card-hover p-7 flex gap-5"
              variants={staggerItem}
              whileHover={{ y: -4, borderColor: 'rgba(59,91,255,0.30)' }}
            >
              <motion.div
                className="w-11 h-11 rounded-xl bg-accent-soft border border-accent-border flex items-center justify-center text-xl shrink-0"
                whileHover={{ rotate: [0, -10, 10, -5, 0], transition: { duration: 0.4 } }}
              >
                {feat.icon}
              </motion.div>
              <div>
                <h3 className="font-display font-semibold text-white text-base mb-2">{feat.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{feat.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
