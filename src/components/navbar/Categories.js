import React from 'react'
import {
  Button, Paper, Popper, MenuList,
  MenuItem, ListItem, Typography, Divider
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles( (theme) => ({
  icon: {
    color: "white",
    marginLeft: "1rem"
  }
}))


// categories is a list of objects
// each object contains id(number), title(string), subCategories(array) as keys 
export default function Categories({ categories }) {
  const classes = useStyles()

  const [open, setOpen] = React.useState(false);
  const [showCategory, setShowCategory] = React.useState(false)
  const [selected, setSelected] = React.useState("")
  const [subCategories, setSubCategories] = React.useState([])

  const anchorRef = React.useRef(null);
  const hoverRef = React.useRef(null)
  const categoryRef = React.useRef(null)

  const handleSelection = (value, list) => {
    setSelected(value)
    setSubCategories(list)
  }

  const handleClose = () => {
    setOpen(false)
    setShowCategory(false)
  }
  const hoverOutsideHandler = (e) => {
    if (open && !hoverRef.current.contains(e.target)) {
      setOpen(false)
      setShowCategory(false)
    }
  }

  React.useEffect(() => {
    window.addEventListener('mouseover', hoverOutsideHandler)
    return () => {
      window.removeEventListener('mouseover', hoverOutsideHandler)
    }
  })

  return (
    <div ref={hoverRef}>
      <Button
        className={classes.icon}
        endIcon={open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        onMouseEnter={() => setOpen(true)}
        ref={anchorRef}
      >
        Categories
      </Button>

      {/* Categories List */}
      <Popper open={open} anchorEl={anchorRef.current} disablePortal >
        <Paper ref={categoryRef} onMouseEnter={() => setShowCategory(true)}>
          <MenuList>
            {
              categories.map(item => (
                <MenuItem
                  onClick={handleClose}
                  onMouseEnter={() => handleSelection(item.title, item.subCategories)}>
                  <Typography variant="body2">{item.title}</Typography>
                </MenuItem>
              ))
            }
          </MenuList>
        </Paper>
      </Popper>

      {/* Sub Categories List */}
      <Popper open={showCategory}
        anchorEl={categoryRef.current}
        disablePortal
        placement="right-start">
        <Paper>
          <MenuList>
            <ListItem>
              <Typography variant="body1" color="primary">{selected}</Typography>
            </ListItem>
            <Divider />
            {
              subCategories.map((item, i) => (
                <MenuItem key={i} onClick={handleClose}>
                  <Typography variant="body2">{item}</Typography>
                </MenuItem>
              ))
            }
          </MenuList>
        </Paper>
      </Popper>
    </div>
  )
}
