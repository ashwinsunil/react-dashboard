import {ColorModeContext, useMode} from './theme'
import { CssBaseline, ThemeProvider, Box} from '@mui/material';


import SideBar from './global/SideBar';

import { Route, Routes } from 'react-router-dom';
import Dashboard from './scenes/dashboard';
import Bar from './scenes/bar';
import Product from './scenes/products';
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
                <Route path="/products" element={<Product/>}/>
                <Route path="/customers" element={<Box><Bar/></Box>} />
                <Route path="/promote" element={<Dashboard/>} />
                <Route path="/help" element={<Dashboard/>} />
              </Routes>
              

            </main>
          </div>
        </ThemeProvider>
    </ColorModeContext.Provider>
    
  );
}

export default App;
