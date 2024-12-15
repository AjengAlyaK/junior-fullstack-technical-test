import { Box, Paper, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import CustomButton from "../shared/CustomButton";

const AboutGreenest = () => {
    const picture = "https://firebasestorage.googleapis.com/v0/b/mostgreen.appspot.com/o/frontstore-hd.png?alt=media&token=b1aafd29-699e-4c1f-ab72-fdb02c9f7afe";
    return (
        <Box
            sx={{
                width: "100%",
                backgroundColor: "#F6DBD0",
            }}
        >
            <Grid container>
                <Grid size={{ sx: 12, md: 6 }}>
                    <Box sx={{ px: { xs: 4, md: 7 }, py: { xs: 4, md: 5 }, height: '100%', display: 'flex', alignItems: 'center' }}>
                        <Grid size={{ sx: 12, md: 10 }}>
                            <Stack spacing={2}>
                                <Typography
                                    variant="h4"
                                    sx={{
                                        fontWeight: 'bold',
                                        fontStyle: 'italic',
                                        color: '#01512A'
                                    }}
                                >
                                    CULTIVATING A GREENER FUTURE
                                </Typography>
                                <Typography
                                    sx={{
                                        fontWeight: 'bold',
                                        fontStyle: 'italic',
                                        color: '#01512A'
                                    }}
                                >
                                    one home at a time
                                </Typography>
                                <Typography
                                    sx={{
                                        textAlign: 'justify',
                                        color: '#01512A'
                                    }}
                                >
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni excepturi repellat distinctio quia culpa non doloribus adipisci recusandae impedit voluptatem omnis voluptates consequuntur, libero, quibusdam molestias quasi aut nisi, eius itaque quae commodi repellendus. Repudiandae vitae, ex harum molestiae quasi quidem neque vero rerum doloremque debitis optio! Debitis officiis provident ipsa eum expedita, velit a minima molestiae nemo sequi error.
                                </Typography>
                            </Stack>
                            <Box
                                sx={{
                                    pt: 4,
                                    pb: { xs: 2, md: 4 }
                                }}
                            >
                                <CustomButton text="shop now" />
                            </Box>
                        </Grid>
                    </Box>
                </Grid>
                <Grid size={{ sx: 12, md: 6 }}>
                    <Paper sx={{
                        height: '100vh',
                        overflow: 'hidden',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 0,
                    }}>
                        <img
                            src={picture}
                            alt="pic"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                            }}
                        />
                    </Paper>
                </Grid>
            </Grid>
        </Box >
    );
};

export default AboutGreenest;