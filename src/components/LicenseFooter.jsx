import * as React from 'react';
import { Box, Toolbar, Typography } from "@mui/material";
import { BasePath } from '../middleware/AppBasePathController';

const LicenseFooter = (props) => {
    return (
        <Toolbar sx={props.sx}>   
            <img style={{ height: '50px', marginRight: '20px', borderRadius: '8px' }} src={`${BasePath}/icon-192-maskable.png`} />
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start' }}>
                <Typography sx={{ fontSize: '1.1rem', fontFamily: 'inter', lineHeight: 1 }}>about.atheesh.org&nbsp;</Typography>
                <Typography variant='p'>Copyright © 2023  Atheesh Thirumalairajan</Typography>
            </Box>
        </Toolbar>        
    )
}

export default LicenseFooter;