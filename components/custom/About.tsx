'use client'
import { NeonGradientCard } from '../magicui/neon-gradient-card'
import Globe from '../magicui/globe'

const AboutMe = () => {
  const navigateDown = () => {
    // window.scrollTo()
  }

  return (
    // <NeonGradientCard className="items-center justify-center text-center *:text-white ">
      <section className="relative flex flex-col items-center justify-center gap-8 p-8 ">
        <span className="pointer-events-none capitalize z-10 h-full whitespace-pre-wrap text-center text-6xl font-bold leading-none tracking-tighter text-white ">
          about me
        </span>
        <div className="flex lg:flex-row flex-col justify-center items-center">
          <p className="text-xl max-w-6xl text-center text-gray-300">
            I'm a skilled front-end developer with two years of experience, specializing in{' '}
            <span className="font-semibold text-white underline">React</span>,{' '}
            <span className="font-semibold text-white underline">Next.js</span>, and{' '}
            <span className="font-semibold text-white underline">Angular</span>. I craft responsive, high-quality user
            interfaces that deliver exceptional user experiences. I’m passionate about staying current with industry
            trends and continuously enhancing my skills to provide innovative solutions.
          </p>
          
        </div>
        {/* </NeonGradientCard> */}
      </section>
  )
}

export default AboutMe
