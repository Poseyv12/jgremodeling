// Import required dotenv for local environment variables
require('dotenv').config({ path: '.env.local' });

const { createClient } = require('@sanity/client');

// Create Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2023-05-03',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN
});

// This script requires you to have uploaded images to your Sanity Media Library first.
// Then you need to replace these placeholder image references with actual Sanity image references.
// To find your image references, upload images in the Sanity Studio and copy their IDs.

// For now, we'll create a test project with missing images, which can be updated later.
const testProject = {
  _type: 'jgProject',
  title: 'Test Kitchen Renovation',
  slug: {
    _type: 'slug',
    current: 'test-kitchen-renovation'
  },
  category: 'Kitchen',
  location: 'Miami, FL',
  // Replace with an actual image reference from your Sanity Media Library
  thumbnail: {
    _type: 'image',
    alt: 'Kitchen renovation thumbnail'
    // You'll need to add image.asset._ref after uploading an image in Sanity
  },
  description: 'This is a test kitchen renovation project created via script.',
  completionDate: 'June 2023',
  client: 'Test Client',
  challenge: 'Creating a test project via API',
  solution: 'Used a Node.js script to upload the data',
  result: 'Successfully created a test project in Sanity',
  // Replace with actual image references from your Sanity Media Library
  images: [
    {
      _type: 'object',
      alt: 'Kitchen before renovation',
      caption: 'Before the renovation'
      // You'll need to add image.asset._ref after uploading images in Sanity
    },
    {
      _type: 'object',
      alt: 'Kitchen after renovation',
      caption: 'After the renovation'
      // You'll need to add image.asset._ref after uploading images in Sanity
    }
  ],
  features: [
    'Modern cabinets',
    'Quartz countertops',
    'Stainless steel appliances'
  ],
  order: 1
};

console.log('Note: This script is creating a project with placeholder images.');
console.log('You will need to manually add real images in the Sanity Studio.');

// Upload the test project
client.create(testProject)
  .then(response => {
    console.log('Test project created:', response);
    console.log('ID:', response._id);
    console.log('Edit this project in Sanity Studio to add images.');
  })
  .catch(error => {
    console.error('Error creating test project:', error);
  }); 