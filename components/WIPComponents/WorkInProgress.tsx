import { useQuery } from 'react-query';
import { teal, red, deepPurple } from '@mui/material/colors';
import styled from '@emotion/styled'
import CelebrationTwoToneIcon from '@mui/icons-material/CelebrationTwoTone';
import { Typography } from '@mui/material';
import Menu from '../Menu';
import { APP_CONSTANTS } from '../../app/constants';
import OfferItemCard from './OfferItemCard';
import { pluralize } from '../../app/utils/format';
import { CTAButtons } from './CTAButtons';

const HeaderBgStyles = 
{
  backgroundColor: deepPurple[100], borderRadius: 3, marginTop: 1, padding: '8px 2px'
}
const WorkInProgress = () => {
  const { data: offerItems } = useQuery('getOfferItems', async () => {
    const res = await fetch(`${process.env.HOST}/api/offer-items`)
    return res.json()
  })
  const numberOfCupsLeft = offerItems ? offerItems[0]?.cupsLeft : 0
  const cupsLeftText = `Only ${pluralize(numberOfCupsLeft, 'cup')} left!`


    const { OFFER_INFO } = APP_CONSTANTS
    const isOfferActive = OFFER_INFO.OFFER_ACTIVE
    const isSoldOut = OFFER_INFO.OFFER_SOLD_OUT || numberOfCupsLeft <= 0
    const fontColor = deepPurple[900]
    const attentionFontColor = isSoldOut ? red[500] : fontColor
    return (
        <WIPContainer>
        <Typography
          component="h1"
          variant="h4"
          align="center"
          color={fontColor}
          sx={HeaderBgStyles}
          gutterBottom
        >
          <CelebrationTwoToneIcon fontSize="large"/>
          &nbsp; {APP_CONSTANTS.HEADER_TITLE}  &nbsp;
          <CelebrationTwoToneIcon fontSize="large"/>

        </Typography>
        <Typography variant="h6" align="center" color={attentionFontColor}  component="p" gutterBottom>
          {isSoldOut ? APP_CONSTANTS.SOLDOUT_DESCRIPTION : APP_CONSTANTS.WIP_DESCRIPTION}          
        </Typography>

        <CTAButtons isSoldOut={isSoldOut} />
        {isOfferActive ? <OfferItemCard isSoldOut={isSoldOut} cupsLeftText={cupsLeftText} fontColor={fontColor}/> : <Menu />}     
        </WIPContainer>
    );
};


const WIPContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 5%;
`


export default WorkInProgress;

