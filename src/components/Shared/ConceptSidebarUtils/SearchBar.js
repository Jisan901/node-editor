import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export default function SearchBar() {
        return (
            <Paper
                component="form"
                sx={ {
                    p: '2px 4px',
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%',
                    borderRadius: "12px"
                }}
                elevation={0}
                >
      <IconButton sx={ { p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
                    sx={ { ml: 1, flex: 1 }}
                    placeholder="Find workflow"
                    inputProps={ { 'aria-label': 'search google maps' }}
                    />
      <IconButton type="button" sx={ {
                        p: '10px',
                        mr: 1,
                        background: 'rgba(255,255,255,0.2)',
                        padding: '0 4px',
                        borderRadius: "3px",
                    }} aria-label="more">
        <MoreHorizIcon />
      </IconButton>
    </Paper>
        );
    }