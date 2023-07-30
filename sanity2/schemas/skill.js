import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description:"Title of skills",
      type: 'string',
    }),
    defineField({
      name: 'progress',
      title: 'Progress',
      type: 'number',
      description:'Progress of skill from 8 to 100%',
    
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options:{
        hotspot:true
      }
    }),
    defineField({
      name: 'mainImage',
      title: 'Mainimage',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
   
  
  ],

 
})
