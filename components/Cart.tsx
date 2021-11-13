import styled from '@emotion/styled'
import RemoveShoppingCartOutlinedIcon from '@mui/icons-material/RemoveShoppingCartOutlined';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import { getCartTotalPrice, getNumOfItemsInCart } from '../features/cart/cartSelectors';
import { useSelector } from 'react-redux'
import { Typography } from '@mui/material';

const Cart = () => {
    const cartTotal = useSelector(getCartTotalPrice)
    const numOfItemsInCart = useSelector(getNumOfItemsInCart)    
    return (
        <CartWrapper>
            <RenderCartIcon itemsLength={numOfItemsInCart}/>
            <CartTotalPriceText variant="subtitle2">{cartTotal > 0 && `$${cartTotal}`}</CartTotalPriceText>
        </CartWrapper>
    );
};

const RenderCartIcon = ({ itemsLength }: any) => {    
    const moreThanOneItem = itemsLength > 1 && itemsLength !== 0 
    if(itemsLength === 0) {
        return <RemoveShoppingCartOutlinedIcon/>
    }
    return (
        <>{moreThanOneItem ? <ShoppingCartRoundedIcon /> : <ShoppingCartTwoToneIcon /> }</>
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