import { useState } from 'react';
import { useSelector } from 'react-redux'
import styled from '@emotion/styled'
import RemoveShoppingCartOutlinedIcon from '@mui/icons-material/RemoveShoppingCartOutlined';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import { getCartTotalPrice, getNumOfItemsInCart } from '../features/cart/cartSelectors';
import { Typography } from '@mui/material';
import CheckoutModal from './CheckoutModal';

const Cart = () => {
    const cartTotal = useSelector(getCartTotalPrice)

    return (
        <CartWrapper>
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
            <div style={{cursor: 'pointer'}} onClick={handleCheckoutModal}>
                {moreThanOneItem ? <ShoppingCartRoundedIcon fontSize="large"/> : <ShoppingCartTwoToneIcon fontSize="large" /> }
            </div>
            <CheckoutModal 
                checkoutModal={checkoutModal} 
                handleCloseCheckoutModal={handleCloseCheckoutModal}
            />
        </>
    )
}

const CartWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
`

const CartTotalPriceText = styled(Typography)`
    height: 32px;    
`

export default Cart;