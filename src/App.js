import * as React from 'react';
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Box, CssBaseline, LinearProgress, ThemeProvider, Typography } from '@mui/material';
import { getCurrentTheme, getCurrentThemeComponent, toggleTheme } from './middleware/AppThemeController';
import HomePage from './integrals/HomePage';

function App() {
  const [themeMode, setThemeMode] = React.useState(getCurrentTheme());
  const [appTheme, setAppTheme] = React.useState(getCurrentThemeComponent())

  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<HomePage />} exact></Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
