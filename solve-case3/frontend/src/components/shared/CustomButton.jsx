import { Button } from '@mui/material';
import PropTypes from 'prop-types';

const CustomButton = ({ text }) => {
    return (
        <Button
            variant="contained"
            sx={{
                px: 3,
                py: 1,
                borderRadius: '70%',
                backgroundColor: '#EFEAD7',
                color: '#01512A',
                fontWeight: 'bold',
                border: '3px solid #01512A',
                boxShadow: 'none',
            }}
        >
            {text}
        </Button>
    );
};

CustomButton.propTypes = {
    text: PropTypes.string.isRequired,
};

export default CustomButton;