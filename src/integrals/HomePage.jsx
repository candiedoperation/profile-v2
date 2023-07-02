import * as React from 'react';
import { AppBar, Backdrop, Box, Divider, LinearProgress, Toolbar, Typography } from "@mui/material";
import EducationHomePage from "../components/EducationHomePage";
import IntroductionHomePage from "../components/IntroductionHomePage";
import SkillsHomePage from '../components/SkillsHomePage';
import { getCurrentTheme, setCurrentTheme } from '../middleware/AppThemeController';
import LicenseFooter from '../components/LicenseFooter';

const HomePage = (props) => {
    const [backdropOpen, setBackdropOpen] = React.useState(false);
    const [backdropText, setBackdropText] = React.useState("");
    const introductionHomePageRef = React.useRef();
    const educationHomePageRef = React.useRef();
    const skillsHomePageRef = React.useRef();
    const appBarLinks = ["Hello!", "Education", "Skills"];

    const handleNav = (navLink) => {
        switch (navLink.toLowerCase()) {
            case "hello!":
                if (introductionHomePageRef.current)
                    introductionHomePageRef.current.scrollIntoView({ behavior: 'smooth' });

                break;

            case "education":
                if (educationHomePageRef.current)
                    educationHomePageRef.current.scrollIntoView({ behavior: 'smooth' });

                break;

            case "skills":
                if (skillsHomePageRef.current)
                    skillsHomePageRef.current.scrollIntoView({ behavior: 'smooth' });

                break;

            default:
                console.log(`pressed ${navLink.toLowerCase()}`)
                break;
        }
    }

    const toggleBackdrop = (backdropText) => {
        if (backdropOpen == true) {
            setBackdropOpen(false);
            setBackdropText("");
        } else {
            setBackdropOpen(true);
            setBackdropText((backdropText) ? backdropText : "⚡ Blazzzing through the Internet...")
        }
    }

    /* Define Printing States */
    const [printing, setPrinting] = React.useState(false);
    React.useEffect(() => {
        window.addEventListener("keydown", (e) => {
            if (e.ctrlKey && e.keyCode == 80) {
                /* Prevent Print Dialog */
                e.preventDefault();
                e.stopPropagation();

                /* Prepare for Print */
                toggleBackdrop("🖨️ Preparing for Printing...");
                setPrinting(true);

                /* Switch Theme */
                localStorage.setItem('printTheme', localStorage.getItem("theme"));
                if (getCurrentTheme() == "dark") props.toggleTheme();
            }
        });

        window.addEventListener("afterprint", () => {
            setPrinting(false);
            if (localStorage.getItem("printTheme") == "dark") props.toggleTheme();
        });
    }, []);

    React.useEffect(() => {
        setTimeout(() => {
            if (printing == true) {
                toggleBackdrop();
                setTimeout(window.print, 200);
            }
        }, 1000);
    }, [printing]);

    return (
        <>
            <Backdrop
                sx={{ flexDirection: 'column', background: 'rgba(0,0,0,0.85)', color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={backdropOpen}
            >
                <Typography sx={{ fontFamily: 'inter', marginBottom: '3px' }} variant='h6'>{backdropText}</Typography>
                <LinearProgress sx={{ width: { xs: '90%', md: '70%' } }} />
            </Backdrop>
            <Box sx={{
                width: '100%',
                height: '100%',
            }}>
                <IntroductionHomePage printing={printing} passRef={introductionHomePageRef} handleNav={handleNav} appBarLinks={appBarLinks} toggleTheme={props.toggleTheme} />
                <EducationHomePage printing={printing} passRef={educationHomePageRef} />
                <Divider />
                <SkillsHomePage passRef={skillsHomePageRef} />
                <Divider />
                <LicenseFooter sx={{ "@media print": { display: 'none' } }} />
            </Box>
        </>
    )
}

export default HomePage;