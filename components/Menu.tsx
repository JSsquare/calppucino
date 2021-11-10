import styled from '@emotion/styled'
import styles from '../styles/Home.module.css'
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

const Menu = ({ menuItems } : any) => {
    return (
    <main className={styles.main}>
        <Typography component="div" variant="h1">
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
                    <Typography variant="subtitle2" color="text.secondary" component="p">${item.itemTraits?.price}</Typography>
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
  &:hover{
    cursor: pointer;
  }
`