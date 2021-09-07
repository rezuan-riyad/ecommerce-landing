import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import {
  AccountBoxOutlined, ChatBubbleOutline,
  NotificationsActiveOutlined, ShoppingCartOutlined
} from '@material-ui/icons';
import { Box, Typography } from '@material-ui/core'
import { Drawer } from '@material-ui/core'
import Hidden from '@material-ui/core/Hidden';

import LeftMenuBar from './LeftMenuBar';

const useStyles = makeStyles((theme) => ({
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  logo: {
    marginRight: 32,
    textTransform: 'uppercase',
    letterSpacing: '2px'
  },
  icons: {
    marginLeft: "32px",
  },
  iconButton: {
    padding: "10px",
    margin: "0 8px"
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function CustomizedInputBase() {
  const classes = useStyles();
  const [showMenu, setShowmenu] = useState(false)

  const toggleShowMenu = (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setShowmenu(!showMenu)
  }

  return (
    <>
      <IconButton className={classes.iconButton} aria-label="menu"
        onClick={toggleShowMenu}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={showMenu} onClose={toggleShowMenu}>
        <LeftMenuBar
          toggleShowMenu={toggleShowMenu}
          logoStyle={classes.logo} />
      </Drawer>

      {/*  ******* Logo  ************ */}
      <Box component="span" className={classes.logo}>
        <Typography variant="subtitle1" color="primary">Ehat.Raj</Typography>
      </Box>

      {/******* Search Bar ********/}
      <Divider className={classes.divider} orientation="vertical" />
      <InputBase
        className={classes.input}
        placeholder="Search your queries..."
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider className={classes.divider} orientation="vertical" />

      {/********  Right Button Groups **********/}
      <Hidden smDown={true}>
        <Box component="span" className={classes.icons}>
          <IconButton className={classes.iconButton} aria-label="search">
            <ShoppingCartOutlined fontSize="small" />
          </IconButton>
          <IconButton className={classes.iconButton} aria-label="search">
            <NotificationsActiveOutlined fontSize="small" />
          </IconButton>
          <IconButton className={classes.iconButton} aria-label="search">
            <AccountBoxOutlined fontSize="small" />
          </IconButton>
          <IconButton className={classes.iconButton} size="small">
            <ChatBubbleOutline fontSize="small" />
          </IconButton>
        </Box>
      </Hidden>
    </>
  );
}