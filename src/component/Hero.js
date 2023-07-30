import React from 'react';
import { useState,useEffect } from 'react';
import pic from '../resources/pic.jpeg'
import BackgroundCircles from './BackgroundCircles'
import {Cursor  , useTypewriter} from "react-simple-typewriter"
import { client } from '../client';


function Hero() {

  const [posts,setposts]=useState([])
  const [images, setImage] = useState('');

  useEffect(()=>{
    client.fetch(
      `*[_type == "pageinfo"]
      {
         name,
          role,
          phonenumber,
         email,
         address,
         backgroundinfo,
         heroimage{
          asset->{
            id,
            url,
            alt
          }
         }
      }`
      
      ).then((data)=>setposts(data))
      .then((data) => {
        if (data && data[0] && data[0].heroimage) {
          const imageUrl = client.imageUrl(data[0].heroimage).url();
          setImage(imageUrl);
      }})
      

      
      
      
      .catch(console.error)


  },[])
  

    const [text,count]=useTypewriter({
        words:[
            "Hi, The Name's Ahmad Mujtaba",
            "Guy-who-loves-Coffee.jsx",
            "<ButLovesToCodeMore/>"
        ],
        loop:true,
        delaySpeed:200,
    });
  return (
    
    <div>
      {posts.map((info)=>{
        return(
      <div className='h-screen flex flex-col space-y-1 items-center justify-center first-letter  
      text-center overflow-hidden'>
         <BackgroundCircles/>
        <img  className='relative h-32 w-32 mx-auto rounded-full object-cover'
        src={info.heroimage.asset.url}>
        </img>
        <div className='z-16' >
            <h4 className='uppercase text-[9px] pb-0 tracking-[10px] text-gray-500 relative overflow-hidden '>
              software engineer
            </h4>
            </div>
            <h1 className='text-2xl lg:text-4xl 
            font-semibold px-10'>
      <span className='mr-3 '
      >{text}</span>
      <Cursor cursorColor="#F7AB0A"/>
      </h1>
      <div className='flex flex-row pt-1'>
        
{/*         
        <button className='@apply px-2 py-2 ml-3 mr-3 uppercase  transition-all hover:text-[#F7AB0A]/40 hover:border-[#F7AB0A]/40 text-gray-500 text-[8px]  rounded-full border border-[#242424]'>About</button>
       
        <button className='@apply px-2 py-2 ml-3 mr-3  uppercase  transition-all hover:text-[#F7AB0A]/40 hover:border-[#F7AB0A]/40 text-gray-500 text-[8px] rounded-full border border-[#242424]'>Experience</button>
       
        <button className='@apply px-2 py-2 ml-3 mr-3  uppercase transition-all hover:text-[#F7AB0A]/40 hover:border-[#F7AB0A]/40 text-gray-500 text-[8px]  rounded-full border border-[#242424]'>Skills</button>
       
        <button className='@apply px-2 py-2 ml-3 mr-3  uppercase  transition-all hover:text-[#F7AB0A]/40 hover:border-[#F7AB0A]/40 text-gray-500 text-[8px]  rounded-full border border-[#242424]'>Projects</button>
   
     */}

 </div>

      </div>)
    })}
        {/* <img  className='relative h-32 w-32 mx-auto rounded-full object-cover'
        src={pic}>
        </img> */}
        {/* <div className='z-16' >
            <h4 className='uppercase text-[9px] pb-0 tracking-[10px] text-gray-500 relative overflow-hidden '>
            </h4>
            </div> */}
            {/* <h1 className='text-2xl lg:text-4xl 
            font-semibold px-10'>
      <span className='mr-3 '
      >{text}</span>
      <Cursor cursorColor="#F7AB0A"/>
      </h1> */}
      {/* <div className='flex flex-row pt-1'>
        
        
        <button className='@apply px-2 py-2 ml-3 mr-3 uppercase  transition-all hover:text-[#F7AB0A]/40 hover:border-[#F7AB0A]/40 text-gray-500 text-[8px]  rounded-full border border-[#242424]'>About</button>
       
        <button className='@apply px-2 py-2 ml-3 mr-3  uppercase  transition-all hover:text-[#F7AB0A]/40 hover:border-[#F7AB0A]/40 text-gray-500 text-[8px] rounded-full border border-[#242424]'>Experience</button>
       
        <button className='@apply px-2 py-2 ml-3 mr-3  uppercase transition-all hover:text-[#F7AB0A]/40 hover:border-[#F7AB0A]/40 text-gray-500 text-[8px]  rounded-full border border-[#242424]'>Skills</button>
       
        <button className='@apply px-2 py-2 ml-3 mr-3  uppercase  transition-all hover:text-[#F7AB0A]/40 hover:border-[#F7AB0A]/40 text-gray-500 text-[8px]  rounded-full border border-[#242424]'>Projects</button>
   
    

 </div> */}
    
    </div>
  )
}

export default Hero
