import React from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import MoreVertIcon from '@material-ui/icons/MoreVert';


export default function Dropdown({ title, list, styles, placement }) {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const dropdownRef = React.useRef(null)


  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  const hoverOutsideHandler = (e) => {
    if (open && !dropdownRef.current.contains(e.target)) {
      setOpen(false)
    }
  }

  React.useEffect(() => {
    window.addEventListener('mouseover', hoverOutsideHandler)
    return () => {
      window.removeEventListener('mouseover', hoverOutsideHandler)
    }
  })

  const iconSelection = () => {
    if (title === null) return <MoreVertIcon />
    else if (open) return <ExpandLessIcon />
    else if (!open) return <ExpandMoreIcon />
  }

  return (
    <div ref={dropdownRef}>
      <Button
        size="small"
        className={styles}
        endIcon={iconSelection()}
        ref={anchorRef}
        onMouseEnter={() => setOpen(true)}
      >
        {title}
      </Button>
      <Popper open={open} anchorEl={anchorRef.current} transition disablePortal placement={placement}>
        <Paper>
          <MenuList onKeyDown={handleListKeyDown}>
            {
              list.map((item, i) => (
                <MenuItem key={i}>{item}</MenuItem>
              ))
            }
          </MenuList>
        </Paper>
      </Popper>
    </div>
  );
}
