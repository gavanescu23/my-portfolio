import React from 'react'
import me from '../assets/me2u.jpg'
import { BiRightArrowAlt } from 'react-icons/bi'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full ">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className='text-white text-4xl font-permmarker md:text-7xl font-bold'>
            I'm a Front-End Developer
          </h2>
          <p className='text-gray-500 py-4 font-bodyfont max-w-md'>
            Creative front-end developer having a keen eye on design technologies, building responsive websites and web applications.
            As a front-end developer my skills are based on HTML, CSS, JavaScript plus modern libraries and frameworks
            (React JS, Tailwind, Bootstrap, MUI), but not limited to these.
          </p>
          <div>
            <Link to='portfolio' smooth duration={500}
              className='group text-white font-bodyfont w-fit cursor-pointer px-6 py-4 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-800 via-cyan-500 to-cyan-200 '>
              Portfolio
              <span className='group-hover:rotate-90 duration-300 '>
                <BiRightArrowAlt className='ml-1' size={20} />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            className='rounded-2xl mx-auto w-2/5 md:w-3/5'
            src={me}
            alt="my profile" />
        </div>
      </div>
    </div>
  )
}

export default Home