import React from 'react'
import HTML from '../assets/html.png';
import JavaScript from '../assets/javascript.png';
import Github from '../assets/github.png';
import Node from '../assets/node.png';
import Reacti from '../assets/react.png';
import aws from '../assets/aws.png';
import css from '../assets/css.png';
import firebase from '../assets/firebase.png';
import java from '../assets/java.png';
import Python from '../assets/python.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
         {/* container */}
         <div className='max-w-[1080px] mx-auto px-4 flex flex-col justify-centre w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-blue-300  '>Skills</p>
                <p className='py-4'>>> Technologies i worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={JavaScript} alt='JavaScript icon'></img>
                <p className='my-4'>JavaScript</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Reacti} alt='React icon'></img>
                <p className='my-4'>React</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={HTML} alt='HTML icon'></img>
                <p className='my-4'>HTML</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={css} alt='css icon'></img>
                <p className='my-4'>css</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Node} alt='Node icon'></img>
                <p className='my-4'>Node</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={aws} alt='aws icon'></img>
                <p className='my-4'>AWS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Python} alt='Python icon'></img>
                <p className='my-4'>Python</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Github} alt='Github icon'></img>
                <p className='my-4'>Github</p>
            </div>
            
            {/* <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={java} alt='java icon'></img>
                <p className='my-4'>java</p> 
            </div>*/}
            </div>
         </div>
    </div>
  )
}

export default Skills