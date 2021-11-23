import Button from '@mui/material/Button';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import styled from '@emotion/styled'
import { useSelector } from 'react-redux';
import { bounceInUpAnimation } from '../styles/AnimationsStyled';
import { getNumOfItemsInCart } from '../features/cart/cartSelectors';
import Badge from '@mui/material/Badge';

const BounceInCheckoutButton = ({ handleCheckoutModal }: any) => {
    const itemsLength = useSelector(getNumOfItemsInCart)
    return <CheckoutButton onClick={() => handleCheckoutModal()} variant="contained">Checkout My <Badge badgeContent={itemsLength} ><LocalCafeIcon/></Badge></CheckoutButton>
}

export default BounceInCheckoutButton

const CheckoutButton = styled(Button)`
    position: absolute;
    animation-duration: 1.5s;    
    animation-name: ${bounceInUpAnimation};
    top: 87%; 
`