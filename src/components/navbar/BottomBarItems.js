import React, { useState, useEffect } from 'react'
import Dropdown from './Dropdown';
import { Box, Button } from '@material-ui/core'
import navData from '../../data/navigations.json'
import { makeStyles } from '@material-ui/core/styles'
import Categories from './Categories';


import { displayControl } from '../../helpers/helpers'

const useStyles = makeStyles((theme) => ({
  navItem: {
    color: "white",
    margin: "0 10px",
    "&:hover": {
      textDecoration: "underline"
    }
  },
  flexWithSpace: theme.custom.flexWithSpace,
  iconButton: {
    color: "#eeeeee",
    padding: 16,
  }
}))

/**
 * Categories is array of object
 * each onject contains title, id, subcategories(array)
 */
export default function BottomBarItems({ categories }) {

  const classes = useStyles()
  const [navItems, setNavitems] = useState(navData.data)
  const [showNavItems, setShowNavItems] = useState(false)

  useEffect(() => {
    let width = document.body.clientWidth
    if (width < 900) {
      // nav should display 0 items
      setNavitems(displayControl(navItems, 0))
    } else if (width >= 900 && width < 1024) {
      // nav should display 4 items
      setNavitems(displayControl(navItems, 4))
    }
    setShowNavItems(true)
  }, [])

  // Bottom Toolbar navigations with Dropdown
  const toolbarItems = navItems.map(item => {
    if (!item.hidden && !item.subCat) {
      return (
        <Button size="small" className={classes.navItem} key={item.title}>
          {item.title}
        </Button>
      )
    } else if (!item.hidden && item.subCat) {
      return (
        <Dropdown
          key={item.title}
          title={item.title}
          list={item.subCat}
          placement="bottom-end"
          styles={classes.navItem} />
      )
    }
  })

  const moreVertIcon = () => {
    let hiddenItemsTitle = navItems.filter(item => item.hidden).map(item => item.title)
    if (hiddenItemsTitle.length !== 0) {
      return <Dropdown title={null} list={hiddenItemsTitle} styles={classes.navItem} />
    } else {
      return null
    }
  }
  return (
    <React.Fragment>
      <Box component="span">
        <Categories categories={categories} />
      </Box>
      <Box component="span" display="flex" flexDirection="row" alignItems="center">
        {showNavItems ? toolbarItems : null}
        {moreVertIcon()}
      </Box>
    </React.Fragment>
  )
}
