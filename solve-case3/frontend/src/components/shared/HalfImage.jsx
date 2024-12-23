import PropTypes from 'prop-types';
import { Paper } from '@mui/material';

const HalfImage = ({ picture }) => {
    return (
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
    );
};

HalfImage.propTypes = {
    picture: PropTypes.string.isRequired,
};

export default HalfImage;