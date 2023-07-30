import {defineField, defineType} from 'sanity'

export default ({
  name: 'pageinfo',
  title: 'Pageinfo',
  type: 'document',
  fields: [
    ({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    ({
      name: 'role',
      title: 'Role',
      type: 'string',
      
    }),
    ({
      name: 'heroimage',
      title: 'Image',
      type: 'image',
      options:{
        hotspot:true,
      }
      
    }),
    ({
      name: 'backgroundinfo',
      title: 'Backgroundinfo',
      type: 'string',
      of:[{type:"reference " , to:{type:"skill"}}]
    }),
    ({
      name: 'profilepic',
      title: 'Profilepic',
      type: 'image',
      options:{
        hotspot:true,
      }
      
    }),
    ({
      name: 'phonenumber',
      title: 'Number',
      type: 'string',
    }),
    ({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    ({
      name: 'address',
      title: 'Address',
      type: 'string',
    }),
    // ({
    //   name: 'social',
    //   title: 'Social',
    //   type: 'array',
    //   of:[{type:"reference", to:{type:"social"}}]
    // }),
  ],
})
