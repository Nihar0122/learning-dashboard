import CourseSkeleton from '@/components/CourseSkeleton'

export default function Loading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
      {[...Array(4)].map((_, i) => <CourseSkeleton key={i} />)}
    </div>
  )
}