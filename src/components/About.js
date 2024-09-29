import React from 'react'

const About = () => {
  return (
    <div id='about' className='section'>
    <div className='container mx-auto'>
    
      <div className="min-h-screen text-white flex items-center justify-center p-4" >
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <img
          src="/placeholder.svg"
          alt="Developer Profile"
          className="w-full max-w-md mx-auto"
        />
      </div>
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-4xl font-bold text-pink-500">ABOUT ME</h2>
        <h1 className="text-3xl font-bold">
          I'm a Freelance Front-end Developer
          <br />
          with over 5 years of experience.
        </h1>
        <p className="text-gray-300">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor natus omnis
          inventore quos beatae illo nulla. Officiis magni omnis molestias.
        </p>
        <div className="flex justify-between text-center">
          <div>
            <p className="text-4xl font-bold text-blue-300">13</p>
            <p className="text-sm">Years of<br />Experience</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-blue-300">15k+</p>
            <p className="text-sm">Projects<br />Completed</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-blue-300">12k+</p>
            <p className="text-sm">Satisfied<br />Clients</p>
          </div>
        </div>
        <div className="flex space-x-4">
          <button className="btn">
            Contact me
          </button>
          <button className="px-6 py-2 text-white font-medium">
            My Portfolio
          </button>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
  )
}

export default About