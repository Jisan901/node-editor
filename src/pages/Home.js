import Box from '@mui/material/Box';
import Header from '../components/Home/Header'
import Terminal from '../components/Home/Terminal'
import Editor from '../components/Home/Editor'
import EditorComponents from '../components/Home/EditorComponents'
function Home() {
    return (
        <Box sx={{
            width:'100%',
            height:'100%',
            display:"flex",
            justifyContent:"space-evenly",
            flexDirection:"column"
        }}>
            <Header/>
                <Box sx={{
                    width:'100%',
                    height:'70%',
                    display:"flex",
                    justifyContent:"space-between",
                    gap:'8px'
                }}>
                    <Editor/>
                    <EditorComponents/>
                </Box>
            <Terminal/>
        </Box>
    )
}

export default Home;