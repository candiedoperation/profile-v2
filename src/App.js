import * as React from 'react';
import { Routes, Route, Navigate, useLocation, useParams } from "react-router-dom";
import { Box, CssBaseline, LinearProgress, ThemeProvider, Typography } from '@mui/material';
import { getCurrentTheme, getCurrentThemeComponent, toggleTheme } from './middleware/AppThemeController';
import HomePage from './integrals/HomePage';

function App() {
  const [themeMode, setThemeMode] = React.useState(getCurrentTheme());
  const [appTheme, setAppTheme] = React.useState(getCurrentThemeComponent())

  React.useEffect(() => {
    setAppTheme(getCurrentThemeComponent())
  }, [themeMode])

  const toggleThemeWrapper = () => {
    toggleTheme(window);
    setThemeMode(getCurrentTheme())
  }

  const OpenSourceRouter = () => {
    let { repository } = useParams();
    window.location = `https://github.com/candiedoperation/${repository}`;
  }

  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<HomePage toggleTheme={toggleThemeWrapper} />} exact></Route>
        <Route path="/opensource/:repository" element={<OpenSourceRouter />} exact />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
