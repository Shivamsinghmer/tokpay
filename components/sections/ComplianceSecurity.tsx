'use client'
import { motion } from 'framer-motion'
import { COMPLIANCE_ROWS } from '@/lib/constants'

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const rowItem = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

const badgeItem = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' as const } },
}

export default function ComplianceSecurity() {
  return (
    <section id="compliance" className="bg-bg-secondary py-20 px-4">
      <div className="max-w-4xl mx-auto">
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
            Compliance & Security
          </motion.p>
          <motion.h2
            className="font-display font-bold text-h2 text-white max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            Built for Regulatory Confidence
          </motion.h2>
          <motion.p
            className="text-text-secondary text-base mt-4 max-w-md mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            TokPay embeds compliance directly into the payment and settlement layer,
            so every transaction is screened, tracked, and reportable.
          </motion.p>
        </motion.div>

        {/* Compliance rows */}
        <motion.div
          className="card-base overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {COMPLIANCE_ROWS.map((row, i) => (
              <motion.div
                key={row.title}
                variants={rowItem}
                className={`
                  flex items-center justify-between px-8 py-7 group cursor-default
                  hover:bg-accent-soft transition-colors duration-200
                  ${i < COMPLIANCE_ROWS.length - 1 ? 'border-b border-border-subtle' : ''}
                `}
                whileHover={{ x: 4 }}
              >
                <div className="flex items-center gap-6">
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-accent-soft border border-accent-border flex items-center justify-center text-xl shrink-0 group-hover:border-accent transition-colors"
                    whileHover={{ rotate: [0, -5, 5, -3, 0], transition: { duration: 0.3 } }}
                  >
                    {row.icon}
                  </motion.div>
                  <div>
                    <h3 className="font-display font-semibold text-white text-lg mb-1 group-hover:text-accent transition-colors">
                      {row.title}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed max-w-lg">{row.desc}</p>
                  </div>
                </div>
                <motion.span
                  className="text-text-muted group-hover:text-accent transition-colors text-xl ml-6 shrink-0"
                  whileHover={{ x: 4 }}
                >
                  →
                </motion.span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-3 mt-10"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {['VARA Aligned', 'AML/CTF Compliant', 'ISO 27001 Controls', 'SOC 2 Aligned', 'GDPR Ready'].map(badge => (
            <motion.span
              key={badge}
              className="px-4 py-2 rounded-full border border-border-subtle text-text-muted text-xs font-body"
              variants={badgeItem}
              whileHover={{ scale: 1.05, borderColor: 'rgba(59,91,255,0.30)', color: '#B8C0D9' }}
            >
              {badge}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
