import { AppBar, Box, Toolbar } from "@mui/material";
import IntroductionHomePage from "../components/IntroductionHomePage";

const HomePage = (props) => {
    return (
        <Box sx={{
            width: '100%',
            height: '100%',
        }}>
            <IntroductionHomePage />
        </Box>
    )
}

export default HomePage;