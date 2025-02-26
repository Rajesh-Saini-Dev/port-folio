import React from 'react'

function About() {
  return (
    <>
        <div id='about' className='flex flex-col items-center py-20 px-10 md:p-24 bg-[#ec806f]'>
        <h2 className="text-5xl font-bold text-gray-900 ">About</h2>
          <div className='flex flex-col-reverse md:flex-row gap-10 py-10 md:py-10'>
              
              <div className='rounded-lg flex flex-col text-center items-center justify-center'>
              <h2 className="text-5xl font-bold pb-2">
                  I am <span className="text-white">Rajesh</span>
                </h2>
                <h2 className="text-5xl font-bold"> Frontend Developer</h2>
                <p className="mt-4 mx-4 text-xl max-w-2xl text-white">
                Hi, I am Rajesh “I’m a front-end developer. passionate to building responsive and user-friendly web applications.”
                </p>
                    <button className="bg-gray-900 mt-8 text-white hover:bg-[#ea5c47] hover:shadow-lg hover:shadow-gray-800 px-6 py-2 rounded">Resume
                    </button>
              </div>

              <div className='h-[400px] md:w-[600px] bg-[url(assets/image/about.jpg)] bg-cover bg-center border rounded-lg flex items-center justify-center hover:shadow-lg'></div>
          </div>
        </div>
    </>
  )
}

export default About