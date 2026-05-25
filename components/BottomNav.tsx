'use client'
import { useState } from 'react'
import { LayoutDashboard, BookOpen, BarChart2, Settings } from 'lucide-react'
import { motion } from 'framer-motion'

const items = [
  { icon: LayoutDashboard, label: 'Home', id: 'home' },
  { icon: BookOpen, label: 'Courses', id: 'courses' },
  { icon: BarChart2, label: 'Stats', id: 'stats' },
  { icon: Settings, label: 'Settings', id: 'settings' },
]

export default function BottomNav() {
  const [active, setActive] = useState('home')

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-[#111118] border-t border-[#1e1e2e] flex justify-around py-3 z-50">
      {items.map((item) => (
        <button key={item.id} onClick={() => setActive(item.id)} className="flex flex-col items-center gap-1">
          {active === item.id && (
            <motion.div layoutId="bottom-highlight" className="absolute inset-0 bg-purple-500/10 rounded-lg" />
          )}
          <item.icon size={20} className={active === item.id ? 'text-purple-400' : 'text-gray-600'} />
          <span className={`text-[10px] ${active === item.id ? 'text-purple-400' : 'text-gray-600'}`}>
            {item.label}
          </span>
        </button>
      ))}
    </nav>
  )
}