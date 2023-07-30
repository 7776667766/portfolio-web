import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'jobtitle',
      title: 'jobTitle',
      type: 'string',
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'text',
      
    }),
    defineField({
      name: 'dateStarted',
      title: 'DateStarted',
      type: 'date',
      
    }),
    defineField(
      {
        name: 'summarypoints',
        title: 'Summarypoints',
        type: 'array',
        of: [
          {
            type: 'block',
            styles: [{ title: 'Normal', value: 'normal' }],
            lists: [],
          },
        ],
      }
    ),

    defineField(
      {
        name: 'pictures',
        title: 'Pictures',
        type: 'array',
        of: [{ type: 'image' }],
        options: {
          layout: 'grid'
        }
      }
    ),

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
