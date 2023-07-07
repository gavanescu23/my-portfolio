import React from 'react'
import img1 from '../assets/work/image1.jpg'
import img2 from '../assets/work/image2.jpg'
import img3 from '../assets/work/image3.jpg'
import img4 from '../assets/work/image7.jpg'
import img5 from '../assets/work/image5.jpg'
import img6 from '../assets/work/image7.jpg'

const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: img1
        },
        {
            id: 2,
            src: img2
        },
        {
            id: 3,
            src: img3
        },
        {
            id: 4,
            src: img4
        },
        {
            id: 5,
            src: img5
        },
        {
            id: 6,
            src: img6
        },

    ]
    return (
        <div name="portfolio" className='text-white w-full md:h-screen'>
            <div className="max-w-screen-lg flex flex-col mx-auto  w-full justify-center p-4 ">
                <div className="pb-8 mt-20">
                    <p className='text-gray-500 inline font-bold font-bodyfont text-4xl border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-6 text-gray-500 font-bodyfont'>Check out some cool images.</p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            {portfolios.map(({id,src}) => (
                <div key={id} className="shadow-md shadow-gray-700 rounded-lg object-cover">
                        <img className='rounded-md duration-200 hover:scale-105' src={src} alt="" />
                    <div className='flex justify-center items-center'>
                        <button className='w-1/2 px-6 py-3 duration-200 hover:scale-105 font-bodyfont text-gray-500'>Demo</button>
                        <button className='w-1/2 px-6 py-3 duration-200 hover:scale-105 font-bodyfont text-gray-500'>Code</button>
                    </div>
                </div>
            ))}
            </div>
            </div>
            
        </div>
    )
}

export default Portfolio