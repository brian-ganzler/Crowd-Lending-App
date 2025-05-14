import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import {CardContent} from "@mui/material";

export function HomeCard({width, height, text}) {
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

export function MissionCard({width, height, text}) {
    return (
        <Card sx={{width: width, height: height, padding: 0, margin: 2, backgroundColor: "#e3f2fd", boxShadow: 3}}> {/* Second row center card */}
            <CardContent>
                <Typography variant="h5" align="center">Our Mission</Typography>
                <Typography variant="body2" align="center">
                    {text}
                </Typography>
            </CardContent>
        </Card>
    );
}