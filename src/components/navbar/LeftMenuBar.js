import React, { useState } from 'react'
import { List, ListItem, Typography, Divider, Button, Box, Avatar } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton';
import { ArrowForwardIos, Close } from '@material-ui/icons'
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles } from '@material-ui/core/styles'
import avatar from '../../static/images/avatar.jpg'

const useStyles = makeStyles((theme) => ({
  listItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "2px 0",
    minWidth: 300,
    "&:hover": {
      background: theme.palette.primary.light,
      color: "white"
    }
  },
  icon: {
    fontSize: 12,
    color: theme.palette.icon.light
  },
  loginBtn: {
    minWidth: "150px"
  }
}))



export default function LeftMenuBar(props) {
  const { categories, logoStyle, toggleShowMenu } = props
  const classes = useStyles()
  const [isLoggedIn, setIsloggedIn] = useState(false)
  const userActivities = ['Orders', 'Vouchers', 'Followd Shops',
    'Saved Products', 'Campaigns', 'News Feed', 'Carrer']

  return (
    <>
      <List>
        <ListItem>
          <Typography variant="subtitle1" color="primary" className={logoStyle}>
            Ehat.Raj
          </Typography>
          <IconButton onClick={toggleShowMenu} style={{ marginLeft: "auto"}}>
            <Close fontSize="small"/>
          </IconButton>
        </ListItem>
      </List>
      {
        !isLoggedIn ?
          <Box mx="auto" marginBottom={2}>
            <Button variant="outlined" color="primary" className={classes.loginBtn}>
              Login
            </Button>
          </Box> :
          <List>
            <ListItem>
              <Avatar alt="John Doe" src={avatar} />
              <Box mx={2}>
                <Typography variant="subtitle1">John Doe</Typography>
              </Box>
            </ListItem>
          </List>
      }
      <Divider />
      <List>
        {
          userActivities.map(item => (
            <ListItem key={item} 
              className={classes.listItem}>
              <Typography variant="body2">{item}</Typography>
              <ArrowForwardIos className={classes.icon} align="right" />
            </ListItem>
          ))
        }
      </List>
    </>
  )
}
