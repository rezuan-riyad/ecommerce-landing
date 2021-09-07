import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider'
import { PhoneOutlined, EmailOutlined } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'

import SearchBar from './SearchBar'
import BottomBarItems from './BottomBarItems';

import data from '../../data/categories.json'

const useStyles = makeStyles((theme) => ({
  whiteBg: {
    background: "#f4f4f4"
  },
  topBar: {
    background: "#eeeeee",
    minHeight: "1.5rem",
  },
  appBar: {
    boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2)," +
      "0px 4px 5px 0px rgba(0,0,0,0.14)",
  },
  icon: {
    fontSize: "17px",
    marginLeft: "16px",
    marginRight: "4px",
  },
  flexWithSpace: theme.custom.flexWithSpace
}))


export default function Navbar(props) {
  const [showNav, setShownav] = React.useState(true)
  const classes = useStyles()

  React.useEffect(() => {
    let position = 0
    document.addEventListener('scroll', () => {
      let oldPos = window.scrollY
      if (position < oldPos && oldPos > 128) {
        // scrolling down
        setShownav(false)
      } else if (position > oldPos) {
        // scrolling up
        setShownav(true)
      }
      position = window.scrollY
    })
  }, [])


  return (
    <React.Fragment>
      <CssBaseline />
      {/* Top Tool Bar */}
      <Toolbar className={classes.topBar}>
        <PhoneOutlined className={classes.icon} />
        <Typography variant="body2">+880 1717XXXX</Typography>
        <EmailOutlined className={classes.icon} />
        <Typography variant="body2" align="center">janedoe@yahoo.com</Typography>
      </Toolbar>
      <Divider />

      {/* Search Bar with Icons | Middle Toolbar */}
      <AppBar position="sticky" bgcolor="body.main" className={classes.appBar} >
        <Toolbar className={classes.whiteBg} variant="dense">
          <SearchBar />
        </Toolbar>
        {
          showNav ?
            <Toolbar variant="dense" className={classes.flexWithSpace} id="bottomToolbar">
              <BottomBarItems categories={data.categories}/>
            </Toolbar> : null
        }
      </AppBar>
    </React.Fragment>
  );
}
