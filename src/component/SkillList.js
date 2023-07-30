import React from 'react'
import 'tailwindcss/tailwind.css';
import { motion } from 'framer-motion'
import { client } from '../client';

import img3 from '../resources/img3.jpg'
function SkillList({skis}  , directionLeft) {



    // const [skill, setskill] = useState([])

    // console.log(skill)
    // useEffect(() => {
    //     client.fetch(
    //         `*[_type == "skill"]
    //     {
    //        title,
    //         progress,
    //         image{
    //             asset->{id
    //             ,url,
    //         alt}
    //         },
           
    //     mainimage{
    //         asset->{
    //           id,
    //           url,
    //           alt
    //         }
    //        }
    //     }`

    //     ).then((data) => setskill(data))






    //         .catch(console.error)


    // }, [])


    return (


      
                    <article className=' group flex relative cursor-pointer'>

        <motion.img
  initial={{
    x: directionLeft ? -50 : 80,
    opacity: 0,

}}

tranition={{
    duration: 1
}}
whileInView={{
    opacity: 1,
    x: 0
}}
className=' border border-gray-500 object-fill
                
                xl:w-[70px] xl:h-[70px]
                ease-in-out
            rounded-full h-16 w-16
            
            filter group-hover:grayscale
            transition duration-300
            
            '
                src={skis.image.asset.url}></motion.img> 
            <div className=' rounded-full absolute opacity-0 group-hover:opacity-80 transition duration-300
                ease-in-out group-hover:bg-white h-16 w-16 md:h-12 md:w-12   xl:w-[70px] xl:h-[70px] '>
                    <div className='flex items-center
                     justify-center h-full rounded-full'>
                    <p className='text-xl opacity-100 text-black '>{skis.progress}%</p>
                    </div>
                </div> 

                </article>

        

    )
}

export default SkillList



