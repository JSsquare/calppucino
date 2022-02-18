import { forwardRef, useRef } from 'react';
import { teal, red } from '@mui/material/colors';
import styled from '@emotion/styled'
import Button from '@mui/material/Button';
import CelebrationTwoToneIcon from '@mui/icons-material/CelebrationTwoTone';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import { Typography } from '@mui/material';
import { headshakeAnimation, jelloAnimation } from '../styles/AnimationsStyled';
import MuiAlert from '@mui/material/Alert';
import Menu from './Menu';
import { APP_CONSTANTS } from '../app/constants';
import OfferItemCard from './WIPComponents/OfferItemCard';

const WorkInProgress = () => {
    const { OFFER_INFO } = APP_CONSTANTS
    const isOfferActive = OFFER_INFO.OFFER_ACTIVE
    const isSoldOut = OFFER_INFO.SOLD_OUT
    const phNumberRef = useRef(null);
    
    /* can use this method to add a copy phone number button
    const isNumberCopied = Boolean(phNumberCopied)
    const [phNumberCopied, setPhNumberCopied] = useState('')
    const copyPhoneNumber = () => {
        navigator.clipboard.writeText('917-679-1655')
        setPhNumberCopied('Contact Number Copied')
    }

    const handleCloseSnackBar = (event: any, reason: any) => {
        if (reason === 'clickaway') {
          return;
        }
        setPhNumberCopied('');
      }; */

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
        <CTAButtonWrapper>
        <JelloAnimationsWrapper>
          <Button 
            variant="outlined"
            color="error"
            href="tel:9176791655" 
            disabled={isSoldOut}
            id='offer-button_call-us'       
            style={{ alignSelf: 'center' }}>
            Call us <WifiCalling3Icon />
          </Button>
          </JelloAnimationsWrapper>
        <HeadShakeAnimationWrapper>  
        <Button 
          variant="outlined"
          color="error"
          disabled={isSoldOut}
          href="sms:+19176791655?body=Hi%20I%20would%20like%20to%20place%20an%20order%20for%20a%20coffee.%20My%20name%20is%20"
          id="offer-button_text-us"
          style={{ alignSelf: 'center' }}>
                  Text us <TextsmsOutlinedIcon />
        </Button>
        </HeadShakeAnimationWrapper>
        </CTAButtonWrapper>
        {isOfferActive ? <OfferItemCard /> : <Menu />}        

      {/* Snackbar is used to show the phone number is copied succesfully */}
      {/* <Snackbar open={isNumberCopied} autoHideDuration={6000} onClose={handleCloseSnackBar as any}>
        <Alert onClose={handleCloseSnackBar} severity="success" sx={{ width: '100%' }}>
          Copied! Text to pick-up your 99c coffee now!
        </Alert>
      </Snackbar>                */}
        </WIPContainer>
    );
};

const CTAButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 16px;
`

const WIPContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 5%;
`
const JelloAnimationsWrapper = styled.div`
    animation-duration: .7s;
    animation-delay: 1.5s;
    animation-iteration-count: 2;
    animation-name: ${jelloAnimation};
    transform-origin: center;
    align-self: center;
`

const HeadShakeAnimationWrapper = styled.div`
  animation-duration: .7s;
  animation-delay: 3.5s;
  animation-iteration-count: 2;
  animation-name: ${headshakeAnimation};
  transform-origin: center;
  align-self: center;
`

export default WorkInProgress;


const Alert: any = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref as any} variant="filled" {...props} />;
});
