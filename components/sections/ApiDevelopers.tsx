'use client'
import { motion } from 'framer-motion'
import { DEV_FEATURES, API_MODULES, CODE_REQUEST, CODE_RESPONSE } from '@/lib/constants'

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const fadeItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export default function ApiDevelopers() {
  return (
    <section id="developers" className="bg-bg-primary py-20 px-4">
      <div className="max-w-6xl mx-auto">
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
            Developers
          </motion.p>
          <motion.h2
            className="font-display font-bold text-h2 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            API-First Financial Infrastructure
          </motion.h2>
          <motion.p
            className="text-text-secondary text-base mt-4 max-w-lg mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Integrate payment rails, treasury operations, settlement workflows,
            and liquidity infrastructure through modular APIs.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Feature list */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex flex-col divide-y divide-border-subtle mb-8">
              {DEV_FEATURES.map((f, i) => (
                <motion.div
                  key={f.num}
                  className="flex gap-4 py-5 group"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.25 + i * 0.08 }}
                  whileHover={{ x: 4 }}
                >
                  <span className="text-accent font-mono text-xs font-medium mt-1 shrink-0">{f.num} /</span>
                  <div>
                    <p className="font-display font-semibold text-white text-base">{f.title}</p>
                    <p className="text-text-muted text-sm mt-1">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.a
              href="#"
              className="text-accent font-body text-sm flex items-center gap-1 group"
              whileHover={{ x: 4 }}
            >
              Explore API Documentation
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </motion.a>
          </motion.div>

          {/* Code terminal */}
          <motion.div
            className="rounded-xl overflow-hidden border border-accent-border shadow-glow"
            style={{ background: '#020B18' }}
            initial={{ opacity: 0, x: 30, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            whileHover={{ y: -4, boxShadow: '0 0 60px rgba(59,91,255,0.15)' }}
          >
            {/* Terminal header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border-subtle">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500 opacity-80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500 opacity-80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500 opacity-80" />
              </div>
              <span className="text-xs font-mono text-text-muted">POST /v1/payments/initiate</span>
              <div />
            </div>
            {/* Code */}
            <div className="p-5 font-mono text-xs leading-relaxed overflow-x-auto">
              <motion.pre
                className="text-text-secondary whitespace-pre"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                {CODE_REQUEST}
              </motion.pre>
              <motion.div
                className="mt-6 pt-6 border-t border-border-subtle"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <pre className="text-emerald-400/80 whitespace-pre">{CODE_RESPONSE}</pre>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* API module pills */}
        <motion.div
          className="flex flex-wrap gap-2 mt-10"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {API_MODULES.map(m => (
            <motion.span
              key={m}
              className="px-4 py-1.5 rounded-full border border-accent-border bg-accent-soft text-accent text-xs font-body"
              variants={fadeItem}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              {m}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
