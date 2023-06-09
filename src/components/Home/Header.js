import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
function Header() {
    return (
        <Box sx={{
            p:2,
            width:"100%",
            display:'flex',
            justifyContent:"space-between",
            alignItems:"center",
            height:"10%"
        }}>
        <Box>
            <Typography variant="h2" sx={{
                fontWeight:'400'
            }} gutterBottom>
            List sorter
            </Typography>
            <Typography variant="p" gutterBottom>
               <span style={{
                    border:'1px solid #fa77f0c0',
                    background:"rgba(255,98,247,0.073)",
                    color:"#fe5cf5",
                    borderRadius:"3px",
                    padding:"2px 3px",
                    marginRight:"12px"
               }}>
                    simple sorter
               </span>
               a kind of lorem version of dummy text right hear v-1.6.0
            </Typography>
        </Box>
            <Stack direction="row" spacing={1}>
              <IconButton aria-label="delete">
                <DeleteIcon />
              </IconButton>
              <IconButton aria-label="delete" disabled color="primary">
                <DeleteIcon />
              </IconButton>
              <IconButton color="secondary" aria-label="add an alarm">
                <AlarmIcon />
              </IconButton>
              <IconButton color="primary" aria-label="add to shopping cart">
                <AddShoppingCartIcon />
              </IconButton>
            </Stack>
        </Box>
    )
}

export default Header;