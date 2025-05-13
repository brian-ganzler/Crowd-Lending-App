import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import {CardContent} from "@mui/material";

export default function HomeCard({width, height, text}) {
    return (
        <Card sx={{width: width, height: height, backgroundColor: "#e3f2fd", boxShadow: 3}}> {/* First row left card */}
            <CardContent sx={{maxWidth: "200px"}}>
                <Typography variant="body2" align="center" style={{whiteSpace: "pre-line"}}>
                    {text}
                </Typography>
            </CardContent>
        </Card>
    );
}