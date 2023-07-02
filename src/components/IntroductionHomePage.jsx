import * as React from 'react';
import { AppBar, Box, Button, Grid, IconButton, Toolbar, Typography, useScrollTrigger } from "@mui/material";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import "@fontsource/inter/900.css";
import Typewriter from "typewriter-effect";
import { getCurrentTheme, toggleTheme } from '../middleware/AppThemeController';
import AppDataController from '../middleware/AppDataController';
import { Download } from '@mui/icons-material';

const IntroductionHomePage = (props) => {
    const profileOneRef = React.useRef();
    const [contentMarginLeft, setContentMarginRight] = React.useState(null);
    const scrollTrigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: (window.innerHeight - 64)
    });

    React.useEffect(() => {
        setTimeout(() => {
            setContentMarginRight(`${profileOneRef.current.offsetWidth - 150}px`);
        }, 100);
    }, [profileOneRef.current]);

    return (
        <Box ref={props.passRef} sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.8) url("https://source.unsplash.com/random?planet")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'darken',
            color: 'white'
        }}>
            <AppBar enableColorOnDark elevation={(scrollTrigger == false) ? 0 : 4} sx={{
                 height: '64px',
                 "@media print": { display: 'none' },
                 color: (scrollTrigger == false) ? 
                 'white' : 'black',
                 background: (scrollTrigger == false) ? 
                    'transparent' : '*',
            }}>
                <Toolbar>
                    <Typography sx={{ flexGrow: 1, fontFamily: 'inter', fontSize: '1.5rem' }}>
                        ATHEESH.ORG
                    </Typography>
                    <Box sx={{ marginRight: '15px', display: { xs: 'none', md: 'block' } }}>
                        {
                            props.appBarLinks.map((link) => (
                                <Button sx={{ color: 'inherit' }} onClick={() => { props.handleNav(link) }}>{link}</Button>
                            ))
                        }
                    </Box>
                    <IconButton onClick={() => { props.toggleTheme(); }} sx={{ color: 'inherit' }}>
                        {
                            (getCurrentTheme() == "dark") ?
                            <LightModeIcon /> :
                            <DarkModeIcon />
                        }
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Box sx={{ display: 'flex', justifyContent: { xs: 'center', lg: 'start' }, marginTop: '64px', height: '100%', width: '100%' }}>
                <Box sx={{ marginLeft: { sx: '0px', lg: contentMarginLeft }, "@media print": { marginTop: '30px' }, marginTop: { xs: '0px', lg: '50px' } }}>
                    <Box sx={{
                        width: 'fit-content', 
                        display: 'flex', 
                        flexDirection: 'row', 
                    }}>
                        <Typography sx={{ fontFamily: 'inter', "@media print": { fontSize: '2rem' }, fontSize: { xs: '1rem', sm: '2rem' } }}>I'm&nbsp;</Typography>
                        <Typography inline sx={{ "@media print": { display: 'none' }, fontFamily: 'inter', fontSize: { xs: '1rem', sm: '2rem' } }}><Typewriter options={{ strings: AppDataController.getIntroductionHomePageContent(), autoStart: true, loop: true }} /></Typography>
                    </Box>
                    <Typography sx={{ fontFamily: 'inter', "@media print": { fontSize: '4rem' }, fontSize: { xs: '2rem', sm: '4rem' }, color: 'primary.main', lineHeight: 1 }}>Atheesh</Typography>
                    <Typography sx={{ fontFamily: 'inter', "@media print": { fontSize: '4rem' }, fontSize: { xs: '2rem', sm: '4rem' }, color: 'primary.main', lineHeight: 1 }}>Thirumalairajan</Typography>
                    <Box sx={{ marginTop: '15px', "@media print": { display: 'none' } }}>
                        { /* Define Actions Here */ }
                        <Button startIcon={<Download />} color='secondary' variant="contained">Download my Resume</Button>
                    </Box>
                </Box>
                <Box sx={{
                    position: 'absolute', 
                    bottom: '0px', 
                    height: { xs: '70%', lg: '97%' }, 
                    "@media print": { height: '100%' },
                    maxWidth: '100%',
                    pointerEvents: 'none',
                }}>
                    <img ref={profileOneRef} style={{ 
                            zIndex: (scrollTrigger == false) ? 1200 : 1000, 
                            height: '100%',
                            maxWidth: 'inherit',
                            objectFit: 'contain',
                            objectPosition: 'bottom',
                            bottom: '0px'
                        }} src="/profile01.png" 
                    /> 
                </Box>
            </Box>
        </Box>
    )
}

export default IntroductionHomePage;