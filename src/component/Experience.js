import React from 'react'
import { useState,useEffect } from 'react';
import { client } from '../client';

import 'tailwindcss/tailwind.css';
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard';
function Experience() {
    const [experienced,setExperience]=useState([])
console.log(experienced)
useEffect(()=>{
    client.fetch(
      `*[_type == "experience"]
      {
      
        company,
        technology,

        jobtitle,
        dateStarted,
        summarypoints,
       
      }`
      
      ).then((data)=>setExperience(data))
    
      

      
      
      
      .catch(console.error)


  
  },[])
  


    return (
        <div className='h-screen text-gray-500 flex relative 
        overflow-hidden flex-col text-lg md:flex-row max-w-full
         px-5 justify-evenly mx-auto items-center'>
            <h6 className=' uppercase  tracking-[14px] 
            
            absolute top-[82px] text-[17px]'>
                Experience</h6>

                <motion.div   className='w-full 
                
                flex space-x-2 overflow-x-scroll p-6 lg:p-24 t
                snap-x snap-mandatory scrollbar-thin
                 scrollbar-track-gray-400/20 
                 scrollbar-thumb-[#F7ABBA]/8
                 '>

                {experienced.map((ski)=>{
            return(
            <div>
<ExperienceCard exp={ski}  
 />


                </div>
        )})}
</motion.div>


        </div>
    )
} 

export default Experience
