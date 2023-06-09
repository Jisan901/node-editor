// root sidebar of this app

import * as React from 'react';

// mui
import Box from '@mui/material/Box';
import List from '@mui/material/List';

// icons
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

// sidebar utilities
import {Drawer} from './SidebarUtils/util'
import SidebarItem from './SidebarUtils/SidebarItem'
// Sidebar utilities


export default function Sidebar( {children }) {
    const [open,setOpen] = React.useState(false);

    function handleDrawer() {
        setOpen(!open)
    }

    return (
    <Box sx={ { display: 'flex' }}>
      <Drawer variant="permanent" open={open}>
        <List>
        {
            // top list 
        }
           <SidebarItem open={open} text={""} action={handleDrawer}>
                <MoreHorizIcon/>
            </SidebarItem>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <SidebarItem key={index} open={open} text={text} action={null}>
                {index%2===0?<InboxIcon/>:<MailIcon/>}
            </SidebarItem>
        ))}
        
        </List>
        <List>
        {
            // bottom list
        }
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <SidebarItem key={index} open={open} text={text} action={null}>
                {index%2===0?<InboxIcon/>:<MailIcon/>}
            </SidebarItem>
        ))}
        </List>
      </Drawer>
      
      
      <Box component="main" sx={ { 
            flexGrow: 1,
            p: 1,
            minHeight: '100vh'
            }}>
            
            {// outlet  or other children
                children
            }
        
      </Box>
    </Box>
    );
}