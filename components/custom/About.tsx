'use client'
import { CircleArrowDown } from 'lucide-react'
import { NeonGradientCard } from '../magicui/neon-gradient-card'

const AboutMe = () => {
  const navigateDown = () => {
    window.scrollY = 20
  }
  return (
    <NeonGradientCard className="items-center justify-center text-center *:text-white ">
      <section className="relative flex flex-col items-center justify-center gap-8 p-8 ">
        <span className="pointer-events-none capitalize z-10 h-full whitespace-pre-wrap text-center text-6xl font-bold leading-none tracking-tighter text-white ">
          about me
        </span>

        <p className="text-lg max-w-6xl text-center text-white">
          I'm a skilled front-end developer with two years of experience, specializing in{' '}
          <span className="font-semibold text-yellow-300">React</span>,{' '}
          <span className="font-semibold text-yellow-300">Next.js</span>, and{' '}
          <span className="font-semibold text-yellow-300">Angular</span>. I craft responsive, high-quality user
          interfaces that deliver exceptional user experiences. I’m passionate about staying current with industry
          trends and continuously enhancing my skills to provide innovative solutions.
        </p>

        <div className="flex justify-center gap-6">
          <CircleArrowDown onClick={navigateDown} size={50} className="animate-bounce" />
        </div>

        <div className="absolute bottom-4 right-4">
          <i className="magic-icon magic-icon-user text-white text-4xl animate-pulse"></i>
        </div>
      </section>
    </NeonGradientCard>
  )
}

export default AboutMe
