import { useSelector } from 'react-redux'
import styled from '@emotion/styled'
import styles from '../styles/Home.module.css'
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../features/cart/cartSlice'
import { addMenuItems, updateAddToCartState  } from '../features/menu/menuSlice';
import { getMenu } from '../features/menu/menuSelectors';
import { useQuery } from 'react-query';
import { useEffect } from 'react';

const Menu = () => {
  const { data: menuItems } = useQuery('getMenu', async () => {
    const res = await fetch(`${process.env.HOST}/api/menu`)      
    return res.json()
  })
  const dispatch = useDispatch()
  useEffect(() => {        
      dispatch(addMenuItems(menuItems))
  }, [menuItems, dispatch])


  const menuFromState = useSelector(getMenu)  
  const handleAddToCart = (item: any) => {
    const { _id: menuItemId, itemName: menuItemName, itemTraits: { price } } = item
    dispatch(updateAddToCartState(menuItemId))
    const cartItemPayload = {
      menuItemId,
      menuItemName,
      price: Number(price),
      quantity: 1
    }
    dispatch(addItemToCart(cartItemPayload))
  }
    return (
    <main className={styles.main}>
        <Typography component="div" variant="h4">
          Choose Your Coffee
        </Typography>

        <div className={styles.grid}>
            {menuFromState?.length > 0 && (
                    <div >
                    {menuFromState.map((item: any, i: number) => (                    
                    <MenuCardMUI key={item._id} raised={true}>
                    <Typography component="div" variant="h5">{item.itemName}</Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {item.itemDescription}
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary" component="span">${item.itemTraits?.price}</Typography>
                    <AddtoCartButtonWrapper>                 
                      {item.addToCartState ? <CheckCircleOutlineRoundedIcon fontSize="large"/> : <AddCircleOutlineRoundedIcon fontSize="large" onClick={() => handleAddToCart(item)}/>}
                    </AddtoCartButtonWrapper>                      
                    </MenuCardMUI>
                    ))}
                    </div>                
            ) }         
        </div>
      </main>
    );
};

export default Menu;

const MenuCardMUI = styled(Card)`
  position: relative;
  margin-top: 16px;
  padding: 1rem;
  border-radius: 8px;  
  &:hover {
    cursor: pointer;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
`

const AddtoCartButtonWrapper = styled.span`
  position: absolute;
  right: 10px;
`