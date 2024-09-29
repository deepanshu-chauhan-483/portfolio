import React from 'react'

import Image1 from '../assets/portfolio-img1.png';
import Image2 from '../assets/portfolio-img2.png';
import Image3 from '../assets/portfolio-img3.png';

const projects = [
  { id: 1, image: Image1, alt: "3D Visual Project" },
  { id: 2, image: Image2, alt: "Software Engineer Portfolio" },
  { id: 3, image: Image3, alt: "Event 2022 Website" },
  { id: 4, image: Image3, alt: "Event 2022 Website" }
];

const Work1 = () => {
  return (
    <div className='container mx-auto' id='work'>
      <div className="flex flex-col lg:flex-row items-center justify-between my-10">
    <div className="lg:w-1/2 mb-8 lg:mb-0">
      <h2 className="h1 text-pink-500 text-5xl font-bold">MY LATEST WORK</h2>
      <p className="text-gray-300 my-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, hic! Harum quis, cum velit neque esse eos molestias doloremque explicabo!
      </p>
      <button className=" btn btn-sm">
        View all projects
      </button>
    </div>
    <div className="lg:w-1/2 grid">
      {projects.map((project, index) => (
        <div 
          key={project.id} 
          className="rounded-2xl overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 "
        >
          <img 
            src={project.image} 
            alt={project.alt}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  </div></div>
  )
}

export default Work1