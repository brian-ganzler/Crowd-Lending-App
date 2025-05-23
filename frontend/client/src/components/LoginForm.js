import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authenticateUser } from "../services/authService";
import { Box, Typography, TextField, Button } from "@mui/material";


export function LoginUser() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await authenticateUser({"username": username, "password": password});
            alert(`User logged in successfully!`);
            setUsername("");
            setPassword("");
            navigate("/dashboard")

        } catch (error) {
            alert("Failed to authenticate user.")
        }
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
            <Typography variant="h4" component="h1" align="center" gutterBottom> Login </Typography>
            <TextField
                label="Username"
                variant="outlined"
                align="center"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
            <TextField
                label="Password"
                variant="outlined"
                align="center"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                required
            />
            <Button variant="contained" align="center" type="submit">
                Login
            </Button>
        </Box>
    );
}