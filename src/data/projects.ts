import formImage from '../assets/images/projects/modernForm.png'
import gbImage from "../assets/images/projects/growth-board/gr-main.png"
import progressImg from "../assets/images/projects/progress.../Screenshot 2026-11-18 at 12.44.53 AM.png"
import type { Project } from '../types/project'

export const projects: Project[] = [
   {
    id: 'growth-board',
    title: "Growth board",
    image: gbImage,
    description:
      "A learning dashboard for organizing skills and nested subskills, logging practice sessions, and tracking progress through interactive charts and streaks. Includes focus timers, learning resources, dark mode, and browser-based persistence.",
    technologies: ['next', 'react', 'tailwind'],
    githubUrl: 'https://github.com/yaadevmohit/progress...',
    liveUrl: 'https://skills-tracker-six.vercel.app/growth-board'
  },
  {
    id: 'modern-form',
    title: 'Modern Form',
    image: formImage,
    description:
      'A multi-step form built with React and TypeScript. Includes input validation, error handling, and a fully responsive mobile-first layout.',
    technologies: ['react', 'typescript', 'html', 'css'],
    githubUrl: 'https://github.com/yaadevmohit/modern-form',
    liveUrl: 'https://multi-step-form-mohit.vercel.app/',
  },
  {
    id: 'progress',
    title: 'progress...',
    image: progressImg,
    description: "A personal-growth app prototype that guides users from broad career goals to a focused job-search plan. Features an animated space-themed homepage, a branching questionnaire, and tools for organizing applications, connections, and interview preparation.",
    technologies: ["react", "next", "tailwind"],
    githubUrl: "https://github.com/yaadevmohit/progress...",
    liveUrl: "https://skills-tracker-six.vercel.app"
  }
]
