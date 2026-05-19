'use client'
import { motion } from 'framer-motion'
import { FOOTER_LOCATIONS } from '@/lib/constants'

export default function CtaFooter() {
  return (
    <section id="cta" className="bg-bg-primary py-24 px-4 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-section-glow pointer-events-none"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="max-w-2xl mx-auto text-center relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <motion.h2
          className="font-display font-extrabold text-h2 text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Build on Modern Financial Rails
        </motion.h2>
        <motion.p
          className="text-text-secondary text-lg mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Partner with TokPay to power cross-border payments, treasury operations,
          and digital asset infrastructure.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.a
            href="#"
            className="px-8 py-3 rounded-full bg-accent text-white font-body font-medium text-sm
                       shadow-glow flex items-center gap-2 group"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Schedule a Call
            <motion.span
              className="inline-block"
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              →
            </motion.span>
          </motion.a>
          <motion.a
            href="#"
            className="px-8 py-3 rounded-full border border-white/20 text-white font-body font-medium text-sm"
            whileHover={{ scale: 1.05, y: -2, borderColor: 'rgba(255,255,255,0.5)' }}
            whileTap={{ scale: 0.98 }}
          >
            Contact Team
          </motion.a>
        </motion.div>

        <motion.div
          className="flex items-center justify-center gap-3 flex-wrap"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {FOOTER_LOCATIONS.map((loc, i) => (
            <motion.span
              key={loc}
              className="px-4 py-2 rounded-full border border-border-subtle text-text-muted text-sm font-body"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.45 + i * 0.1 }}
              whileHover={{ scale: 1.05, borderColor: 'rgba(59,91,255,0.30)' }}
            >
              {loc}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
