"use client"
import {Code2, Database, Palette, Smartphone, Terminal, Zap} from "lucide-react";
import {motion} from "motion/react";

const skills = [
  {
    icon: Code2,
    title: 'Frontend Development',
    skills: ['React', 'TypeScript', 'Next.js', 'Vue.js', 'Tailwind CSS', 'Redux', 'React Query', 'Zustand', 'Vite', 'Webpack', 'HTML5', 'CSS3', 'SASS'],
  },
  {
    icon: Terminal,
    title: 'Backend Development',
    skills: ['Node.js', 'Express', 'NestJS', 'REST APIs', 'GraphQL', 'tRPC', 'Python', 'Django', 'FastAPI', 'Docker', 'Microservices'],
  },
  {
    icon: Database,
    title: 'Database',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Supabase', 'Prisma', 'MySQL'],
  },
  {
    icon: Palette,
    title: 'Design',
    skills: ['Figma', 'UI/UX', 'Responsive Design', 'Animations'],
  },
  {
    icon: Zap,
    title: 'Performance',
    skills: ['Optimization', 'SEO', 'Web Vitals', 'Accessibility'],
  },
  {
    icon: Smartphone,
    title: 'Mobile',
    skills: ['React Native', 'PWA', 'Cross-platform', 'App Design'],
  },
];

export default function Skills() {
  return (
    <div className={"text-center"}>
      <motion.h2
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{delay: 0.2, duration: 0.5}}
        className={"text-accent-purple text-center"}>
        Skills & Expertise
      </motion.h2>
      <motion.p
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{delay: 0.3, duration: 0.5}}
        className={"text-text-secondary py-4"}>
        A comprehensive toolkit for building modern web application.
      </motion.p>
      <div className={"grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 p-10 w-full 2xl:w-3/4 mx-auto"}>
        {skills.map((skillSet, index) => <SingleSkillSet key={index} index={index} data={skillSet}/>)}
      </div>
    </div>
  )
}

function SingleSkillSet({index, data}: { index: number, data: typeof skills[number] }) {
  return (
    <motion.div
      initial={{opacity: 0, y: 20}}
      whileInView={{opacity: 1, y: 0}}
      transition={{delay: 0.1 + 0.2 * index, duration: 0.5}}>
      <motion.div
        transition={{duration: 0.3}}
        whileHover={{scale: 1.03}}
        className={"bg-blue-950/90 backdrop-blur-md border-b border-purple-500/20 rounded-lg p-4 flex flex-col items-start gap-4"}>
        <div
          className="inline-block p-3 bg-purple-600/20 rounded-lg group-hover:bg-purple-600/30 transition-colors">
          <data.icon className="w-8 h-8 text-purple-400"/>
        </div>
        <h3 className="text-text-secondary">
          {data.title}
        </h3>
        <div className="flex flex-wrap gap-2">
          {data.skills.map((skill, index) => (
            <span key={index}
                  className="px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full text-sm border border-purple-500/20 whitespace-nowrap flex gap-1">
              {index < 2 && <span className="text-yellow-400">★</span>}
              {skill}
            </span>))}
        </div>
      </motion.div>
    </motion.div>
  )
}