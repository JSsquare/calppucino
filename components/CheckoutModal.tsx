import styled from '@emotion/styled'
import { useSelector } from 'react-redux'
import { getCartItems } from '../features/cart/cartSelectors'
import { getCartTotalPrice } from '../features/cart/cartSelectors'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import ModalUnstyled from '@mui/core/ModalUnstyled';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const CheckoutModal = ({ checkoutModal, handleCloseCheckoutModal }: any) => {
    const cartItems = useSelector(getCartItems)
    const totalPrice = useSelector(getCartTotalPrice)    
    return (
        <div>
        <StyledModal
            open={checkoutModal}
            onClose={handleCloseCheckoutModal}
            BackdropComponent={Backdrop}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style as any}>
              <Typography id="modal-modal-title" variant="h6" component="h2" align="center">
                Confirm Your Purchase
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <List disablePadding>
                    {cartItems.map((item: any) => (
                        <ListItem key={item.menuItemName} sx={{ py: 1, px: 0 }}>
                             <ListItemText primary={item.menuItemName} secondary={'Qty: ' + `${item.quantity}`}  />
                             <Typography variant="body2">${item.price}</Typography>                  
                        </ListItem>
                    ))}
                      <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {totalPrice}
          </Typography>
        </ListItem>      
              </List>

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
