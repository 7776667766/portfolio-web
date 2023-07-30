import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description:"Description of title",
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot:true
      }
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
      
    }),
    ({
      name: 'technology',
      title: 'Technologies',
      type: 'array',
      of:[{type:"image",
       options:{
        hotspot:true
       }}]
    }),
  ],
})
