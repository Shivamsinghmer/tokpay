'use client'
import { motion } from 'framer-motion'
import { USE_CASES } from '@/lib/constants'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06, delayChildren: 0.2 },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export default function UseCasesGrid() {
  return (
    <section id="use-cases" className="bg-bg-secondary py-20 px-4">
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
            Use Cases
          </motion.p>
          <motion.h2
            className="font-display font-bold text-h2 text-white max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            We Power Financial Operations Across Industries
          </motion.h2>
          <motion.p
            className="text-text-secondary text-base mt-4 max-w-lg mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Whether you are building for enterprises, exchanges, or institutions — TokPay
            gives you the infrastructure minus the engineering overhead.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
        >
          {USE_CASES.map((uc) => (
            <motion.div
              key={uc.title}
              className="card-base card-hover p-5 flex flex-col gap-3"
              variants={item}
              whileHover={{ y: -6, borderColor: 'rgba(59,91,255,0.30)' }}
            >
              <motion.div
                className="w-11 h-11 rounded-xl bg-accent-soft border border-accent-border flex items-center justify-center text-xl shrink-0"
                whileHover={{ rotate: [0, -10, 10, -5, 0], transition: { duration: 0.4 } }}
              >
                {uc.icon}
              </motion.div>
              <div>
                <h3 className="font-display font-semibold text-white text-base mb-2">{uc.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{uc.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
