import React from 'react'
import 'tailwindcss/tailwind.css';
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react';

import { client } from '../client';
import SkillList from './SkillList';

function Skill() {


    const [skill,setskill]=useState([])
  
    useEffect(()=>{
      client.fetch(
        `*[_type == "skill"]
        {
           title,
            progress,
            image{
                asset->{id
                ,url,
            alt}
            },
           
        mainimage{
            asset->{
              id,
              url,
              alt
            }
           }
        }`
        
        ).then((data)=>setskill(data))
       
        
  
        
        
        
        .catch(console.error)
  
  
    },[])
    
  return (
        <motion.div className='h-screen text-gray-500 flex relative overflow-hidden flex-col 
        text-lg md:flex-row max-w-[2000px] px-7 justify-evenly mx-auto items-center'>
    <h3 className='uppercase  tracking-[14px]  absolute top-[75px] text-[22px]'>
        Skills
        </h3>



    <h3 className='uppercase tracking-[3px] lg:tracking-[6px]  absolute top-[130px] lg:top-[120px] 
    lg:text-[11px] text-[9px]' >
    
Hover over a skill for currency proficency
    </h3>
    <div className='grid grid-cols-4 gap-x-5'>
        {skill?.map((ski)=>{
            return(
            <div>
<SkillList  skis={ski} 
/>
<h6 className='text-[10px] uppercase pl-3'>{ski.title}</h6>
                </div>
        )})}



    </div>
   
       
        </motion.div >
      
  )
}

export default Skill
