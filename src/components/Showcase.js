import React, { useState } from 'react'
import {
  Paper, Grid, Typography,  Hidden
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Carousel from './Carousel'

import data from '../data/categories.json'
import slideItems from '../data/slides.json'

const useStyles = makeStyles((theme) => ({
  paper: {
    maxWidth: 1024,
    minHeight: 400,
    margin: "40px auto 20px auto"
  },
  catList: {
    padding: 12,
    paddingLeft: 24,
    cursor: "pointer",
    "&:hover": {
      background: "#eeeeee"
    }
  },
  catHeader: {
    padding: 12,
    paddingLeft: 24,
  },
  smallCaro: {
    padding: "0 8px"
  }
}))

export default function Showcase() {
  const classes = useStyles()
  const [selected, setSelected] = useState()

  return (
    <div>
      <div>
        <Paper className={classes.paper}>
          <Grid container>
            <Grid item xs sm={12} md={8}>
              <Carousel
                slideItems={slideItems.slideItemsLarge}
                interval={4000}
                duration={60 * 1000}
                height={280}
              />
              <Grid container spacing={1}> 
                <Grid item xs={12} md={6} className={classes.smallCaro}>
                  <Carousel
                    slideItems={slideItems.slideItems2}
                    interval={3000}
                    duration={120 * 6000}
                    height={80} />
                </Grid>
                <Grid item xs={12} md={6} className={classes.smallCaro}>
                  <Carousel
                    slideItems={slideItems.slideItems3}
                    interval={5000}
                    duration={120 * 6000}
                    height={80} />
                </Grid>
              </Grid>
            </Grid>
            <Hidden smDown>
              <Grid item md={4} container direction="column">
                <Grid className={classes.catHeader}>
                  <Typography variant="h6">My Market</Typography>
                </Grid>
                {
                  data.categories.map((item) => (
                    <Grid item
                      key={item.id}
                      onMouseEnter={() => setSelected(item.selected)}
                      className={classes.catList}>
                      <Typography variant="body2">{item.title}</Typography>
                    </Grid>
                  ))
                }
              </Grid>
            </Hidden>
          </Grid>
        </Paper>
      </div>
    </div>
  )
}
