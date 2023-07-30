import React from 'react'

import { motion } from 'framer-motion'
function BackgroundCircles() {
    return (
        <motion.div 
        initial={

    
           {
            opacity:0,

           }
        }
        animate={{
            scale:[1,2,2,3,1],
            opacity:[0.1,0.2,0.4,0.8,0.1,1.0],
            borderRadius:["28%","38%","40%","50%","20%" ],

        }}
        transition={{
            duration:2.5,
        }}
        whileInView={
            {
                opacity: 3,
    x: 3,

            }
        }
        className='relative flex items-center justify-center'>
            <div className='absolute  border-[#161111] 
            rounded-full 
             h-[100px] mt-52 
             w-[100px] 
             
             '
            />
            <div className='border
             
            rounded-full  
            border-[rgb(36,36,36)] 
             h-[150px] mt-52 absolute
             w-[150px] 
             animate-ping
             '/>
            <div className='border
             border-[rgb(69,36,36)]
             
            rounded-full  
             h-[320px] mt-52 
             w-[320px] absolute
             
             '
            />
            <div />

            <div className='border border-[#39b129] 
            rounded-full  opacity-20
             h-[400px] mt-52 
             w-[400px] absolute
            animate-ping
             '

            />
             <div className='border border-[rgb(128,51,51)]
            rounded-full  opacity-20
             h-[600px] mt-52 
             w-[600px] absolute
             animate-ping
             '

            />
          
            <div />


        </motion.div>

    )
}

export default BackgroundCircles
