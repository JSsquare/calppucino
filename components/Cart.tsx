import { useState } from 'react';
import { useSelector } from 'react-redux'
import styled from '@emotion/styled'
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import RemoveShoppingCartOutlinedIcon from '@mui/icons-material/RemoveShoppingCartOutlined';
import { Typography } from '@mui/material';
import { headshakeAnimation, jelloAnimation, bounceInUpAnimation } from '../styles/AnimationsStyled';
import { getCartTotalPrice, getNumOfItemsInCart } from '../features/cart/cartSelectors';
import CheckoutModal from './CheckoutModal';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';

const Cart = () => {
    const cartTotal = useSelector(getCartTotalPrice)
    const itemsInCart = useSelector(getNumOfItemsInCart) !== 0
    const [checkoutModal, setCheckoutModal] = useState(false)
    const handleCloseCheckoutModal = () => {
        setCheckoutModal(false) 
    }

    const handleCheckoutModal = () => {
        if(itemsInCart) setCheckoutModal(true)
    }

    return (
        <>
        <CartWrapper onClick={handleCheckoutModal}>
                <RenderCartIcon />
                <CartTotalPriceText style={{cursor: 'pointer'}} variant="subtitle2">{cartTotal > 0 && `$${cartTotal}`}</CartTotalPriceText>            
        </CartWrapper>
        {itemsInCart && <RenderCheckoutButton handleCheckoutModal={handleCheckoutModal} />}
        <CheckoutModal 
                checkoutModal={checkoutModal} 
                handleCloseCheckoutModal={handleCloseCheckoutModal}
        />
        </>
    );
};

const RenderCartIcon = () => {        
    const itemsLength = useSelector(getNumOfItemsInCart)
    const moreThanOneItem = itemsLength > 1 && itemsLength !== 0

    if(itemsLength === 0) {
        return <RemoveShoppingCartOutlinedIcon fontSize="large"/>
    }
    return (
           <Badge badgeContent={itemsLength} color="error">
            <FilledCartDiv style={{cursor: 'pointer'}}  >
                {moreThanOneItem ? <MoreThanOneItemCart fontSize="large" /> : <SingleItemCartIcon fontSize="large" /> }
            </FilledCartDiv>
            </Badge>
    )
}

const RenderCheckoutButton = ({ handleCheckoutModal }: any) => {
    const itemsLength = useSelector(getNumOfItemsInCart)
    return <CheckoutButton onClick={() => handleCheckoutModal()} variant="contained">Checkout My <Badge badgeContent={itemsLength} ><LocalCafeIcon/></Badge></CheckoutButton>
}

const CheckoutButton = styled(Button)`
    position: absolute;
    animation-duration: 1.5s;    
    animation-name: ${bounceInUpAnimation};
    bottom: 3rem; 
`
const CartWrapper = styled.div`

    margin-top: 2rem;
`

const FilledCartDiv = styled.div`
` 

const SingleItemCartIcon = styled(ShoppingCartTwoToneIcon)`
    animation-duration: .5s;
    animation-timing-function: cubic-bezier(0,.23,1,.71);
    animation-name: ${headshakeAnimation};
    transform-orgin: center bottom;
`
const MoreThanOneItemCart = styled(ShoppingCartRoundedIcon)`
    animation-duration: .7s;
    animation-name: ${jelloAnimation};
    transform-origin: center;
`
const CartTotalPriceText = styled(Typography)`
    height: 32px;    
`

export default Cart;