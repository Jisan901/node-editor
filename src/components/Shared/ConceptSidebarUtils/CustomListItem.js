import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Box from '@mui/material/Box';
function CustomListItem({primary, secondary , isNew,endButton,onDragStart,children}) {
    return (
        <ListItem onDragStart={onDragStart} sx={ {
                    mt: 1,
                    '&:hover': {
                        bgcolor: 'rgba(0,0,0,0.4)',
                        borderRadius: '12px',
                        transition: '0.4s',
                    }
                }}>
        <ListItemAvatar>
          {children}
        </ListItemAvatar>
        <ListItemText primary={
            <Box sx={ { display: 'flex',
                width: "100%",
                justifyContent: 'space-between',
                alignItems: 'center' }}>{primary}
                {isNew?
                    <span style={ {
                        fontSize: '0.7rem',
                        background: 'rgba(255,255,255,0.4)',
                        padding: '0 4px',
                        borderRadius: "3px",
                        fontWeight: "300"
                        }}>new</span>
                :
                <>{endButton}</>
                }
            </Box>
        } secondary={secondary} />
      </ListItem>
    )
}

export default CustomListItem;