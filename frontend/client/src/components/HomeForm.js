// import { useState } from "react";
// import { homeView } from "../services/homeService";
// import { getCurrentUserID } from "../services/authService";
import { Box, Typography, Button } from "@mui/material";


export function HomeView() {
    const handleSubmit = async (e) => {
    }
    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: 'flex',
                flexDirection: 'column',
                gap: 2,
                width: 300,
                margin: "auto" }}
        >
            <Typography variant="h4" component="h1" align="center" gutterBottom> Home Page </Typography>
            <Button variant="contained" align="center" type="submit">
                Login
            </Button>
        </Box>
    );
}