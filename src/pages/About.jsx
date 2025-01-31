import React from 'react'
import img from '../images/Screenshot from 2024-05-02 16-22-15~3.jpg'
import react from '../images/react-1-logo-svg-vector.svg'
import js from '../images/JavaScript-logo.png'
import node from '../images/download (1).png'
import python from '../images/images.jpeg'
import flask from '../images/images.png'
import firebase from '../images/download.png'

function About() {
    return (
        <div className="min-h-screen w-full overflow-y-auto">
            <div className='container px-4 sm:px-6 lg:px-8 mx-auto text-white py-12'>
                <h1 className='text-3xl text-center font-bold mb-12'>Welcome to My Portfolio!</h1>
                
                <div className='md:flex md:space-x-12'>
                    <div className='md:w-1/2'>
                        <p className="prose max-w-3xl text-white-700 leading-relaxed">
                            Hello, I am a passionate web developer keen on designing dynamic, responsive, and user-friendly web and mobile applications. My skillset covers both front-end and back-end development, allowing me to provide seamless digital experiences.  
                            <br /><br />
                            I bring designs to life on the front end using React, Tailwind CSS, and HTML, ensuring every interface is both functional and aesthetically pleasing. On the back end, I create robust and scalable systems using Python and Flask.
                        </p>
                    </div>
                    <div className='md:w-1/2 flex justify-center md:justify-end'>
                        <img alt="Daniel" src={img} className='h-40 w-40 rounded-full object-cover shadow-lg' />
                    </div>
                </div>

                <div className='mt-16'>
                    <h2 className='text-2xl font-semibold text-center mb-8'>My Skills</h2>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
                        {[{ src: js, name: "JavaScript" }, { src: react, name: "React" }, { src: node, name: "Node" },
                          { src: python, name: "Python" }, { src: flask, name: "Flask" }, { src: firebase, name: "Firebase" }]
                          .map((skill, index) => (
                            <div key={index} className='bg-gray-800 py-4 rounded-lg text-center shadow-md transform transition-all duration-300 hover:scale-105 hover:bg-gray-500 hover:shadow-lg'>
                                <img src={skill.src} alt={skill.name} className="mx-auto mb-2 w-10 h-10" />
                                {skill.name}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
