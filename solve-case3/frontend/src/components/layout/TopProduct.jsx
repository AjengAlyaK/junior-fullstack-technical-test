import { Box } from "@mui/material"
import SecondTitle from "../shared/SecondTitle";
import Grid from "@mui/material/Grid2";
import ProductCard from "../features/ProductCard";
import CustomButton from "../shared/CustomButton";
import products from "../../utils/data";

const TopProduct = () => {
    return (
        <Box
            sx={{
                width: '100%',
                backgroundColor: '#EFEAD7',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    py: 6
                }}
            >
                <SecondTitle text="TOP GOODIES ATM" />
            </Box>
            <Box sx={{ px: { xs: 4, md: 7 } }}>
                <Grid
                    container
                    spacing={{ xs: 0, md: 4, lg: 3 }}
                    justifyContent="center"
                >
                    {products.map((product, index) => (
                        <Grid size={{ xs: 12, md: 6, lg: 3 }} sx={{ mb: { xs: 2, md: 0 } }} key={index}>
                            <ProductCard title={product.name} price={product.price} link={product.link} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    pt: 3,
                    pb: 6
                }}
            >
                <CustomButton text="shop all goodies" />
            </Box>
        </Box>
    );
};

export default TopProduct;