import { Box, Stack, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import CustomButton from "../shared/CustomButton";

const HeroArea = () => {
    return (
        <Box
            sx={{
                height: "100vh",
                width: "100%",
                position: "relative",
                background: `url('https://firebasestorage.googleapis.com/v0/b/mostgreen.appspot.com/o/download%20(5).png?alt=media&token=975b54ce-9f76-4866-9c81-4945e2d3a35e') center/cover no-repeat`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
            }}
        >
            {/* Overlay */}
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "rgba(1, 81, 42, 0.2)", // Shade overlay with opacity
                }}
            />

            {/* Content */}
            <Grid container width="100%">
                <Grid size={12}>
                    <Stack spacing={5}>
                        <Box>
                            <Typography
                                sx={{
                                    typography: { xs: 'h2', md: 'h1' },
                                    position: 'relative',
                                    color: '#EFEAD7',
                                    fontWeight: '1000',
                                    textAlign: 'center',
                                    fontStyle: 'italic',
                                }}
                            >
                                GREENEST
                            </Typography>
                            <Typography
                                sx={{
                                    typography: { xs: 'h6', md: 'h5' },
                                    position: "relative",
                                    color: "#EFEAD7",
                                    fontWeight: "",
                                    textAlign: "center",
                                    fontStyle: 'italic',
                                }}
                            >
                                Find your sustainable home goodies needs here
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <CustomButton text="View Products" />
                        </Box>
                    </Stack>
                </Grid>
            </Grid>
        </Box >
    );
};

export default HeroArea;
