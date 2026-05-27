'use client'
import { motion, Variants } from 'framer-motion'

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08
    }
  }
}

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 }
  }
}

export function BentoGrid({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6 auto-rows-[minmax(160px,auto)]"
    >
      {children}
    </motion.div>
  )
}

export function BentoTile({
  children,
  className = ''
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.article
      variants={item}
      whileHover={{
        scale: 1.02,
        transition: { type: 'spring', stiffness: 300, damping: 20 }
      }}
      className={`relative rounded-2xl bg-[#111118] border border-[#1e1e2e]
        hover:border-purple-500/40 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]
        overflow-hidden p-5 ${className}`}
    >
      {children}
    </motion.article>
  )
}