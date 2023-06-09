import Box from '@mui/material/Box';
import Divider from "@mui/material/Divider";
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select'

function Terminal() {
    return (
    <Box sx={{
        height:"20%",
        mt:"8px",
        backgroundImage:"linear-gradient(rgba(255,255,255,0.2),rgba(255,255,255,0.1))",
        borderRadius:'20px',
        width:'100%'
    }}>
      <Box sx={{
          display:'flex',
          justifyContent:"space-between",
          alignItems:"center"
      }}>
        <Stack direction="row" spacing={1}>
              <IconButton aria-label="delete">
                <DeleteIcon />
              </IconButton>
              <IconButton color="secondary" aria-label="add an alarm">
                <AlarmIcon />
              </IconButton>
              <Typography sx={{pt:"8px"}} variant="p">Debugger running... <span style={{opacity:'0.5'}}>just in process</span></Typography>
        </Stack>
        <Stack direction="row" spacing={1}>
              <IconButton aria-label="delete">
                <DeleteIcon />
              </IconButton>
              <IconButton color="secondary" aria-label="add an alarm">
                <AlarmIcon />
              </IconButton>
        <Select
          value={""}
          onChange={null}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        </Stack>
      </Box>
      <Divider/>
      <Stack sx={{mt:'15px',height:'80%',overflow:'scroll'}} spacing={2}>
        <TerminalLine logHeader="127.0.0.1" text="a kind of lorem version of dummy text right hear v-1.6.0"/>
        <TerminalLine logHeader="127.0.0.1" text="a kind of lorem version of dummy text right hear v-1.6.0"/>
        <TerminalLine logHeader="127.0.0.1" text="a kind of lorem version of dummy text right hear v-1.6.0"/>
        <TerminalLine logHeader="127.0.0.1" text="a kind of lorem version of dummy text right hear v-1.6.0"/>
        <TerminalLine logHeader="127.0.0.1" text="a kind of lorem version of dummy text right hear v-1.6.0"/>
        <TerminalLine logHeader="127.0.0.1" text="a kind of lorem version of dummy text right hear v-1.6.0"/>
        <TerminalLine logHeader="127.0.0.1" text="a kind of lorem version of dummy text right hear v-1.6.0"/>
        <TerminalLine logHeader="127.0.0.1" text="a kind of lorem version of dummy text right hear v-1.6.0"/>
        <TerminalLine logHeader="127.0.0.1" text="a kind of lorem version of dummy text right hear v-1.6.0"/>
        <TerminalLine logHeader="127.0.0.1" text="a kind of lorem version of dummy text right hear v-1.6.0"/>
        <TerminalLine logHeader="127.0.0.1" text="a kind of lorem version of dummy text right hear v-1.6.0"/>
        <TerminalLine logHeader="127.0.0.1" text="a kind of lorem version of dummy text right hear v-1.6.0"/>
      </Stack>
    </Box>
    )
}

export default Terminal;

function TerminalLine({logHeader,text}){
    return (
        <Typography variant="p" gutterBottom>
               <span style={{
                    background:"rgba(255,98,247,0.073)",
                    color:"#fe5cf5",
                    borderRadius:"3px",
                    padding:"2px 3px",
                    marginRight:"12px"
               }}>
                    {logHeader}
               </span>
               {text}
        </Typography>
        )
}