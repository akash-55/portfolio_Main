import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

      {/* container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-blue-300'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Akash</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Software developer</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'> currently studying Masters of computer and information sciences at Auckland University of Technology</p>
        <div>
        <Link to="work" smooth={true} duration={500}>
          <button className=' group text-white border-2 px-6 py-3 mx-2 flex items-center hover:bg-blue-300 hover:border-blue-300'>
                          view work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3' />
            </span>
          </button>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Home