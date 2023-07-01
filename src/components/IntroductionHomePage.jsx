import * as React from 'react';
import { AppBar, Box, Button, Grid, Toolbar, Typography, useScrollTrigger } from "@mui/material";
import "@fontsource/inter/900.css";
import Typewriter from "typewriter-effect";

const IntroductionHomePage = (props) => {
    const profileOneRef = React.useRef();
    const typewriterStrings = ["a Networking Enthusiast", "a Software Developer", "a SysAdmin", "a Terp!"];
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
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100vh',
            background: 'rgba(0, 0, 0, 0.8) url("https://source.unsplash.com/random?planet")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'darken',
            color: 'white'
        }}>
            <AppBar elevation={(scrollTrigger == false) ? 0 : 4} sx={{
                 height: '64px',
                 color: (scrollTrigger == false) ? 
                 'white' : 'black',
                 background: (scrollTrigger == false) ? 
                    'transparent' : '*'
            }}>
                <Toolbar>
                    <Typography sx={{ fontFamily: 'inter', fontSize: '1.5rem' }}>
                        ATHEESH.ORG
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box sx={{ display: 'flex', justifyContent: { xs: 'center', lg: 'start' }, marginTop: '64px', height: '100%', width: '100%' }}>
                <Box sx={{ marginLeft: { sx: '0px', lg: contentMarginLeft }, marginTop: { xs: '0px', lg: '50px' } }}>
                    <Box sx={{
                        width: 'fit-content', 
                        display: 'flex', 
                        flexDirection: 'row', 
                        fontFamily: 'inter', 
                        fontSize: { xs: '1rem', sm: '2rem' }
                    }}>
                        <Typography sx={{ fontFamily: 'inter', fontSize: { xs: '1rem', sm: '2rem' } }}>I'm&nbsp;</Typography>
                        <Typewriter options={{ strings: typewriterStrings, autoStart: true, loop: true }} />
                        </Box>
                        <Typography sx={{ fontFamily: 'inter', fontSize: { xs: '2rem', sm: '4rem' }, color: 'primary.main', lineHeight: 1 }}>Atheesh</Typography>
                        <Typography sx={{ fontFamily: 'inter', fontSize: { xs: '2rem', sm: '4rem' }, color: 'primary.main', lineHeight: 1 }}>Thirumalairajan</Typography>
                        <Box sx={{ marginTop: '15px' }}>
                            { /* Define Actions Here */ }
                            <Button color='secondary' variant="contained">Download my Resume</Button>
                        </Box>
                    </Box>
                    <Box sx={{
                        position: 'absolute', 
                        bottom: '0px', 
                        height: { xs: '70%', lg: '97%' }, 
                        maxWidth: '100%',
                        pointerEvents: 'none'
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