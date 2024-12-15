import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

const SecondTitle = ({ text }) => {
    return (
        <Typography
            variant="h4"
            sx={{
                color: '#01512A',
                fontWeight: 'bold',
                textAlign: 'center',
                fontStyle: 'italic',
            }}
        >
            {text}
        </Typography>
    );
};

SecondTitle.propTypes = {
    text: PropTypes.string.isRequired,
};

export default SecondTitle;