'use client'
import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  FLOATING_TAGS,
  STATUS_COLORS,
  STATUS_TEXT_COLORS,
  STATUS_LABELS,
} from '@/lib/constants'

const VIDEO_SRC =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_115655_b4d9cd77-feed-43cd-a198-af78ebdf1f7a.mp4'

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
}

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.12])
  const videoOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.3])

  useEffect(() => {
    videoRef.current?.play().catch(() => {})
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video background with subtle parallax scale */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ scale: videoScale, opacity: videoOpacity }}
      >
        <video
          ref={videoRef}
          src={VIDEO_SRC}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      </motion.div>

      {/* Thin uniform tint — keeps video colors visible */}
      <div className="absolute inset-0 z-[1] bg-black/25" />

      {/* Top fade for navbar readability */}
      <div className="absolute top-0 left-0 right-0 h-36 z-[1]"
        style={{ background: 'linear-gradient(to bottom, rgba(5,8,22,0.75) 0%, transparent 100%)' }}
      />

      {/* Bottom fade — blends into StatsBar below */}
      <div className="absolute bottom-0 left-0 right-0 h-48 z-[1]"
        style={{ background: 'linear-gradient(to top, #050816 0%, rgba(5,8,22,0.6) 50%, transparent 100%)' }}
      />

      {/* Blue radial glow — accent atmosphere */}
      <div className="absolute inset-0 z-[2] bg-hero-glow pointer-events-none" />

      {/* Dot grid */}
      <div className="absolute inset-0 z-[2] bg-dot-grid opacity-15 pointer-events-none" />

      {/* Content — no y-parallax so it doesn't drift over the next section */}
      <motion.div
        className="relative z-10 text-center px-4 max-w-3xl mx-auto pt-16 pb-16"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* Label pill */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full
                     border border-accent-border bg-accent-soft backdrop-blur-sm mb-5"
        >
          <motion.span
            className="w-2 h-2 rounded-full bg-emerald-400"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
          <span className="section-label">Cross-Border Financial Infrastructure</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="font-display font-extrabold text-hero text-white mb-4 leading-tight"
        >
          Infrastructure for{' '}
          <span className="text-gradient-accent">Global Payments</span>
          {' '}&amp; Digital Assets
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg font-body text-text-secondary max-w-xl mx-auto mb-8 leading-relaxed"
        >
          TokPay helps businesses, banks, fintechs, and exchanges move money globally,
          access liquidity, and enable digital asset workflows through modern settlement infrastructure.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <motion.a
            href="#cta"
            className="px-6 py-3 rounded-full bg-accent text-white font-body font-medium text-sm
                       shadow-glow flex items-center gap-2"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Talk to Us
            <motion.span
              className="inline-block"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              →
            </motion.span>
          </motion.a>
          <motion.a
            href="#platform"
            className="px-6 py-3 rounded-full border border-white/25 text-white font-body font-medium text-sm
                       backdrop-blur-sm bg-white/5"
            whileHover={{ scale: 1.05, y: -2, borderColor: 'rgba(255,255,255,0.5)' }}
            whileTap={{ scale: 0.98 }}
          >
            Explore Infrastructure
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Floating transaction tags */}
      {FLOATING_TAGS.map((tag, i) => (
        <motion.div
          key={tag.label}
          className={`
            absolute z-10 hidden lg:flex items-center gap-2
            px-4 py-2 rounded-full border border-accent-border bg-bg-card/80 backdrop-blur-md
            text-xs font-body text-white ${tag.pos}
          `}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.4 + i * 0.2, duration: 0.5, ease: 'easeOut' }}
          whileHover={{ scale: 1.08, y: -4 }}
        >
          <motion.span
            className={`w-1.5 h-1.5 rounded-full ${STATUS_COLORS[tag.status]}`}
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
          />
          {tag.label}
          <span className={`text-[10px] ${STATUS_TEXT_COLORS[tag.status]}`}>
            {STATUS_LABELS[tag.status]}
          </span>
        </motion.div>
      ))}
    </section>
  )
}
