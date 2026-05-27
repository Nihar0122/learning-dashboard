# LearnOS — Student Learning Dashboard

A futuristic, animated student dashboard built as part of the 
Frontend Intern Challenge.

**Live Demo:** https://learning-dashboard-chi.vercel.app  
**GitHub:** https://github.com/Nihar0122/learning-dashboard

---

## Tech Stack

- **Next.js 15** (App Router)
- **Supabase** (PostgreSQL database)
- **Tailwind CSS v4**
- **Framer Motion**
- **TypeScript**
- **Lucide React**

---

## Architectural Choices

I went with a clean separation between data and presentation. The Supabase 
fetch happens entirely in a Server Component (CoursesSection.tsx), which 
means the database query runs on the server before anything reaches the 
browser. This keeps API keys secure and makes the initial load faster since 
the HTML already has real data in it.

For the UI layer, I kept things modular — BentoGrid handles the layout and 
staggered animations, each CourseCard is self-contained, and the ProgressBar 
is its own animated component.

---

## Server / Client Component Split

The rule I followed was simple: if it touches the database or has no 
interactivity, it's a Server Component. If it needs animations, state, or 
event handlers, it's a Client Component.

| Component | Type | Reason |
|---|---|---|
| CoursesSection.tsx | Server | Fetches from Supabase |
| page.tsx | Server | Layout only, no interactivity |
| Sidebar.tsx | Client | useState for active item + collapse |
| BentoGrid.tsx | Client | Framer Motion animations |
| ProgressBar.tsx | Client | Animates on mount |
| BottomNav.tsx | Client | useState for active tab |

Suspense boundaries wrap the async Server Component so skeleton loaders 
appear instantly while Supabase responds — no layout shift, no blank screen.

---

## Environment Variables

Copy `.env.example` to `.env.local` and fill in your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

---

## Running Locally

```bash
git clone https://github.com/Nihar0122/learning-dashboard.git
cd learning-dashboard
npm install
cp .env.example .env.local
# Add your Supabase keys to .env.local
npm run dev
```

Open http://localhost:3000 in your browser.

---

## Challenges Faced

The trickiest part was the Server/Client boundary with Framer Motion. Since 
animations require browser APIs, every animated component needs 'use client' 
— but I still wanted data fetching to stay on the server. The solution was 
fetching in a Server Component and passing the data down as props to Client 
Components, keeping the best of both worlds.

Another challenge was TypeScript strictness with Framer Motion's Variants 
type — the build would fail without explicitly typing the animation objects, 
which wasn't obvious from the docs.

Supabase's Row Level Security was also blocking reads by default, which took 
some debugging to figure out since the error wasn't immediately clear.