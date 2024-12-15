import PropTypes from 'prop-types';
import { Stack, Typography } from '@mui/material';

const TitleProduct = ({ title, price }) => {
    return (
        <Stack spacing={1}>
            <Typography
                textAlign="center"
                sx={{
                    fontWeight: 'bold',
                    color: '#01512A'
                }}
            >
                {title}
            </Typography>
            <Typography
                textAlign="center"
                sx={{
                    fontWeight: 'bold',
                    color: '#01512A'
                }}
            >
                {price}
            </Typography>
        </Stack>
    );
};

TitleProduct.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
};

export default TitleProduct;