import styled from '@emotion/styled'
import ModalUnstyled from '@mui/core/ModalUnstyled';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const CheckoutModal = ({ checkoutModal, handleCloseCheckoutModal }: any) => {

    return (
        <div>
        <StyledModal
            open={checkoutModal}
            onClose={handleCloseCheckoutModal}
            BackdropComponent={Backdrop}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Confirm Your Purchase
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                cart Items To Be Displayed
              </Typography>
            </Box>
          </StyledModal>
        </div>
    );
};


const style = {
    position: 'absolute',
    top: '20%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',    
    boxShadow: 24,
    width: 400,
    p: 4,   
    outline: 'none',   
};

const Backdrop = styled.div`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;
const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default CheckoutModal;
