'use client'
import { motion } from 'framer-motion'

export default function ProgressBar({ value }: { value: number }) {
  return (
    <div className="w-full h-1.5 bg-[#1e1e2e] rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
      />
    </div>
  )
}