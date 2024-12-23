import PropTypes from 'prop-types';
import { Stack, Typography } from '@mui/material';

const WordingHalfPage = ({ title, subtitle, paragraph }) => {
    return (
        <Stack spacing={2}>
            <Typography
                variant="h4"
                sx={{
                    fontWeight: 'bold',
                    fontStyle: 'italic',
                    color: '#01512A'
                }}
            >
                {title}
            </Typography>
            <Typography
                sx={{
                    fontWeight: 'bold',
                    fontStyle: 'italic',
                    color: '#01512A'
                }}
            >
                {subtitle}
            </Typography>
            <Typography
                sx={{
                    textAlign: 'justify',
                    color: '#01512A'
                }}
            >
                {paragraph}
            </Typography>
        </Stack>
    );
};

WordingHalfPage.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired,
};

export default WordingHalfPage;