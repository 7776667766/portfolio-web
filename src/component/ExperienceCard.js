import React from 'react'
import 'tailwindcss/tailwind.css';
import img3 from '../resources/img3.jpg'
import { motion } from 'framer-motion'
function ExperienceCard({ exp }) {
    console.log(exp)
 
        
    return (
        <article className=' space-y-2 flex-shrink-0
         w-[350px] md:w-[350px] xl:w-[700px] snap-center p-20
         flex flex-col rounded-lg items-center bg-[#292929] 
         lg:p-32 hover:opacity-100 opacity-40 
         cursor-pointer
         transition-opacity duration-200 overflow-hidden'>
            <motion.img
                initial={{
                    y: -100,
                    opacity: 0,
                }}
                transition={{
                    duration: 1.2
                }}
                whileInView={{
                    opacity: 1.2, y: 0
                }}


                className='w-20 h-20 rounded-full xl:w-[100px] xl:h-[100px] object-fit object-center'
                src={img3}></motion.img>
                <div>
 
  </div>
<div className='px-0 md:px-6'>
    <h6 className=' text:lg lg:text-2xl text-white font-light uppercase '>
        {exp.jobtitle}
    </h6>
    <p className='font-bold text-[14px]  text-white uppercase lg:text-[15px] mt-0'>
{exp.company}
    </p>
  
    <p className='uppercase py-2 text-[14px] text-gray-300 '>
        {exp.dateStarted}
    </p>




    <ul className='List-disc space-y-2 ml-1 text-sm text-white'>
   

{exp.summarypoints.map((point, index) => (
          <li key={index}>{point.children.map((child) => child.text).join('')}</li>
        ))}


    </ul>

</div>





        </article>
    )
}

export default ExperienceCard
