import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Crowd Lending
                    </Typography>
                    <Button color="inherit">Home</Button>
                    <Button color="inherit">Log In</Button>
                    <Button color="inherit">Invest</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}