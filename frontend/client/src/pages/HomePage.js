import Navbar from "../components/Navbar";
import { Grid, Card, CardContent, Typography} from '@mui/material';


function HomePage() {
    return (
        <>
            < Grid container spacing={3} justifyContent={"center"} >

                < Grid item xs={12}>
                    < Navbar />
                    <Typography variant="h4" align="center" gutterBottom>
                        Home Page
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5">Product Name</Typography>
                            <Typography variant="body2">
                                This is a great product description.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    );
}

export default HomePage;