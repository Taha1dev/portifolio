import { ChevronsUp, Search, Code, LayoutDashboard } from 'lucide-react'
import { MagicCard } from '../magicui/magic-card'
import Heading1 from '../chunks/Heading1'

const services = [
  {
    title: 'Performance Optimization',
    icon: <ChevronsUp className="h-8 w-8 text-blue-500" />,
    description: 'Improve website speed and performance for a smoother user experience.',
  },
  {
    title: 'SEO Optimization',
    icon: <Search className="h-8 w-8 text-green-500" />,
    description: 'Optimize your site to rank higher in search engine results and attract more traffic.',
  },
  {
    title: 'Web Development',
    icon: <Code className="h-8 w-8 text-red-500" />,
    description:
      'Build and Develop responsive and scalable web applications using modern web technologies and frameworks.',
  },
  {
    title: 'UI/UX Design',
    icon: <LayoutDashboard className="h-8 w-8 text-purple-500" />,
    description: 'Create intuitive and visually appealing interfaces that enhance user engagement and user experience.',
  },
]

const ServiceCards = () => {
  return (
    <main id="services">
      <Heading1 className="text-center !text-4xl" showValue="Services" />
      <p className="text-center my-3">
        These are the essential tools, libraries, and frameworks that constitute my current tech stack, enabling me to
        develop robust and innovative applications
      </p>
      <section className={' grid w-full grid-cols-1 gap-4 lg:grid-cols-4 md:grid-cols-2'}>
        {services.map((service, index) => (
          <MagicCard
            key={index}
            className="flex flex-col items-center justify-center p-5 border border-main/20 cursor-pointer shadow-2xl text-center"
          >
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-base font-scode text-justify text-gray-500">{service.description}</p>
            <div className="flex flex-col items-center justify-center mb-4">
              <span className="text-center">{service.icon}</span>
            </div>
          </MagicCard>
        ))}
      </section>
    </main>
  )
}

export default ServiceCards
