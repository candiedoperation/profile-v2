import * as React from 'react';
import { Box, Toolbar, Typography } from "@mui/material";

const LicenseFooter = (props) => {
    return (
        <Toolbar sx={props.sx}>   
            <img style={{ height: '50px', marginRight: '20px', borderRadius: '8px' }} src="/icon-192-maskable.png" />
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start' }}>
                <Typography sx={{ fontSize: '1.1rem', fontFamily: 'inter', lineHeight: 1 }}>atheesh.org&nbsp;</Typography>
                <Typography variant='p'>Copyright © 2023  Atheesh Thirumalairajan</Typography>
            </Box>
        </Toolbar>        
    )
}

export default LicenseFooter;