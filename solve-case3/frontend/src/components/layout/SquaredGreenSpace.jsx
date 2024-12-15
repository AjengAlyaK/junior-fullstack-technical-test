import PropTypes from 'prop-types';
import { Box } from '@mui/material';

const SquaredGreenSpace = ({ height  }) => {
    const greenChess = 'https://firebasestorage.googleapis.com/v0/b/mostgreen.appspot.com/o/chessgreen-hd.jpg?alt=media&token=60430b9f-ac0f-4f7f-8bbc-6782ad107867';
    return (
        <>
            <Box
                sx={{
                    width: "100%",
                    height: height,
                    background: `url(${greenChess}) center/cover no-repeat`,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                }}
            />
        </>
    );
};

SquaredGreenSpace.propTypes = {
    height: PropTypes.string.isRequired,
};

export default SquaredGreenSpace;