import {Grid, Box, Card, CardContent, Typography, Container} from '@mui/material';
import {HomeCard, MissionCard} from "../components/Card.js"


function HomePage() {
    return (
        <>
            <Box sx={{ minHeight: "100vh", backgroundColor: "white" }}>
                <Container maxWidth="lg" sx={{paddingTop:2}}> {/* Keep cards centered and avoid stretching excessively */}
                    < Grid container spacing={2} justifyContent={"center"}>
                        < Grid item xs={12} sm={6} md={3} >
                            <HomeCard
                                width="100%"
                                height={250}
                                text={"Crowd Lending helped me secure funding for my startup faster than I ever expected. The investors were supportive, and the process was incredibly smooth. Thanks to them, my business is thriving today! \n\n— Sarah T., Founder of EcoWave Technologies"}></HomeCard>
                        </Grid>
                        < Grid item xs={12} sm={6} md={3} >
                            <HomeCard
                                width="100%"
                                height={250}
                                text={"Getting a loan through traditional banks was a nightmare. Crowd Lending made it simple, quick, and personal. I got funded in just three weeks and finally opened my second café! \n\n— James P., Owner of FreshBrew Café"}></HomeCard>
                        </Grid>
                        < Grid item xs={12} sm={6} md={3}  >
                            <HomeCard
                                width="100%"
                                height={250}
                                text={"As an investor, I love how transparent the platform is. I was able to support businesses that aligned with my values and still receive strong returns on my investments.\n\n— Emily R., Private Investor"}></HomeCard>
                        </Grid>
                        < Grid item xs={12} sm={6} lg={3}  >
                            <HomeCard
                                width="100%"
                                height={250}
                                text={"When other lenders turned me away, Crowd Lending gave me a chance. Their platform connected me to real people who believed in my idea, and now my online boutique is thriving.\n\n— Olivia M., Owner of NovaStyle Boutique"}></HomeCard>
                        </Grid>
                    </Grid>
                </Container>
                < Grid container justifyContent={"center"} >
                    < Grid item xs={12} >
                        <MissionCard
                            width={800}
                            height={200}
                            text={"The goal is to build a clean, professional web application that connects small businesses seeking funding with individual investors willing to lend money. " +
                                "Businesses can post funding requests, and investors can browse opportunities, invest based on preferences, and earn returns over time." +
                                "\n\nThe platform needs to look trustworthy, easy to navigate, and highlight real user success stories (testimonies) to build confidence for both lenders and borrowers."}></MissionCard>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default HomePage;