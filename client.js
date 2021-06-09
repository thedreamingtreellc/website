import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: '8y0ywjkj',
  dataset: 'production',
  apiVersion: '2021-05-31',
  useCdn: false
})