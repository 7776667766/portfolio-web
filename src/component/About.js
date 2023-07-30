import React from 'react'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { client } from '../client'
import pic2 from '../resources/pic2.jpg'
function About() {
    const [posts, setposts] = useState([])
    useEffect(() => {
        client.fetch(
            `*[_type == "pageinfo"]
          {
             name,
              role,
              phonenumber,
             email,
             address,
             backgroundinfo,
             heroimage
          }`

        ).then((data) => setposts(data))

            .catch(console.error)


    }, [])


    return (

        <div

        >


            {posts.map((ite) => {
                return (
                    <div className='h-screen flex flex-col
                     text-center relative mid:text-left
                      md:flex-row max-w-5xl px-10 justify-evenly
                       mx-auto items-center'>
                        <motion.h5
                            initial={{ opacity: 0 }}
                            whileInView={
                                { opacity: 1 }
                            }
                            transition={{ duration: 1 }}



                            className='item-center absolute top-16 lg:top-20 uppercase tracking-[20px] text-gray-500 text-lg '>


                            About


                        </motion.h5>
                        <motion.img
                            initial={{
                                x: -200,

                            }}
                            transition={
                                {
                                    duration: 1.2
                                }
                            }
                            whileInView={{
                                x: 0, opacity: 1
                            }}

                            // viewport={{ once: true }}
                            src={pic2}
                            className='-mb-20 md:mb-0 flex-thrink-0  rounded-full object-cover
md:rounded-lg h-28 w-[100px] md:h-95 xl:w-[300px]
xl:h-[300px]
' >

                        </motion.img>

                        <div className='space-y-5 px-0 md:px-6'>
                            <h4 className='text-xl font-semibold'>  Here is my <span className='  underline decoration-[#F7ABBA]'>little</span> background</h4>
                            <p className='text-sm'>
                                {ite.backgroundinfo}
                            </p>

                        </div>

                    </div>
                )
            })}

            {/* <motion.img
                initial={{
                    x: -200,

                }}
                transition={
                    {
                        duration: 1.2
                    }
                }
                whileInView={{
                    x: 0, opacity: 1
                }}

                // viewport={{ once: true }}
                src={pic2}
                className='-mb-20 md:mb-0 flex-thrink-0  rounded-full object-cover
md:rounded-lg h-36 w-[130px] md:h-95 xl:w-[350px]
xl:h-[400px]
'

            >

            </motion.img> */}
            {/* <div className='space-y-5 px-0 md:px-6'>
                <h4 className='text-xl font-semibold'>  Here is my <span className='  underline decoration-[#F7ABBA]'>little</span> background</h4>
                <p className='text-sm'>
                    I'm Ahmad.You might also know me PAPA React! I will
                    be your coach and mentor inside the PAPAFAM, here is little
                    bit about me ... I've coding for over 10 years now. As a Full
                    Stack Developer.
                </p>

            </div> */}
        </div>
    )
}

export default About
