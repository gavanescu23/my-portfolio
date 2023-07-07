import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen'>
        <div className="flex flex-col justify-center mx-auto p-4 max-w-screen-lg h-full">
            <div className="flex flex-col justify-center items-center pb-8 mt-20">
                <p className='text-4xl text-gray-500 font-bold inline border-b-4 border-gray-500 font-bodyfont'>Contact</p>
                <p className='text-gray-500 py-6 font-bodyfont'>Submit the form to get in touch with me.</p>
            </div>
            <div className="flex justify-center items-center">
                <form action="https://getform.io/f/bad4530d-eace-46ac-860a-77083780a3a4" method='POST' className='mx-auto flex flex-col py-4 justify-center w-full md:w-1/2'>
                    <input type="text" name='name'  placeholder='Enter your name' className='font-bodyfont  p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    <input type="text" name='email' placeholder='Enter your email' className='font-bodyfont  my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    <textarea placeholder='Enter your message' name="message" id="txtArea" cols="30" rows="10" className='font-bodyfont my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
                    <button type='submit' className='text-white font-bodyfont w-fit cursor-pointer px-6 py-4 my-2 flex items-center hover:scale-110 duration-300 rounded-md bg-gradient-to-r from-cyan-800 via-cyan-500 to-cyan-200'>Let's talk</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact