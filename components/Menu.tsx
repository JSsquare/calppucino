import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { useSelector } from 'react-redux'
import styled from '@emotion/styled'
import styles from '../styles/Home.module.css'
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../features/cart/cartSlice'
import { addMenuItems, updateAddToCartState  } from '../features/menu/menuSlice';
import { getMenu } from '../features/menu/menuSelectors';
import { useQuery } from 'react-query';
import { useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

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
        <Typography component="div" variant="h5" style={{color:"#016241", backgroundColor:'white'}}>
          Bang For Bucks<sup>$</sup> Coffee
        </Typography>

        <div className={styles.grid}>
            {menuFromState.length === 0 && 
              <Box sx={{ display: 'flex' }}>
                <CircularProgress />
              </Box>
            }
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
                      {item.addToCartState ? <CheckCircleOutlineRoundedIcon fontSize="large"/> :        
                      (<Fab size="small" color="primary" aria-label="add-to-cart" onClick={() => handleAddToCart(item)}>
                        <AddIcon />
                    </Fab>)}
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
  padding: 2rem 1rem;
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