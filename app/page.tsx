import About from '@/components/custom/About'
import { Hero } from '@/components/custom/Hero'
import DockComponent from '@/components/ui/dock'
import React from 'react'

const App = () => {
  return (
    <div className='container mx-auto relative h-screen '>
    <Hero/>
    <div className="flex items-center justify-center ">
    <DockComponent/>
    </div>
    <About/>
    </div>
  )
}

export default App