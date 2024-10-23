'use client'
import Image from 'next/image'

const AboutMe = () => {
  return (
    // <NeonGradientCard className="items-center justify-center text-center *:text-white ">
    <section className=" text-white py-12 px-6" id="about-me">
      <div className="container mx-auto flex flex-col md:flex-row items-center space-y-6 md:space-y-0">
        {/* Left: Text Section */}
        <div className="md:w-2/3">
          <h2 className="text-2xl md:text-3xl font-extrabold  mb-4">About Me</h2>
          <p className="mb-6">
            Hello! My name is Taha and I enjoy creating things that live on the internet. My interest in web development
            started in 2021 when I decided to pursue becoming a web developer — experimenting with building small
            projects and solving coding challenges taught me a lot about HTML & CSS and{' '}
            <span className="text-[#efd81d]  select-none">JavaScript</span>
          </p>
          <p className="mb-6">
            Fast-forward to today, and I’ve had the privilege of working at a
            <span className="text-main select-none"> company that develops e-government services</span>, My main focus
            these days is building accessible, inclusive products and digital experiences for a variety of clients.
          </p>
          <p className="mb-6">
            I’ve recently started learning about{' '}
            <span className="text-main capitalize  select-none">mobile development </span>
            and diving deeper into frontend topics such as{' '}
            <span className="text-main capitalize   select-none">micro frontend </span>,
            <span className="text-main capitalize  select-none">web components</span>, and more.
          </p>
        </div>

        {/* Right: Image Section */}
        <div className="md:w-1/3 flex justify-center">
          <div className="relative">
            <Image
              width={500}
              height={500}
              src="/profsile.jpg"
              alt="Taha Profile"
              className="rounded-lg border-4 border-main shadow-lg w-80"
            />
            <div className="absolute inset-0 bg-main mix-blend-multiply  opacity-60 hover:mix-blend-normal hover:opacity-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
