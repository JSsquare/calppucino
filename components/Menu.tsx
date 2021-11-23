import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { useSelector } from 'react-redux'
import styled from '@emotion/styled'
import styles from '../styles/Home.module.css'
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
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
import { capitalizeFirstLetter } from '../app/utils/format';
import { APP_CONSTANTS } from '../app/constants';

const Menu = () => {
  const { data: menuItems } = useQuery('getMenu', async () => {
    const res = await fetch(`${process.env.HOST}/api/menu`)      
    return res.json()
  })
  const dispatch = useDispatch()
  useEffect(() => {        
      dispatch(addMenuItems(menuItems))
  }, [menuItems, dispatch])

  const { WIP } = APP_CONSTANTS
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

                    <Grid container alignItems="center">  
                    <Grid item xs>
                    <CardHeader title={capitalizeFirstLetter(item.itemName)} />
                    </Grid>
                    <Grid item>
                      <Typography variant="h6"  component="span">${item.itemTraits?.price}</Typography>
                    </Grid>
                    </Grid>
                    <Divider />
                    <Typography variant="body2" color="text.secondary" component="div">
                        {item.itemDescription}
                    </Typography>
                    {!WIP && 
                                        <AddtoCartButtonWrapper> 
                                        {item.addToCartState ? <CheckCircleOutlineRoundedIcon fontSize="large" color="success"/> :        
                                        (<Fab 
                                            size="small"
                                            color="primary" 
                                            aria-label="add-to-cart" 
                                            onClick={() => handleAddToCart(item)}>
                                          <AddIcon />
                                      </Fab>)}
                                      </AddtoCartButtonWrapper>
                    }

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
  padding: 0 1rem 3rem 1rem;
  border-radius: 8px;  
  min-height: 170px;
  &:hover {
    cursor: pointer;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
`

const AddtoCartButtonWrapper = styled.span`
  position: absolute;
  right: 10px;
  padding: 1rem 0;
`