import React from 'react'

const Contact = () => {
    return (
        <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='post' action='https://getform.io/f/c21647dc-3102-4095-a7b2-fd65a067f48e' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
               <p className='text-4xl font-bold inline border-b-4 border-blue-300 text-gray-300'>Contact</p>
               <p className='text-gray-300 py-4'>// Submit the form below or send me an email at Akash0509@hotmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type='text' placeholder='Name' name='name'/>
            <input className='my-4 bg-[#ccd6f6] p-2' type='email' placeholder='Email' name='email'/>
            <textarea className='bg-[#ccd6f6] p-2' rows='10' placeholder='Message' name='message'/>
            <button className='text-white border-2 hover:bg-blue-300 hover:border-blue-300 px-4 py-3 my-8 mx-auto flex items-center'>Submit</button>
        </form>
        </div>
    )
}

export default Contact