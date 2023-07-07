import React from 'react'
import react from '../assets/reactC.png'
import css from '../assets/cssC.png'
import html from '../assets/htmlC.png'
import tailwind from '../assets/tailwindC.png'
import JS from '../assets/jsC.png'
import git from '../assets/githubC.png'

const Experience = () => {

  const logos = [
    {
      id: 1,
      src: react,
      title: 'React',
      style: 'shadow-cyan-500'

    },
    {
      id: 2,
      src: tailwind,
      title: 'Tailwind',
      style: 'shadow-cyan-500'

    },
    {
      id: 3,
      src: git,
      title: 'GitHub',
      style: 'shadow-cyan-500'

    },
    {
      id: 4,
      src: html,
      title: 'HTML5',
      style: 'shadow-orange-500'

    },
    {
      id: 5,
      src: css,
      title: 'CSS3',
      style: 'shadow-yellow-500'

    },
    {
      id: 6,
      src: JS,
      title: 'JavaScript',
      style: 'shadow-purple-500'

    },
  ]

  return (
    <div name='experience' className='w-full h-screen'>
      <div className="max-w-screen-lg mx-auto flex flex-col p-4 justify-center">
      <div className="pb-8 mt-20">
        <p className='text-gray-500 inline font-bold text-4xl border-b-4 border-gray-500 font-bodyfont '>Experience</p>
        <p className='py-6 text-gray-500 font-bodyfont'>These are the technologies I worked with.</p>
      </div>
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
        {logos.map(({id, src, title, style}) => (
          <div key={id} className={`shadow-md font-bodyfont hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
          <img src={src} alt="" className='w-20 mx-auto' />
            <p className='mt-4 text-gray-500'>{title}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default Experience