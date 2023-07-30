import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'portfolio-yt-2-build',

  projectId: 'aswvqyf0',
  dataset: 'build',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
