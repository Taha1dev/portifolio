'use client'
import ServicesCard from './ServicesCard'
import Heading1 from '../chunks/Heading1'

const cards = [
  {
    src: '/svg/skills/react.svg',
    alt: 'Web Development',
    title: 'Web Development',
    description: 'Building High-quality web application using modern solutions',
  },
  {
    src: '/svg/ui_ux.svg',
    alt: 'UI/UX Design',
    title: 'UI/UX Design',
    description: ' Specialize in creating intuitive and visually appealing user interfaces.',
  },
  {
    src: '/svg/newseo.svg',
    alt: 'SEO Optimization',
    title: 'SEO Optimization',
    description: " SEO optimization services improve your website's visibility in search engine  building",
  },
  {
    src: '/svg/webpack.svg',
    alt: 'Performance Optimization',
    title: 'Performance Optimize',
    description: 'Optimize websites and applications to deliver fast and efficient performance.',
  },
]

const Services = () => {
  return (
    <div id="services">
      <Heading1 className="text-center !text-4xl" showValue="What I'm Doing" />
      <div className="my-12 grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-4 mx-28">
        {cards.map((card, index) => (
          <ServicesCard
            key={index}
            src={card.src}
            alt={card.alt}
            title={card.title}
            description={card.description}
            className={`logo${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Services
