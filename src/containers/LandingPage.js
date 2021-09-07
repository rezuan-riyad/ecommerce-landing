import React from 'react'
import Layout from '../components/Layout'
import Showcase from '../components/Showcase'
import MediaCard from '../components/MediaCard'
import { Box, Typography } from '@material-ui/core'
import { mergeClasses } from '@material-ui/styles'

export default function LandingPage() {
  let product = {
    title: "Samsung T550/XL 2.1 Channel with Wireless Subwoofer - Black",
    price: 1000,
    image: "https://s3-ap-southeast-1.amazonaws.com/media.evaly.com.bd/media/images/53ba4346d0de-12.png"

  }
  return (
    <Layout>
      <Showcase />
      <Typography variant="h3">Electronics</Typography>
      <Box>
        {
          [...new Array(12)].map((i) => {
            return (
              <MediaCard product={product} key={i} />
            )
          })
        }
      </Box>
    </Layout>
  )
}
