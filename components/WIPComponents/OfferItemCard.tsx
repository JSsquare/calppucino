import { Card, CardHeader, Divider, Grid, Typography } from '@mui/material';
import { red, grey } from '@mui/material/colors';
import { styled } from '@mui/system';
import { APP_CONSTANTS } from '../../app/constants';

type Props = {
  isSoldOut: boolean
  cupsLeftText: string
  fontColor: string
}
const OfferItemCard = ({ isSoldOut, cupsLeftText }: Props) => {  
  const { OFFER_INFO } = APP_CONSTANTS
  
return (
        <CardWrapper id="offer-item-card-wrapper">
        <a href="sms:+19176791655" id="offer-item-card-link">
            <Grid container alignItems="center" id="offer-item-card-item">  
              <Grid item xs>
                <CardHeader title={OFFER_INFO.OFFER_ITEM}/>
              </Grid>

              <Grid item>
              <Grid   
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              gap={1}>
                <Typography 
                    variant="subtitle1" 
                    component="p"
                >
                        {OFFER_INFO.OFFER_SALE_PRICE}
                </Typography>            
                <Typography 
                    variant="subtitle1" 
                    component="p"
                    color={grey[600]}
                    sx={{textDecoration: 'line-through'}}>
                        {OFFER_INFO.OFFER_REG_PRICE}
                </Typography>
              </Grid>
                <Typography 
                    variant="subtitle2" 
                    component="p"
                    color={red[700]}>
                      {isSoldOut ? 'Sorry! SOLD OUT' : cupsLeftText} &nbsp;
                </Typography> 
              </Grid>
            </Grid>
            <Divider />
            <Typography
                variant="body2" 
                color="text.secondary" 
                component="div"
                sx={{marginTop: '8px'}}>
                {OFFER_INFO.OFFER_ITEM_DESCRIPTION}<br/>  Order now!
            </Typography>
            </a>
        </CardWrapper>
    );
};

export default OfferItemCard;



const CardWrapper = styled(Card)`
  position: relative;
  margin-top: 8px;
  padding: 0 1rem 3rem 1rem;
  border-radius: 8px;
  min-height: 100px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  cursor: pointer;
  &:hover {    
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
`