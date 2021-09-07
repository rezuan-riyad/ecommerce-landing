import React from 'react'
import Navbar from './navbar/Navbar'
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import BottomNavigationBar from './navbar/BottomNavigationBar'
import Hidden from '@material-ui/core/Hidden';
import {
  ChatBubbleRounded
} from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative'
  },
  fab: {
    position: 'sticky',
    left: "90%",
    bottom: 40
  }
}))


export default function Layout({ children }) {

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Navbar />
      <Container>
        {children}
      </Container>
      <Hidden smDown>
        <Fab color="primary" aria-label="chat" className={classes.fab}>
          <ChatBubbleRounded />
        </Fab>
      </Hidden>
      <Hidden mdUp>
        <BottomNavigationBar />
      </Hidden>
    </div>
  )
}
