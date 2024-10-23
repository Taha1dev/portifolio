'use client'
import { cn } from '@/lib/utils'
import Heading1 from '../chunks/Heading1'
import DotPattern from '../magicui/dot-pattern'
import styles from '@/components/css/main.module.css'
import { NeonGradientCard } from '../magicui/neon-gradient-card'
import Image from 'next/image'
import profile from '../../public/profile.png'
import arrow from '../../public/arrow-down.svg'
export default function Hero() {
  const sayHi = () => {
    console.log('bye')
  }
  return (
    <div className="flex relative h-full w-full flex-col justify-center items-center lg:p-48 lg:pt-36 md:p-24 sm:p-12 pt-40 bg-foreground rounded-b-[50px]">
      {/* <div className=" "> */}
      {/* </div> */}
      {/* <Image className="z-10 size-40 aspect-square rounded-full" alt="profile" /> */}
      <div id="img" className="z-10 size-36 rounded-full bg-gray-400" />
      <Heading1
        className="text-transparent bg-clip-text bg-gradient-to-r from-[#a8d8ea] via-[#d3ecf8] to-[#e6f7ff] text-center max-w-2xl"
        showValue="Building Digital Products, Brands, and Experiences."
      />
      <br />
      <div className="z-10 flex justify-between items-center gap-2 bg-white rounded-full p-1 animate-bounce cursor-pointer">
        {/* <p className="capitalize text-black">let&apos;s get started</p> */}
        <Image src={arrow} alt="arrow down" className="size-8 " />
      </div>
      {/* <p className="max-w-2xl z-10 text-justify whitespace-pre-wrap text-wrap text-gray-200 my-4 text-lg">
        I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences.
        Currently, I’m focused on developing innovative e-government services at{' '}
        <span className="font-semibold cursor-pointer text-white">Injaz Tech</span>, creating accessible, human-centered
        solutions.
      </p> */}
      {/* <div className="flex justify-center items-center">
        <button className={`${styles.coolBeans} !w-fit text-white`}>Downlaod Resume</button>
      </div> */}
      <DotPattern
        className={cn('[mask-image:radial-gradient(100%_circle_at_right_top,white,transparent) ] opacity-30')}
        aria-hidden="true"
      />
    </div>
  )
}
