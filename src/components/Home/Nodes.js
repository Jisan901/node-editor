
/// developed <examples: node


// all component node will store hear.








import BoxtypeNode from "./customNodes/BoxtypeNode"
import Typography from '@mui/material/Typography';
import AlarmIcon from '@mui/icons-material/Alarm';
import TextField from '@mui/material/TextField';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
export function ListNode({data, isConnectable}) {
    return (
    <BoxtypeNode data={data} isConnectable={isConnectable}>
        <AlarmIcon sx={{fontSize:50}}/>
            <Typography variant="p" sx={{color:"white"}}>
                some text
        </Typography>
    </BoxtypeNode>
    )
}
export function InputNode({data, isConnectable}) {
    return (
    <BoxtypeNode data={data} isConnectable={isConnectable}>
        <AccountCircleIcon sx={{fontSize:50,mb:1}}/>
        <TextField variant={"outlined"} label="Name" />
    </BoxtypeNode>
    )
}

// warn: case sensitive by editor

export const nodesArray=["inputNode","listNode"]