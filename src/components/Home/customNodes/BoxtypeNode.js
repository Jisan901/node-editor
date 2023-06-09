import { Handle, Position } from 'reactflow';
import Box from '@mui/material/Box';
function BoxtypeNode({ data, isConnectable, children }) {
    return (
        <>
        <Handle
        type="target"
        position={Position.Top}
        id="aa"
        isConnectable={isConnectable}
      />
        <Box sx={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            p:4,
            flexDirection:"column",
            borderRadius: '12px',
            transition: '0.4s',
            border:"0.5px solid transparent",
            backgroundImage:"linear-gradient(rgba(255,255,255,0.1),rgba(255,255,255,0.07))",
            '&:hover': {
                bgcolor: '',
                backgroundImage:"linear-gradient(rgba(255,50,222,0.05),rgba(255,50,222,0.02),rgba(255,50,222,0.05))",
                color:"rgba(255,108,231,0.82)",
                border:"0.5px solid #fff",
                borderTop:"none"
            }
        }}>
            {children}
        </Box>
        <Handle
        type="source"
        position={Position.Bottom}
        id="a"
        isConnectable={isConnectable}
      />
        </>
    )
}
export default BoxtypeNode;