import { useQuery } from 'react-query';
import { teal, red } from '@mui/material/colors';
import styled from '@emotion/styled'
import CelebrationTwoToneIcon from '@mui/icons-material/CelebrationTwoTone';
import { Typography } from '@mui/material';
import Menu from '../Menu';
import { APP_CONSTANTS } from '../../app/constants';
import OfferItemCard from './OfferItemCard';
import { pluralize } from '../../app/utils/format';
import { CTAButtons } from './CTAButtons';
import { useRef } from 'react';

const WorkInProgress = () => {
  const { data: offerItems } = useQuery('getOfferItems', async () => {
    const res = await fetch(`${process.env.HOST}/api/offer-items`)
    return res.json()    
  })
  const numberOfCupsLeft = offerItems ? offerItems[0]?.cupsLeft : 0
  const cupsLeftText = `Only ${pluralize(numberOfCupsLeft, 'cup')} left!`


    const { OFFER_INFO } = APP_CONSTANTS
    const isOfferActive = OFFER_INFO.OFFER_ACTIVE
    const isSoldOut = OFFER_INFO.SOLD_OUT || numberOfCupsLeft <= 0
    const phNumberRef = useRef(null);

    return (
        <WIPContainer>
        <Typography
          component="h1"
          variant="h4"
          align="center"
          color={teal[700]}
          gutterBottom
        >
          <CelebrationTwoToneIcon fontSize="large"/>
          &nbsp; {APP_CONSTANTS.HEADER_TITLE}  &nbsp;
          <CelebrationTwoToneIcon fontSize="large"/>

        </Typography>
        <Typography variant="h6" align="center" color={isSoldOut ? red[500] : teal[700]}  component="p" gutterBottom>
          {isSoldOut ? APP_CONSTANTS.SOLDOUT_DESCRIPTION : APP_CONSTANTS.WIP_DESCRIPTION}          
        </Typography>

        {!isSoldOut && (<Typography 
            variant="subtitle1" 
            align="center" 
            color={teal[700]} 
            component="p"            
            sx={{ marginTop: 2}}
            ref={phNumberRef}
        >
          +1-917-679-1655
        </Typography>)}
        <CTAButtons isSoldOut={isSoldOut} />
        {isOfferActive ? <OfferItemCard isSoldOut={isSoldOut} cupsLeftText={cupsLeftText} /> : <Menu />}     
        </WIPContainer>
    );
};


const WIPContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 5%;
`


export default WorkInProgress;

