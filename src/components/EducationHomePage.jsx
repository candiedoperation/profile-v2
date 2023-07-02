import * as React from 'react';
import { Alert, AlertTitle, Box, Typography } from "@mui/material";
import "@fontsource/inter/900.css";
import AppDataController from '../middleware/AppDataController';
import StepsDescriptionTemplate from './StepsDescriptionTemplate';
import { School } from '@mui/icons-material';
import LicenseFooter from './LicenseFooter';

const EducationHomePage = (props) => {
    return (
        <>
            <LicenseFooter sx={{ "@media print": { display: 'flex' }, display: 'none' }} />
            <Box ref={props.passRef} sx={{ "@media print": { padding: '20px' }, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '74px 20px 74px 20px' }}>
                <Typography variant="h2" sx={{ fontFamily: 'inter' }}>Education</Typography>
                <Alert sx={{ marginTop: '20px', marginBottom: '15px', width: { xs: '100%', md: "80%", lg: "70%" } }} severity='info' color='secondary'>
                    <AlertTitle>Things I'd be keen on telling you</AlertTitle>
                    My Leadership Positions and Awards during School
                </Alert>
                <StepsDescriptionTemplate expanded={props.printing} icon={<School />} data={AppDataController.getEducationHomePageContent()} />
            </Box>
        </>
    );
}

export default EducationHomePage;