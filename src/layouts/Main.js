import Sidebar from "../components/Shared/Sidebar"
import SidebarForConcept from "../components/Shared/SidebarForConcept"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function Main({children}) {
  return (
    <>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
        <Sidebar>
            <SidebarForConcept>
                {children}
            </SidebarForConcept>
        </Sidebar>
    </ThemeProvider>
    </>
  );
}

export default Main;