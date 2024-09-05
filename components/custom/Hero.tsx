'use client'
import { cn } from '@/lib/utils'
import Heading1 from '../chunks/Heading1'
import DotPattern from '../magicui/dot-pattern'
import ShinyButton from '../magicui/shiny-button'
import ShimmerButton from '../magicui/shimmer-button'
import styles from '@/components/css/main.module.css'
import { NeonGradientCard } from '../magicui/neon-gradient-card'
export default function Hero() {
  return (
    <div className="flex relative h-full w-full flex-col justify-start items-start lg:p-48 lg:pt-36 md:p-24 sm:p-12 pt-40 ">
      {/* <div className=" "> */}
      <NeonGradientCard className="absolute -top-[300px] -left-[900px] -z-50" />
      {/* </div> */}
      <p className={`font-mono text-main bg-main/20 rounded-md px-1 font-medium z-10 mb-4`}>Hi my name is</p>
      <Heading1 className="!text-[#ccd6f6]" showValue="Taha AL Mulla." />
      <Heading1 className="!text-[#8892b0]" showValue="I build things for the web." />
      <p className="max-w-2xl z-10 text-justify whitespace-pre-wrap text-wrap text-gray-200 my-4 text-lg">
        I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences.
        Currently, I’m focused on developing innovative e-government services at{' '}
        <span className="font-semibold cursor-pointer text-white">Injaz Tech</span>, creating accessible, human-centered
        solutions.
      </p>
      <div className="flex justify-center items-center">
        <button className={`${styles.coolBeans} !w-fit text-white`}>Downlaod Resume</button>
      </div>
      <DotPattern
        className={cn('[mask-image:radial-gradient(700px_circle_at_right_top,white,transparent)]')}
        aria-hidden="true"
      />
    </div>
  )
}
