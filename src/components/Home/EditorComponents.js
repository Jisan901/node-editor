import Box from '@mui/material/Box';
import CustomListItem from "./custom/CustomListItem"
import CustomListItemShared from "../Shared/ConceptSidebarUtils/CustomListItem"
import SearchBar from '../Shared/ConceptSidebarUtils/SearchBar'
import Avatar from '@mui/material/Avatar';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
/// ui setup end

// nodes from Nodes.js
import {nodesArray} from "./Nodes"


function EditorComponents() {
    
    const onDragStart = (event, nodeType) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.effectAllowed = 'move';
    };

    
    return ( 
        <Box sx={{
        height:"100%",
        borderRadius:'20px',
        width:'25%'
        }}>
            <ListItem sx={ { p: 0 }}>
                <SearchBar/>
            </ListItem>
            {
                // collapse list for side
            }
            <CustomListItem>
                {
                    // nested items onDrag will pass Hear
                }
                { nodesArray.map((type,index)=>
                <CustomListItemShared key={index} primary={type} secondary="components vai omics" onDragStart={(event)=>onDragStart(event,type)} endButton={<IconButton><DeleteIcon/></IconButton>} >
                        <Avatar>
                            <BeachAccessIcon />
                        </Avatar>
                </CustomListItemShared>
                )}
            </CustomListItem>
        </Box>
    )
}

export default EditorComponents;