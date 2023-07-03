import * as React from 'react';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import AppDataController from "../middleware/AppDataController";
import LicenseFooter from './LicenseFooter';

const ContactHomePage = (props) => {
    const [contactData, setContactData] = React.useState({});

    React.useEffect(() => {
        setContactData(
            (contactData) => 
            AppDataController.getContactHomePageContent()
        );

        console.log(contactData);
    }, []);

    return (
        <>
            <LicenseFooter sx={{ "@media print": { display: 'flex', pageBreakBefore: 'always'  }, display: 'none' }} />
            <Box ref={props.passRef} sx={{ "@media print": { padding: '20px' }, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '74px 20px 74px 20px' }}>
                <Typography variant="h2" sx={{ fontFamily: 'inter', marginBottom: '20px' }}>Contact and Social</Typography>
                <List sx={{ width: { xs: '100%', md: "80%", lg: "70%" } }}>
                    {
                        Object.keys(contactData).map((contact) => {
                            let content = 
                                <>
                                    <ListItemIcon>{contactData[contact].icon}</ListItemIcon>
                                    <ListItemText primary={contactData[contact].content} secondary={contact} />
                                </>;

                            return(
                                (contactData[contact].redirect) ?
                                <ListItemButton onClick={() => { window.open(contactData[contact].redirect, '_blank').focus() }}>{content}</ListItemButton> :
                                <ListItem>{content}</ListItem>
                            );
                        })
                    }
                </List>
            </Box>
        </>
    );
}

export default ContactHomePage;