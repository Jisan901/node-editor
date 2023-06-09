// concept sidebar for app
import Box from '@mui/material/Box';
import * as React from 'react';

// utils
import SearchBar from './ConceptSidebarUtils/SearchBar'
import FolderList from './ConceptSidebarUtils/FolderList'
import CustomListItem from './ConceptSidebarUtils/CustomListItem'
// utils

import Button from '@mui/material/Button';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Avatar from '@mui/material/Avatar';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
function SidebarForConcept({children}) {
    
    const buttonSx = {
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.2),rgba(255,255,255,0.1))'
    }
    
    return (
        <Box sx={{
            display:'flex',
            height:'100%'
        }}>
        <Box sx={ {
            p: 0,
            maxWidth: 300,
            height: '100%',
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
        }}>
        
        
            <FolderList text="installed" searchBar={<SearchBar/>}>
                <CustomListItem primary="Work" secondary="12 Mar 2023">
                        <Avatar>
                            <BeachAccessIcon />
                        </Avatar>
                    </CustomListItem>
                    <CustomListItem primary="Work" secondary="12 Mar 2023">
                        <Avatar>
                            <BeachAccessIcon />
                        </Avatar>
                    </CustomListItem>
                    <CustomListItem isNew={true} primary="Work" secondary="12 Mar 2023">
                        <Avatar>
                            <BeachAccessIcon />
                        </Avatar>
                    </CustomListItem>
                    <CustomListItem primary="Work" secondary="12 Mar 2023">
                        <Avatar>
                            <BeachAccessIcon />
                        </Avatar>
                    </CustomListItem>
                    <CustomListItem primary="Work" secondary="12 Mar 2023">
                        <Avatar>
                            <BeachAccessIcon />
                        </Avatar>
                    </CustomListItem>
                    <CustomListItem primary="Work" secondary="12 Mar 2023">
                        <Avatar>
                            <BeachAccessIcon />
                        </Avatar>
                    </CustomListItem>
                    <CustomListItem primary="Work" secondary="12 Mar 2023">
                        <Avatar>
                            <BeachAccessIcon />
                        </Avatar>
                    </CustomListItem>
                    <CustomListItem primary="Work" secondary="12 Mar 2023">
                        <Avatar>
                            <BeachAccessIcon />
                        </Avatar>
                    </CustomListItem>
                    <CustomListItem primary="Work" secondary="12 Mar 2023">
                        <Avatar>
                            <BeachAccessIcon />
                        </Avatar>
                    </CustomListItem>
                    <CustomListItem primary="Work" secondary="12 Mar 2023">
                        <Avatar>
                            <BeachAccessIcon />
                        </Avatar>
                    </CustomListItem>
                    <CustomListItem primary="Work" secondary="12 Mar 2023">
                        <Avatar>
                            <BeachAccessIcon />
                        </Avatar>
                    </CustomListItem>
            </FolderList>
            
            
            
            <Box sx={{
                display:'flex',
                gap:1,
                flexDirection:'column',
                width:'100%'
            }}>
            
            
            
                <FolderList text="recommended">
                    <CustomListItem primary="Work" secondary="12 Mar 2023">
                        <Avatar>
                            <BeachAccessIcon />
                        </Avatar>
                    </CustomListItem>
                    <CustomListItem primary="Work" secondary="12 Mar 2023">
                        <Avatar>
                            <BeachAccessIcon />
                        </Avatar>
                    </CustomListItem>
                </FolderList>
                
                
                
                <Box sx={{
                    width: '100%',
                    gap:1,
                    display:'flex',
                    borderRadius: "12px",
                    justifyContent:'space-between',
                }}>
                    <Button sx={{
                        backgroundImage: 'linear-gradient(rgba(255,255,255,0.2),rgba(255,255,255,0.1))',
                        
                    }} variant="text" endIcon={<ChevronRightIcon />}>
                        <span style={{
                            fontSize: 10,
                            background: "-webkit-linear-gradient(45deg, purple , #ffffff )",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent"
                        }}>Go community</span>
                    </Button>
                    <Box sx={{
                        display:'flex',
                        justifyContent: "space-between",
                        gap:1,
                        
                    }}>
                        <Button sx={buttonSx} color="secondary" variant="outlined">+</Button> 
                        <Button sx={buttonSx} color="secondary" variant="outlined">-</Button> 
                    </Box>
                </Box>
            </Box>
        </Box>
            <Box sx={{p:1,width:'100%'}}>
                {children}
            </Box>
        </Box>
    )
}

export default SidebarForConcept;