import { BentoTile } from './BentoGrid'
import ProgressBar from './ProgressBar'
import * as LucideIcons from 'lucide-react'
import type { Course } from '@/lib/types'

function DynamicIcon({ name }: { name: string }) {
  // Safely look up the icon by name from Lucide
  const Icon = (LucideIcons as Record<string, any>)[name]
  if (!Icon) return <LucideIcons.BookOpen size={22} className="text-purple-400" />
  return <Icon size={22} className="text-purple-400" />
}

export default function CourseCard({ course }: { course: Course }) {
  return (
    <BentoTile>
      {/* Grain texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.png')] pointer-events-none" />

      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20">
          <DynamicIcon name={course.icon_name} />
        </div>
        <h3 className="text-white font-medium text-sm leading-tight">{course.title}</h3>
      </div>

      <div className="mt-auto">
        <div className="flex justify-between text-xs text-gray-500 mb-2">
          <span>Progress</span>
          <span className="text-purple-400 font-medium">{course.progress}%</span>
        </div>
        <ProgressBar value={course.progress} />
      </div>
    </BentoTile>
  )
}