import React from 'react'
import { SocialIcon } from 'react-social-icons'
import 'tailwindcss/tailwind.css';
import { motion } from 'framer-motion';

function Header() {
  return (
    <header className='flex flex-row  sticky top-0  p-4 items-start justify-between
        max-w-4xl  mx-auto  z-20  xl:items-center
    '>
    <motion.div
    initial={{
        x:-500,
        opacity:0,
        scale:0.5
    }}
    animate={
        {
            x:0,
            opacity:1,
            scale:1
        }
    }
    transition={{
        duration:1.5
    }}
    
    
    className='flex flex-row items-center'>
{/* {social-icon} */}
<SocialIcon 
url="https://www.linkedin.com/in/ahmad-mujtaba-034431202/" 
fgColor='grey'
bgColor='transparent'

/>
<SocialIcon 
url="https://www.facebook.com/" 
fgColor='grey'
bgColor='transparent'

/>
<SocialIcon 
url="https://web.whatsapp.com/" 
fgColor='grey'
bgColor='transparent'

/>
<SocialIcon 
url="https://www.instagram.com/ahmadxxrana/" 
fgColor='grey'
bgColor='transparent'

/>

    </motion.div>

    <motion.div 

    initial={{
        x:500,
        opacity:0,
        scale:0.5,
    }}

    animate={{
        x:0,
        opacity:1,
        scale:1,
    }}
    transition={{duration:1}}
    >
    <SocialIcon 
    className='curser-pointer'
    network='email'
url='https://mail.google.com/mail/u/0/#inbox'
    fgColor='grey'
bgColor='transparent'

/>
<p className='uppercase hidden  md:inline-flex text-sm
  text-gray-500'>
    Get In Touch
</p>
    </motion.div>
    </header>
  )
}

export default Header
