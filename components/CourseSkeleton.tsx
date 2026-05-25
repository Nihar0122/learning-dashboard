export default function CourseSkeleton() {
  return (
    <div className="rounded-2xl bg-[#111118] border border-[#1e1e2e] p-5 space-y-4 animate-pulse">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-[#1e1e2e]" />
        <div className="h-4 bg-[#1e1e2e] rounded w-3/4" />
      </div>
      <div className="space-y-2 mt-auto">
        <div className="h-2 bg-[#1e1e2e] rounded w-full" />
      </div>
    </div>
  )
}