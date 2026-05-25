import { BentoTile } from './BentoGrid'
import { Flame } from 'lucide-react'

export default function HeroTile() {
  const streak = 12 // you can make this dynamic later

  return (
    <BentoTile className="lg:col-span-2 bg-gradient-to-br from-[#111118] to-[#1a0a2e]">
      {/* Decorative glow */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <p className="text-gray-400 text-sm mb-1">Good morning 👋</p>
      <h1 className="text-3xl font-bold text-white mb-4">Welcome back, Alex</h1>

      <div className="flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-xl px-4 py-2 w-fit">
        <Flame size={18} className="text-orange-400" />
        <span className="text-orange-300 font-semibold">{streak} day streak</span>
      </div>
    </BentoTile>
  )
}