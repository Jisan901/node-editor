import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

function SidebarItem({open,text,action,children}) {
    return (
     <ListItem disablePadding sx={ { display: 'block' }}>
          <ListItemButton
        onClick={action}
        sx={ {
            minHeight: 48,
            justifyContent: open ? 'initial': 'center',
            px: 2.5,
        }}
        >
            <ListItemIcon
            sx={ {
                minWidth: 0,
                mr: open ? 3: 'auto',
                justifyContent: 'center',
            }}
            >
              {children}
            </ListItemIcon>
            <ListItemText primary={text} sx={ { opacity: open ? 1: 0 }} />
        </ListItemButton>
    </ListItem>
    )
}

export default SidebarItem;