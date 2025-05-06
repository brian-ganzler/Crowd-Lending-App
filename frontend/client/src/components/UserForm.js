import { useState } from "react";  // Track the form input
import { createUser } from "../services/userService";
import { Box, Typography, TextField, Button } from "@mui/material";


export function CreateUserForm() {
    const [username, setUsername] = useState("")
    const [ password, setPassword ] = useState("")
    const [ email, setEmail ] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();  //Stop webpage from reloading when submit is pressed
        try {
            await createUser({"username": username, "password": password, "email": email});
            alert("User created successfully!");  // Remove these alerts for production and use page redirection
            setUsername("")  // Reset fields to blank, probably not needed as I'll end up redirecting to another site
            setPassword("")
            setEmail("")
        } catch (error) {
            alert("Failed to create user");
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
            <Typography variant="h4" component="h1" align="center" gutterBottom> Create an Account </Typography>
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
            <TextField
                label="Email"
                variant="outlined"
                align="center"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <Button variant="contained" align="center" type="submit">
                Create Account
            </Button>
        </Box>
    );
}