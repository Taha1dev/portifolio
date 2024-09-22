import Image from 'next/image'
import VanillaTilt from 'vanilla-tilt'
import { useEffect } from 'react'
const ServicesCard = ({ src, alt, title, description, className }: any) => {
  return (
    <div
      style={{
        top: '-60px',
        padding: '0.5em',
      }}
      className={`bg-[#ffffff11] opacity-90 flex items-center gap-2 text-white rounded-xl p-1 `}
    >
      <Image width={80} height={80} src="/vercel.svg" alt="icon" />
      <div className='flex-1'>
        <h1 className="text-lg font-bold p-1">{title}</h1>
        <p className="text-base p-1 max-w-[70%]">{description}</p>
      </div>
    </div>
  )
}

export default ServicesCard
