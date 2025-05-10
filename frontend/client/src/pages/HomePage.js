import Navbar from "../components/Navbar";
import {Grid, Box, Card, CardContent, Typography, Container} from '@mui/material';


function HomePage() {
    return (
        <>
            < Navbar />
            <Box sx={{ minHeight: "100vh", backgroundColor: "white" }}>
                <Container maxWidth="lg" sx={{paddingTop:2}}> {/* Keep cards centered and avoid stretching excessively */}
                    < Grid container spacing={2} justifyContent={"center"}>
                        < Grid item xs={12} sm={6} md={3} >
                            <Card sx={{width: "100%", height: 250, backgroundColor: "#e3f2fd", boxShadow: 3}}> {/* First row left card */}
                                <CardContent sx={{maxWidth: "200px"}}>
                                    <Typography variant="body2" align="center" >
                                        "Crowd Lending helped me secure funding for my startup faster than I ever expected. The investors were supportive, and the process was incredibly smooth. Thanks to them, my business is thriving today!"
                                        <br /><br />— Sarah T., Founder of EcoWave Technologies
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        < Grid item xs={12} sm={6} md={3} >
                            <Card sx={{width: "100%", height: 250, backgroundColor: "#e3f2fd", boxShadow: 3}}> {/* First row center card */}
                                <CardContent sx={{maxWidth: "200px"}}>
                                    <Typography variant="body2" align="center">
                                        "Getting a loan through traditional banks was a nightmare. Crowd Lending made it simple, quick, and personal. I got funded in just three weeks and finally opened my second café!"
                                        <br /><br />— James P., Owner of FreshBrew Café
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        < Grid item xs={12} sm={6} md={3}  >
                            <Card sx={{width: "100%", height: 250, backgroundColor: "#e3f2fd", boxShadow: 3}}> {/* First row right card */}
                                <CardContent sx={{maxWidth: "200px"}}>
                                    <Typography variant="body2" align="center">
                                        "As an investor, I love how transparent the platform is. I was able to support businesses that aligned with my values and still receive strong returns on my investments."
                                        <br /><br />— Emily R., Private Investor
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        < Grid item xs={12} sm={6} lg={3}  >
                            <Card sx={{width: "100%", height: 250, backgroundColor: "#e3f2fd", boxShadow: 3}}> {/* First row right card */}
                                <CardContent sx={{maxWidth: "200px"}}>
                                    <Typography variant="body2" align="center">
                                        "When other lenders turned me away, Crowd Lending gave me a chance. Their platform connected me to real people who believed in my idea, and now my online boutique is thriving."
                                        <br/><br />— Olivia M., Owner of NovaStyle Boutique
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
                < Grid container justifyContent={"center"} >
                    < Grid item xs={12} >
                        <Card sx={{width: 800, height: 200, padding: 0, margin: 2, backgroundColor: "#e3f2fd", boxShadow: 3}}> {/* Second row center card */}
                            <CardContent>
                                <Typography variant="h5" align="center">Our Mission</Typography>
                                <Typography variant="body2" align="center">
                                    The goal is to build a clean, professional web application that connects small businesses seeking funding with individual investors willing to lend money.
                                    Businesses can post funding requests, and investors can browse opportunities, invest based on preferences, and earn returns over time.
                                    <br/><br/>
                                    The platform needs to look trustworthy, easy to navigate, and highlight real user success stories (testimonies) to build confidence for both lenders and borrowers.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default HomePage;