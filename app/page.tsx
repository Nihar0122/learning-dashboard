import { Suspense } from 'react'
import Sidebar from '@/components/Sidebar'
import { BentoGrid } from '@/components/BentoGrid'
import HeroTile from '@/components/HeroTile'
import CoursesSection from '@/components/CoursesSection'
import CourseSkeleton from '@/components/CourseSkeleton'
import BottomNav from '@/components/BottomNav'

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-[#0a0a0f] overflow-hidden">
      <Sidebar />
      <BottomNav/>

      <main className="flex-1 overflow-y-auto">
        <BentoGrid>
          <HeroTile />

          {/* Suspense wraps the async server component */}
          <Suspense fallback={
            <>{[...Array(4)].map((_, i) => <CourseSkeleton key={i} />)}</>
          }>
            <CoursesSection />
          </Suspense>
        </BentoGrid>
      </main>
    </div>
  )
}