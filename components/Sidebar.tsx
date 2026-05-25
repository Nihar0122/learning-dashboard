'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { LayoutDashboard, BookOpen, BarChart2, Settings, ChevronLeft } from 'lucide-react'

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', id: 'dashboard' },
  { icon: BookOpen, label: 'Courses', id: 'courses' },
  { icon: BarChart2, label: 'Progress', id: 'progress' },
  { icon: Settings, label: 'Settings', id: 'settings' },
]

export default function Sidebar() {
  const [active, setActive] = useState('dashboard')
  const [collapsed, setCollapsed] = useState(false)

  return (
    <motion.nav
      animate={{ width: collapsed ? 72 : 220 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="hidden md:flex flex-col h-screen bg-[#111118] border-r border-[#1e1e2e] p-4 relative"
    >
      {/* Collapse toggle */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-8 bg-[#1e1e2e] rounded-full p-1 border border-[#2e2e3e]"
      >
        <motion.div animate={{ rotate: collapsed ? 180 : 0 }}>
          <ChevronLeft size={14} />
        </motion.div>
      </button>

      {/* Logo */}
      <div className="mb-8 px-2">
        <span className="text-purple-400 font-bold text-lg">
          {collapsed ? 'L' : 'LearnOS'}
        </span>
      </div>

      {/* Nav Items */}
      <ul className="flex flex-col gap-1">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => setActive(item.id)}
              className="relative w-full flex items-center gap-3 px-2 py-2.5 rounded-lg text-sm"
            >
              {/* layoutId highlight — this is the key Framer Motion micro-interaction */}
              {active === item.id && (
                <motion.div
                  layoutId="sidebar-highlight"
                  className="absolute inset-0 bg-purple-500/20 rounded-lg border border-purple-500/30"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <item.icon size={18} className={active === item.id ? 'text-purple-400' : 'text-gray-500'} />
              {!collapsed && (
                <span className={active === item.id ? 'text-white' : 'text-gray-500'}>
                  {item.label}
                </span>
              )}
            </button>
          </li>
        ))}
      </ul>
    </motion.nav>
  )
}