import { createClient } from '@/lib/supabase/server'
import CourseCard from './CourseCard'
import type { Course } from '@/lib/types'

export default async function CoursesSection() {
  const supabase = await createClient()

  const { data: courses, error } = await supabase
    .from('courses')
    .select('*')
    .order('created_at', { ascending: true })

  if (error) {
    return (
      <div className="col-span-full rounded-2xl border border-red-500/20 bg-red-500/5 p-5 text-red-400 text-sm">
        Error: {error.message}
      </div>
    )
  }

  return (
    <>
      {(courses as Course[]).map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </>
  )
}