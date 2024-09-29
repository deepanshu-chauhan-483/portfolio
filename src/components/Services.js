
import React from 'react'

const Services = () => {
  return (
    <div id='services' className="section min-h-screen text-white p-8">
      <div className="flex flex-col lg:flex-row items-start justify-between">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h2 className="text-4xl font-bold text-pink-500 mb-4">WHAT I DO</h2>
          <h1 className="text-3xl font-bold mb-4">
            I'm a Freelance Front-end
            <br />
            Developer with over 5 years
            <br />
            of experience.
          </h1>
          <button className="px-6 py-2 bg-gradient-to-r from-pink-500 to-blue-500 text-white font-medium rounded-full mb-8">
            See my work
          </button>
          <img
            src="/placeholder.svg"
            alt="Developer Profile"
            className="w-full max-w-md rounded-lg"
          />
        </div>
        <div className="lg:w-1/2 space-y-8">
          {[
            { title: "UI/UX Design", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, quia quo expedita accusamus illum ducimus." },
            { title: "Development", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, quia quo expedita accusamus illum ducimus." },
            { title: "Digital Marketing", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, quia quo expedita accusamus illum ducimus." },
            { title: "Product Branding", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, quia quo expedita accusamus illum ducimus." },
          ].map((service, index) => (
            <div key={index} className="border-b border-gray-700 pb-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-bold">{service.title}</h3>
                <button className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              <p className="text-gray-300 mb-2">{service.description}</p>
              <a href="#" className="text-blue-300 hover:text-blue-400">Learn more</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services