import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-blue-300 '>About</p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 '>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p> Hi, nice to meet you.<br/>
                        Please take a Look around.</p>
                    </div>
                    <div>
                        <p> I'm Akash Sharma, a software engineer with a passion for building innovative solutions using the latest technologies. I'm currently doing Master's degree in Computer and Information Sciences from Auckland University of Technology, where I studied a range of topics including data mining and machine learning, cloud computing, and software architecture.

In addition to my academic background, I have practical experience working as a freelance web developer and as a team member at KFC. I've worked on a range of projects using technologies like HTML, CSS, JavaScript, React.js, and Node.js, and I'm experienced with agile methodologies and version control tools like Git/GitHub.

One of my recent projects, a Dijkstra algorithm visualization, demonstrates my ability to solve complex problems using my technical skills. I've also designed and created a landing page for a construction company, and I've managed social media accounts with over 120k followers.

<br></br>I'm a strong communicator and collaborator, with experience working in high-pressure environments and a proven track record of delivering exceptional customer service. I'm fluent in English and Hindi, and I have professional working proficiency in German.
<br></br>
<br></br>
Please feel free to explore my portfolio and get in touch if you have any questions or would like to discuss potential opportunities for collaboration.
 </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About  