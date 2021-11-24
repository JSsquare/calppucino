import { Card, CardHeader, Divider, Grid, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import { styled } from '@mui/system';
import { APP_CONSTANTS } from '../../app/constants';

const OfferItemCard = () => {
  const { OFFER_INFO } = APP_CONSTANTS
return (
        <CardWrapper>
        <a href="sms:+19176791655">
            <Grid container alignItems="center">  
            <Grid item xs>
            <CardHeader title={OFFER_INFO.ITEM} />
            </Grid>
            <Grid item>
            <Typography 
                variant="subtitle1" 
                component="p"
                sx={{textDecoration: 'line-through'}}>
                    {OFFER_INFO.REG_PRICE}
            </Typography>

            <Typography 
                variant="subtitle2" 
                component="p"
                color={red[700]}
                >{OFFER_INFO.SALE_PRICE} &nbsp;</Typography> 
            </Grid>
            </Grid>
            <Divider />
            <Typography
                variant="body2" 
                color="text.secondary" 
                component="div">
                {OFFER_INFO.ITEM_DESC}<br/>  Order now!
            </Typography>
            </a>
        </CardWrapper>
    );
};

export default OfferItemCard;



const CardWrapper = styled(Card)`
  position: relative;
  margin-top: 32px;
  padding: 0 1rem 3rem 1rem;
  border-radius: 8px;  
  min-height: 100px;
  &:hover {
    cursor: pointer;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
`