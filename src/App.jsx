import { useState } from 'react'
import './App.css'
import Layout from './components/Layout'
import { ColorModeContext, useMode } from './Theme';
import { CssBaseline, ThemeProvider } from '@mui/material';

function App() {
  const [theme, colorMode] = useMode();


  return (
    <>


<ColorModeContext.Provider 
// @ts-ignore
   value={colorMode}>
        <ThemeProvider 
// @ts-ignore
        theme={theme}>
          <CssBaseline />
 <Layout/>

</ThemeProvider>
      </ColorModeContext.Provider>
    </>
  )
}

export default App
