import * as React from 'react';
import { Alert, AlertTitle, Box, Typography } from "@mui/material";
import "@fontsource/inter/900.css";
import AppDataController from '../middleware/AppDataController';
import StepsDescriptionTemplate from './StepsDescriptionTemplate';
import LicenseFooter from './LicenseFooter';

const SkillsHomePage = (props) => {
    return (
        <>
            <LicenseFooter sx={{ "@media print": { display: 'flex', pageBreakBefore: 'always'  }, display: 'none' }} />
            <Box ref={props.passRef} sx={{ "@media print": { padding: '20px' }, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '74px 20px 20px 20px' }}>
                <Typography variant="h2" sx={{ fontFamily: 'inter' }}>Skills</Typography>
                <Alert sx={{ marginTop: '20px', marginBottom: '15px', width: { xs: '100%', md: "80%", lg: "70%" } }} severity='info' color='secondary'>
                    <AlertTitle>Things I'd be keen on telling you</AlertTitle>
                    I've developed apps using Rust, JavaScript (NodeJS, React and Express), Java and Vala
                </Alert>
                <StepsDescriptionTemplate expanded data={AppDataController.getSkillsHomePageContent()} />
            </Box>
        </>
    )
}

export default SkillsHomePage;