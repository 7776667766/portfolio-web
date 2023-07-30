import React from 'react'
import {PhoneIcon ,MapPinIcon } from "@heroicons/react/24/solid"
import { RiMailLine } from "react-icons/ri";
import { useForm } from "react-hook-form";
function Contact() {

    const { handleSubmit, register } = useForm();

    
      const onSubmit = (data) =>{
        window.location.href=`mailto:ranagee444732@gmail.com?subject=${data.subject}$body=Hi, my name is ${data.name}. ${data.messag} (${data.email})`
      }
  return (
    <div>
    <div className='h-screen flex relative flex-col text-center
    md:text-left md:flex-row max-w-2xl justify-evenly mx-auto items-center px-4 '>
    <h3 className='absolute top-20 uppercase tracking-widest text-gray-500 text-xl'>
           Contact
            </h3>
            <div className='flex flex-col space-y-3'>
                <h4 className='text-lg  font-semibold text-center'>
I have got just what you need.{" "}
<span className='decoration-[#F7AB0A]/50 underline'

>
    lets Talk.

</span>



                </h4>
                <div className='space-y-3' >
                    <div className='justify-center flex items-center space-x-2'>
<PhoneIcon className=' text-[#F7AB0A] h-5 w-5 animate-pulse'/>
<p className='text-lg'>03007916909</p>

</div>

<div className='justify-center flex items-center space-x-2'>
<MapPinIcon className=' text-[#F7AB0A] h-5 w-5 animate-pulse'/>
<p className='text-lg'>Faisalabad </p>

</div>


<div className='justify-center flex items-center space-x-2'>
<RiMailLine className=' text-[#F7AB0A] h-5 w-5 animate-pulse'/>
<p className='text-lg'>ranagee444732@gmail.com</p>

</div>
                </div>





                <form className="  flex flex-col  space-y-3" onSubmit={handleSubmit(onSubmit)} >
                    <input className="outline-non bg-slate-400/10 rounded-sm border-b px-6 border-[#242424] first-letter:text-grey-500 placeholder-gray-500
                    transition-all focus:border-[#F7ABBA]/40
                    focus:text-[#F7AB0A]/40 hover:border-[#F7AB0A]/40 " placeholder='name' {...register("name")} type='text'/>
                   
                    <input className="outline-non bg-slate-400/10 rounded-sm border-b px-6 border-[#242424] first-letter:text-grey-500 placeholder-gray-500
                    transition-all focus:border-[#F7ABBA]/40
                    focus:text-[#F7AB0A]/40 hover:border-[#F7AB0A]/40 " placeholder='email' {...register("email")} type='email'/>
                    
                    <input className="outline-non bg-slate-400/10 rounded-sm border-b px-6 border-[#242424] first-letter:text-grey-500 placeholder-gray-500
                    transition-all focus:border-[#F7ABBA]/40
                    focus:text-[#F7AB0A]/40 hover:border-[#F7AB0A]/40 " placeholder='subject' {...register("subject")} type='subject'/>
                  
                    <textarea className="outline-non bg-slate-400/10 rounded-sm border-b px-8  border-[#242424] first-letter:text-grey-500 placeholder-gray-500
                    transition-all focus:border-[#F7ABBA]/40
                    focus:text-[#F7AB0A]/40 hover:border-[#F7AB0A]/40 "
                    {...register("message")}  placeholder='message' />
                    <button  className='bg-[#F7AB0A] py-3 px-5 rounded-md text-black font-bold text-lg '
                    type='submit'>submit</button>

                </form>


                
            </div>
           
      
    </div>
    <div className=' text-gray-500 flex justify-center  mt-[-30px] items-center mx-auto'>
      Developed by AHMAD MUJTABA
    </div>
 
    </div>
  )
}

export default Contact