import {ColorModeContext, useMode} from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material';


import SideBar from './global/SideBar';
import Pie from './scenes/pie/index';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './scenes/dashboard';
function App() {
  const [theme, colorMode] = useMode();

  return (
    
    <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
          
            <SideBar />
            
            <main className="content" style={{display:"flex"}} >
              <Routes >
                <Route path="/react-dashboard" element={<Dashboard />} />
                
                <Route path="/pie" element={<Pie />} />
              </Routes>
              

            </main>
          </div>
        </ThemeProvider>
    </ColorModeContext.Provider>
    
  );
}

export default App;
