import {Grid, Box} from '@mui/material'
import {PortfolioSummaryCard} from '../components/Card.js'

export default function DashboardPage() {
    return (
        <>
            <Box sx={{flexGrow: 1}}>
                <Grid container spacing={2} justifyContent={"center"}>
                    <Grid item xs={12}>
                        <PortfolioSummaryCard
                            width={1000}
                            height={1000}
                            text={"Total Invested: $12,500\n" +
                            "Available to Invest: $2,000\n" +
                            "Total Returns Earned: $1,275\n" +
                            "Active Investments: 8 businesses\n" +
                            "Average Annual Return: 9.2%\n" +
                            "Next Interest Payment: June 5, 2025"}>
                        </PortfolioSummaryCard>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}