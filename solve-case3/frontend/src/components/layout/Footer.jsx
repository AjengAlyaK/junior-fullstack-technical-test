import { Box, Typography, Link } from '@mui/material';
import Grid from "@mui/material/Grid2";
import EmailOutlined from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlined from '@mui/icons-material/LocalPhoneOutlined';

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: '#014D27', color: '#EFEAD7', px: {xs: 4, md: 7}, py: {xs: 3, md: 5}, width: '100%' }}>
            <Grid container spacing={4} >
                {/* Logo/Brand Info */}
                <Grid item xs={12} md={3}>
                    <Typography variant="h6" fontWeight="bold">
                        GREENEST
                    </Typography>
                    <Box sx={{ mt: 1 }}>
                        <Typography>
                            Sustainable home goodies for a better future.
                        </Typography>
                    </Box>
                </Grid>

                {/* Navigation Links */}
                <Grid item xs={6} md={2}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Quick Links</Typography>
                    <Box>
                        {['About', 'Shop', 'Contact', 'Cart'].map((item) => (
                            <Link
                                key={item}
                                href="#"
                                sx={{
                                    display: 'block',
                                    color: '#EFEAD7',
                                    textDecoration: 'none',
                                    mt: 1,
                                }}
                            >
                                {item}
                            </Link>
                        ))}
                    </Box>
                </Grid>

                {/* Support */}
                <Grid item xs={6} md={2}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Support</Typography>
                    <Box>
                        {['Help Center', 'Tweet @ Us', 'FeedBack'].map((item) => (
                            <Link
                                key={item}
                                href="#"
                                sx={{
                                    display: 'block',
                                    color: '#EFEAD7',
                                    textDecoration: 'none',
                                    mt: 1,
                                }}
                            >
                                {item}
                            </Link>
                        ))}
                    </Box>
                </Grid>

                {/* Contact Information */}
                <Grid item xs={6} md={3}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Contact Us</Typography>
                    <Box sx={{ mt: 1 }}>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                                alignItems: 'center'
                            }}
                        >
                            <EmailOutlined sx={{ mr: 1 }} />
                            <Typography>info@greennest.com</Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                pt: 1,
                            }}
                        >
                            <LocalPhoneOutlined sx={{ mr: 1 }} />
                            <Typography>+1 234 567 890</Typography>
                        </Box>
                    </Box>
                </Grid>

                {/* Social Media Links */}
                <Grid item xs={12} md={3}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Follow Us</Typography>
                    <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
                        {['Instagram', 'Facebook', 'Twitter'].map((platform) => (
                            <Link
                                key={platform}
                                href={`https://www.${platform.toLowerCase()}.com`}
                                target="_blank"
                                sx={{
                                    color: '#EFEAD7',
                                    textDecoration: 'none',
                                    fontWeight: 'bold',
                                }}
                            >
                                {platform}
                            </Link>
                        ))}
                    </Box>
                </Grid>

            </Grid>

            {/* Footer Bottom */}
            <Box sx={{ mt: 4, textAlign: 'center' }}>
                <Typography variant="body2">
                    © {new Date().getFullYear()} GreenNest. All Rights Reserved.
                </Typography>
            </Box>
        </Box>
    );
};

export default Footer;