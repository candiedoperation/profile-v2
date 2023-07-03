import * as React from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText, ListSubheader, Step, StepButton, StepContent, Stepper, Typography } from "@mui/material";
import "@fontsource/inter/900.css";
import { SubdirectoryArrowRight } from '@mui/icons-material';
import { getCurrentTheme } from '../middleware/AppThemeController';

const StepsDescriptionTemplate = (props) => {
    const [activeStep, setActiveStep] = React.useState(0);

    return (
        <Stepper nonLinear sx={{ width: { xs: '100%', md: "80%", lg: "70%" } }} activeStep={activeStep} orientation="vertical">
                {
                    props.data.map((school, key) => (
                        <Step expanded={(props.expanded)} key={key}>
                            <StepButton icon={props.icon} onClick={() => { setActiveStep(key) }}>
                                <Typography sx={{ fontFamily: 'inter' }} variant='h5'>{school.title}</Typography>
                                <Typography variant='subtitle'>{school.subtitle}</Typography>
                            </StepButton>
                            <StepContent>
                                <List>
                                    {
                                        Object.keys(school.activities).map((activityType) => (
                                            <>
                                                <ListSubheader sx={{ bgcolor: 'action.hover', borderRadius: '8px' }}>{activityType}</ListSubheader>
                                                {
                                                    school.activities[activityType].map((activity) => (
                                                        <ListItem>
                                                            <ListItemIcon>
                                                                {
                                                                    (activity.icon) ?
                                                                    activity.icon :
                                                                    <SubdirectoryArrowRight />
                                                                }
                                                            </ListItemIcon>
                                                            <ListItemText primary={activity.name} secondary={activity.description} />
                                                        </ListItem>
                                                    ))
                                                }
                                            </>
                                        ))
                                    }
                                </List>
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', width: '100%' }}>
                                    {school.dynamic}
                                </Box>
                            </StepContent>
                        </Step>
                    ))
                }
        </Stepper>
    );
}

export default StepsDescriptionTemplate;