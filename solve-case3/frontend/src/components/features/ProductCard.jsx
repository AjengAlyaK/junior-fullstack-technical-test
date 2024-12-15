import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import TitleProduct from '../shared/TitleProduct';

const ProductCard = ({ title, price, link }) => {
    return (
        <Card elevation={0} sx={{ maxWidth: {xs: 345, md: 450}, background: 'transparent', borderRadius: 0 }}>
            <CardMedia
                sx={{ height: 375 }}
                image={link}
                title={title}
            />
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    py: 1,
                }}
            >
                <TitleProduct title={title} price={price} />
            </Box>
        </Card>
    );
}

ProductCard.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default ProductCard;