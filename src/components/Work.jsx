import React from 'react'
import airImg from '../assets/projects/Airbnb.png' 
import portImg from '../assets/projects/portfolio.png' 
import WorkImg from '../assets/projects/workImg.jpeg' 
import algoImg from '../assets/projects/algo.png'

const Work = () => {
    return (
        <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4'>Projects</p>
                    <p className='py-6'>Checkout some of my work</p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    <div style={{ backgroundImage: `url(${algoImg})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* hover effect */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Algorithm visualization                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://lambent-kataifi-759989.netlify.app/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href='https://github.com/akash-55'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style={{ backgroundImage: `url(${portImg})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* hover effect */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                portfolio
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://dreamy-meringue-0f2e02.netlify.app/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href='https://github.com/akash-55/Portfolio'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style={{ backgroundImage: `url(${airImg})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* hover effect */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Airbnb mobile frontend
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://github.com/akash-55/Airbnb-react-clone#airbnb-react-clone'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/akash-55/Airbnb-react-clone">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* <div style={{ backgroundImage: `url(${WorkImg})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* hover effect *
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                React.js portfolio
                            </span>
                            <div className='pt-8 text-center'>
                                <a href=''>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href=''>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div> */}
                </div>

            </div>
        </div>
    )
}

export default Work