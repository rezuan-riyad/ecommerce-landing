import React from 'react'
import Layout from '../components/Layout'
import Showcase from '../components/Showcase'
import MediaCard from '../components/MediaCard'
import { Box, Divider, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import products from '../data/products.json'
import { classExpression } from '@babel/types'

const useStyles = makeStyles(theme => ({
  container: {
    display: "grid",
    gridTemplateColumns: "auto auto auto auto"
  }
}))

export default function LandingPage() {
  const classes = useStyles()
  return (
    <Layout>
      <Showcase />
      {
        products.map((element, i) => (
          <Box key={i}>
            <Typography variant="h3" gutterBottom>
              {Object.keys(element)}
            </Typography>
            <Divider />
            <Box className={classes.container}>
              {
                element[Object.keys(element)].map((product) => (
                  <MediaCard
                    product={product}
                    key={product.id} />
                ))
              }
            </Box>
            <Box textAlign="center">
              <Button variant="contained" color="primary" size="small">
                See More
              </Button>
            </Box>
          </Box>
        ))
      }
    </Layout>
  )
}
