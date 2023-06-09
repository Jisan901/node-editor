import * as React from 'react';

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';



function CustomListItem({children}) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
    
    return (
        <List>
            <ListItemButton sx={{
                backgroundImage:"linear-gradient(rgba(255,255,255,0.2),rgba(255,255,255,0.1))",
                borderRadius:'20px',
            }} onClick={handleClick}>
            <ListItemIcon>
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemIcon>
            <ListItemText primary="Inbox" />
            <InboxIcon/>
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {children}
            </List>
          </Collapse>
        </List>
    )
}

export default CustomListItem;