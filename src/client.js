import { createClient } from '@sanity/client';

const config = {
    projectId: 'aswvqyf0',
    dataset: 'build',
    // token: 'aswvqyf0',
    useCdn: true // true for production,
    
    
  };
  export const client = createClient(config);
  
