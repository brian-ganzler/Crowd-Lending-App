import { useState } from "react";
import { createInvestor } from "../services/investorService";
import { getCurrentUserID } from "../services/authService";
import { Box, Typography, TextField, Button } from "@mui/material";


export function CreateInvestorForm() {
    const [ preferences, setPreferences ] = useState("")
    const [riskTolerance, setRiskTolerance ] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const user_id = getCurrentUserID();
            await createInvestor({"user_id": user_id, "preferences": preferences, "risk_tolerance": riskTolerance});
            alert("Investor created successfully.");
            setPreferences("");
            setRiskTolerance("");
        } catch (error) {
            alert("Failed to create investor");
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
            <Typography variant="h4" component="h1" align="center" gutterbottom> Create Investor Profile </Typography>
            <TextField
                label="Preferences"
                variant="outlined"
                align="center"
                value={preferences}
                onChange={(e) => setPreferences(e.target.value)}
                required
            />
            <TextField
                label="Risk Tolerance"
                variant="outlined"
                align="center"
                value={riskTolerance}
                onChange={(e)=> setRiskTolerance(e.target.value)}
                required
            />
            <Button variant="contained" align="center" type="submit">
                Create Account
            </Button>
        </Box>
    );
}