import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import CustomButton from "../shared/CustomButton";
import WordingHalfPage from "../shared/WordingHalfPage";
import HalfImage from "../shared/HalfImage";

const AboutGreenest = () => {
    const title = "CULTIVATING A GREENER FUTURE";
    const subtitle = "one home at a time";
    const paragraph = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni excepturi repellat distinctio quia culpa non doloribus adipisci recusandae impedit voluptatem omnis voluptates consequuntur, libero, quibusdam molestias quasi aut nisi, eius itaque quae commodi repellendus. Repudiandae vitae, ex harum molestiae quasi quidem neque vero rerum doloremque debitis optio! Debitis officiis provident ipsa eum expedita, velit a minima molestiae nemo sequi error.";
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
                            <WordingHalfPage title={title} subtitle={subtitle} paragraph={paragraph} />
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
                    <HalfImage picture={picture} />
                </Grid>
            </Grid>
        </Box >
    );
};

export default AboutGreenest;