import AboutMe from '@/components/custom/About'
import Hero  from '@/components/custom/Hero'
import DockComponent from '@/components/ui/dock'
import React from 'react'

const App = () => {
  return (
    <div className='container mx-auto relative h-screen'>
    <Hero/>
    <AboutMe/>
    <div className="z-50 flex items-center justify-center sticky bottom-0 ">
    <DockComponent/>
    </div>
    </div>
  )
}

export default App