import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import {
  AccountBoxRounded, ChatBubbleRounded,
  NotificationsActiveRounded, ShoppingCartRounded
} from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "sticky",
    bottom: 0,
    left: 0,
  },
});

export default function BottomNavigationBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <>
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Account" icon={<AccountBoxRounded />} />
      <BottomNavigationAction label="Cart" icon={<ShoppingCartRounded />} />
      <BottomNavigationAction label="Notifications" icon={<NotificationsActiveRounded />} />
      <BottomNavigationAction label="Chat" icon={<ChatBubbleRounded />} />
    </BottomNavigation>
    </>
  );
}