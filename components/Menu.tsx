import styles from '../styles/Home.module.css'
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

const Menu = ({ menuItems } : any) => {
    return (
    <main className={styles.main}>
        <h1 className={styles.title}>
          Coffee Menu
        </h1>

        <p className={styles.description}>
          Pickup Address          
        </p>

        <div className={styles.grid}>
            {menuItems.length && (
                    <div >
                    {menuItems.map((item: any, i: number) => (
                    <Card key={i} style={{marginTop: '8px'}}>
                    <Typography component="div" variant="h5">{item.itemName}</Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {item.itemDescription}
                    </Typography>
                    <p>${item.itemTraits?.price}</p>

                    </Card>
                    ))}
                    </div>                
            ) }         
        </div>
      </main>
    );
};

export default Menu;