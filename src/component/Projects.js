import React from 'react'
import { motion } from 'framer-motion'
import pic2 from '../resources/pic2.jpg'
import { client } from '../client';
import { useState, useEffect } from 'react';



function Projects() {


    const [posts, setposts] = useState([])
    console.log(posts)

    useEffect(() => {
        client.fetch(
            `*[_type == "project"]
        {
            title,
            technology[]{
                "imageUrl": asset->url
              },
          summary,
           image{
            asset->{
              id,
              url,
              alt
            }
           }
        }`

        ).then((data) => setposts(data))

            .catch(console.error)


    }, [])

    return (
        <div className='h-screen relative flex overflow-hidden flex-col text-lesft md:flex-row
    max-w-full justify-evenly mx-auto items-center z-0'>
            <h3 className='absolute top-20 uppercase tracking-widest text-gray-500 text-xl'>
                Projects
            </h3>

            <div className="'relative w-full flex overflow-x-scroll overflow-y-hidden 
snap-x snap-mandatory z-20  scrollbar-track-gray-400/20
scrollbar-thumb-[#f7AB0A]/80 scrollbar-thin

'">

                {posts.map((project, i) => (
                    <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-2
    items-center justify-center p-28 md:p-[190px]   h-full'>
                        <motion.img className='h-48 w-48  xl:h-64 xl:w-64'
                            src={project.image.asset.url}
                            initial={{
                                y: -300,
                                opacity: 0,

                            }}
                            transition={{ duration: 1.2 }}
                            whileInView={{ opacity: 1, y: 0 }}
                        // viewport={{once:true}}


                        />

                        <div
                            className='space-y-6 px-0 md:px-5  max-w-4xl'

                        ><h6 className='text-[12px] lg:text-2xl font-semibold text-center'>


                                <span className='underline
                                 decoration-[#F7AB0A]/50 text-[10px] lg:text-[16px]' >
                                    Case Study {i + 1} of </span>

                                {project.length} : {project.title}</h6>

                            <div className='flex  space-x-4 justify-center '>
                                {project.technology.map((tech, index) => (
                                    <img
                                        key={index}
                                        className='h-6 rounded-full w-6 xl:h-10 xl:w-10'
                                        src={tech.imageUrl}
                                        alt={`Technology ${index + 1}`}
                                    />
                                ))}
                            </div>



                            < p className='text-center text-[12px] md:text-left '>
                                {project.summary}
                            </p>


                        </div>
                    </div>
                ))}


            </div>

            <div className='w-full -skew-y-12
      absolute top-[30%] bg-[#F7ABBA]/10 left-0 h-[300px] '>

            </div>
        </div>
    )
}

export default Projects
