import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {VerifiedLink} from "./Links";

export default function Navbar({links}) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Crowd Lending
                    </Typography>
                    {links.map((link) => (
                        <Button key={link.label} color="inherit" onClick={link.onClick}> {link.label} </Button>
                    ))}
                </Toolbar>
            </AppBar>
        </Box>
    );
}