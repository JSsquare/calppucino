import { useState } from 'react';
import { keyframes } from '@emotion/react'
import { useSelector } from 'react-redux'
import styled from '@emotion/styled'
import Badge from '@mui/material/Badge';
import RemoveShoppingCartOutlinedIcon from '@mui/icons-material/RemoveShoppingCartOutlined';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import { getCartTotalPrice, getNumOfItemsInCart } from '../features/cart/cartSelectors';
import { Typography } from '@mui/material';
import CheckoutModal from './CheckoutModal';

const Cart = () => {
    const cartTotal = useSelector(getCartTotalPrice)

    return (
        <CartWrapper >
            <RenderCartIcon />
            <CartTotalPriceText variant="subtitle2">{cartTotal > 0 && `$${cartTotal}`}</CartTotalPriceText>
        </CartWrapper>
    );
};

const RenderCartIcon = () => {        
    const itemsLength = useSelector(getNumOfItemsInCart)
    const moreThanOneItem = itemsLength > 1 && itemsLength !== 0
    const [checkoutModal, setCheckoutModal] = useState(false)
    const handleCloseCheckoutModal = () => {
        setCheckoutModal(false) 
    }

    const handleCheckoutModal = () => {
        setCheckoutModal(true)
    }

    if(itemsLength === 0) {
        return <RemoveShoppingCartOutlinedIcon fontSize="large"/>
    }
    return (
        <>
           <Badge badgeContent={itemsLength} color="error">
            <FilledCartDiv style={{cursor: 'pointer'}} onClick={handleCheckoutModal} >
                {moreThanOneItem ? <ShoppingCartRoundedIcon fontSize="large" /> : <ShoppingCartTwoToneIcon fontSize="large" /> }
            </FilledCartDiv>
            </Badge>
            <CheckoutModal 
                checkoutModal={checkoutModal} 
                handleCloseCheckoutModal={handleCloseCheckoutModal}
            />
        </>
    )
}


const headshake = keyframes`
0% {
    transform: translateX(0)
  }

  12.5% {
    transform: translateX(-6px) rotateY(-9deg) skewY(1deg)
  }

  37.5% {
    transform: translateX(5px) rotateY(4.5deg) skewY(-1deg)
  }

  62.5% {
    transform: translateX(-3px) rotateY(-2.25deg) skewY(0)
  }

  87.5% {
    transform: translateX(2px) rotateY(3deg) 
  }

  100% {
    transform: translateX(0)
  }
`

const CartWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 1rem; 
`

const FilledCartDiv = styled.div`
    animation-duration: .5s;
    animation-timing-function: cubic-bezier(0,.23,1,.71);
    animation-name: ${headshake};
    transform-orgin: center bottom;
` 

const CartTotalPriceText = styled(Typography)`
    height: 32px;    
`

export default Cart;