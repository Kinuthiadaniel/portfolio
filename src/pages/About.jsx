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
        <div className='h-screen width-screen text-white'>
            <div className='flex '>
                <div className='mb-10'>
                    <h1 className='flex justify-center text-2xl font-bold mr-10'>Welcome to My Portfolio!</h1>
                    <p>
                        Hello,I am a passionate web developer keen on designing dynamic, responsive, and user-friendly web and mobile applications. My professional skillset touches on both front- and back-end  development, giving me the skill to provide excellent digital experiences  from start to finish.


                        I bring designs to life on the front end using React, Tailwind CSS, CSS, and HTML  so that every interface is aesthetically pleasing yet functional. On the back end,  I am able to construct robust and efficient systems using Python and its frameworks like Flask to create secure and scalable solutions that will fit modern web standards.
                    </p>
                </div>
                <div>
                    <img alt="Daniel" src={img} className='h-100 w-100'></img>
                </div>
            </div>
            <div>
                <h1 className='flex justify-center text-2xl font-bold'>My Skills</h1>
                <div className='grid grid-cols-3 md:grid-clos-4 gap-6'>
                    <div className='bg-gray-80 py-4 rounded-lg text-center shadow-md items-center hover:pointer transform transition-all duration-300 hover:scale-105 hover:bg-gray-500 hover:shadow-lg' >
                        <img
                            src={js}
                            alt="JavaScript"
                            className="mx-auto mb-2 w-10 h-10"
                        />
                        Javascript</div>
                    <div className='bg-gray-80 py-4 rounded-lg text-center shadow-md items-center transform transition-all duration-300 hover:scale-105 hover:bg-gray-500 hover:shadow-lg'>
                        <img
                            src={react} // Replace with a JavaScript logo URL
                            alt="React"
                            className="mx-auto mb-2 w-10 h-10"
                        />
                        React</div>
                    <div className='bg-gray-80 py-4 rounded-lg text-center shadow-md items-center transform transition-all duration-300 hover:scale-105 hover:bg-gray-500 hover:shadow-lg'>
                        <img
                            src={node}
                            alt="Node"
                            className="mx-auto mb-2 w-13 h-12"
                        />Node</div>
                    <div className='bg-gray-80 py-4 rounded-lg text-center shadow-md items-center transform transition-all duration-300 hover:scale-105 hover:bg-gray-500 hover:shadow-lg'
                  
                    >
                        <img
                            src={python}
                            alt="Python"
                            className="mx-auto mb-2 w-10 h-10"
                        />
                        Python</div>
                    <div className='bg-gray-80 py-4 rounded-lg text-center shadow-md items-center transform transition-all duration-300 hover:scale-105 hover:bg-gray-500 hover:shadow-lg'>
                        <img
                            src={flask}
                            alt="Flask"
                            className="mx-auto mb-2 w-10 h-10"
                        />
                        Flask</div>
                    <div className='bg-gray-80 py-4 rounded-lg text-center shadow-md items-center transform transition-all duration-300 hover:scale-105 hover:bg-gray-500 hover:shadow-lg hover: pointer'>
                        <img
                            src={firebase}
                            alt="Firebase"
                            className="mx-auto mb-2 w-10 h-10"
                        />
                        Firebase</div>

                </div>
            </div>
        </div>


    )
}
export default About