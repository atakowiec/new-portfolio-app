"use client"
import BackgroundEffect from "@/components/home/BackgroundEffect";
import {LuGithub, LuLinkedin, LuMail} from "react-icons/lu";
import {motion} from "motion/react";
import {AnimatedLink, AnimatedButton} from "@/components/AnimatedComponents";

export default function Hero() {
  function scrollToSection(id: string) {
    window.scrollTo({top: document.getElementById(id)?.offsetTop, behavior: "smooth"})
  }

  return (
    <div className={"h-screen flex items-center justify-center"}>
      <BackgroundEffect/>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.8}}
          className="text-center"
        >
          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
            className="mb-6"
          >
            <span className="text-purple-400 tracking-widest uppercase">
              Full Stack Developer
            </span>
          </motion.div>

          <motion.h1
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.2, duration: 0.8}}
            className="mb-6"
          >
            <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-blue-400 bg-clip-text text-transparent">
              Mateusz Cięszczyk
            </span>
          </motion.h1>

          <motion.p
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.4, duration: 0.8}}
            className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto"
          >
            Designing and developing end-to-end web applications with modern technologies.
          </motion.p>

          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.6, duration: 0.8}}
            className="flex gap-4 justify-center items-center flex-wrap"
          >
            <AnimatedButton
              onClick={() => scrollToSection('contact')}
              initialColor={"var(--color-text-primary)"}
              whileHoverColor={"var(--color-text-primary)"}
              className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg"
            >
              Get In Touch
            </AnimatedButton>
            <AnimatedButton
              onClick={() => window.open('#', '_blank')}
              initialColor={"var(--color-text-primary)"}
              whileHoverColor={"var(--color-text-primary)"}
              className="px-8 py-3 border-2 border-purple-600 hover:bg-purple-600/10 rounded-lg"
            >
              View Resume
            </AnimatedButton>
          </motion.div>

          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.8, duration: 0.8}}
            className="flex gap-6 justify-center mt-8"
          >
            <AnimatedLink href={"github"} aria-label="GitHub">
              <LuGithub className="w-6 h-6"/>
            </AnimatedLink>
            <AnimatedLink href={"linkedin"} aria-label="LinkedIn">
              <LuLinkedin className="w-6 h-6"/>
            </AnimatedLink>
            <AnimatedLink href={"mailto:contact@cieszczyk.pl"} aria-label="Email">
              <LuMail className="w-6 h-6"/>
            </AnimatedLink>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}