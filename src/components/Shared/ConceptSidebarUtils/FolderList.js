import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export default function FolderList({text,searchBar,children}) {
        return (
            <List sx={ {
                mt:1,
                width: '100%',
                maxHeight:'600px',
                maxWidth: 300,
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.2),rgba(255,255,255,0.1))',
                overflow:"scroll",
                borderRadius: "12px",
                p: 2
            }}>
            
              <ListItem sx={ { p: 0 }}>
                {searchBar}
              </ListItem>
              <ListItem>
                <ListItemText secondary={text}/>
              </ListItem>
              {children}
            </List>
        );
    }
