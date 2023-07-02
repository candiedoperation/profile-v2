import AppDataController from '../middleware/AppDataController';
import StepsDescriptionTemplate from './StepsDescriptionTemplate';
import LicenseFooter from './LicenseFooter';
import { Box, Typography } from '@mui/material';

const OpenSourceHomePage = (props) => {
    return (
        <>
            <LicenseFooter sx={{ "@media print": { display: 'flex', pageBreakBefore: 'always'  }, display: 'none' }} />
            <Box ref={props.passRef} sx={{ "@media print": { padding: '20px' }, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '74px 20px 74px 20px' }}>
                <Typography variant="h2" sx={{ fontFamily: 'inter', marginBottom: '25px' }}>I ❤️ OpenSource</Typography>
                <StepsDescriptionTemplate expanded data={AppDataController.getOpenSourceHomePageContent()} />
            </Box>
        </>
    );
}

export default OpenSourceHomePage;