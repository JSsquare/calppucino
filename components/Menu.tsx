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
          Pickup Address{' '}
          <code className={styles.code}></code>
        </p>

        <div className={styles.grid}>
            {menuItems.length && (
                    <Card >
                    {menuItems.map((item: any, i: number) => (
                    <div key={i}>
                    <Typography component="div" variant="h5">{item.itemName}</Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {item.itemDescription}
                    </Typography>
                    <p>${item.itemTraits.price}</p>

                    </div>
                    ))}
                    </Card>                
            ) }         
        </div>
      </main>
    );
};

export default Menu;