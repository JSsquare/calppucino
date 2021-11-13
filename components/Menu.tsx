import styled from '@emotion/styled'
import styles from '../styles/Home.module.css'
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../features/cart/cartSlice'

const Menu = ({ menuItems } : any) => {

  const dispatch = useDispatch()

  const handleAddToCart = (item: any) => {
    const { id: menuItemId, itemName: menuItemName, itemTraits: { price } } = item
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
        <Typography component="div" variant="h3">
          Coffee Menu
        </Typography>

        <div className={styles.grid}>
            {menuItems?.length && (
                    <div >
                    {menuItems.map((item: any, i: number) => (
                    <MenuCardMUI key={i} raised={true}>
                    <Typography component="div" variant="h5">{item.itemName}</Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {item.itemDescription}
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary" component="span">${item.itemTraits?.price}</Typography>
                      <AddCircleOutlineRoundedIcon onClick={() => handleAddToCart(item)}/>
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
  margin-top: 16px;
  padding: 1rem;
  border-radius: 8px;  
  &:hover {
    cursor: pointer;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
`