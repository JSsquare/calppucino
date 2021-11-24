import { forwardRef, useRef, useState } from 'react';
import { teal } from '@mui/material/colors';
import styled from '@emotion/styled'
import Button from '@mui/material/Button';
import CelebrationTwoToneIcon from '@mui/icons-material/CelebrationTwoTone';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import { Card, CardHeader, Divider, Grid, Typography } from '@mui/material';
import { headshakeAnimation, jelloAnimation } from '../styles/AnimationsStyled';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Menu from './Menu';
import { APP_CONSTANTS } from '../app/constants';
import OfferItemCard from './WIPComponents/OfferItemCard';

const WorkInProgress = () => {
    const { OFFER_INFO } = APP_CONSTANTS
    const [phNumberCopied, setPhNumberCopied] = useState('')
    const isNumberCopied = Boolean(phNumberCopied)
    const phNumberRef = useRef(null);

    /* can use this method to add a copy phone number button
    const copyPhoneNumber = () => {
        navigator.clipboard.writeText('917-679-1655')
        setPhNumberCopied('Contact Number Copied')
    } */

    const handleCloseSnackBar = (event: any, reason: any) => {
        if (reason === 'clickaway') {
          return;
        }
        setPhNumberCopied('');
      };

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
        <Typography variant="h6" align="center" color={teal[700]}  component="p" gutterBottom>
          {APP_CONSTANTS.WIP_DESCRIPTION}          
        </Typography>

        <Typography 
            variant="subtitle1" 
            align="center" 
            color={teal[700]} 
            component="p"            
            sx={{ marginTop: 2}}
            ref={phNumberRef}
        >
          +1-917-679-1655 
        </Typography> 
        <CTAButtonWrapper>
        <JelloAnimationsWrapper>
          <Button 
            variant="outlined"
            color="error"
            href="tel:9176791655"          
            style={{ alignSelf: 'center' }}>
            Call us <WifiCalling3Icon />
          </Button>
          </JelloAnimationsWrapper>
        <HeadShakeAnimationWrapper>  
        <Button 
          variant="outlined"
          color="error"
          href="sms://+19176791655?body:Hi%2C%20Please%20place%201%20order%20of%20Free%20coffee%20at%20UC%20Village.%20My%20name%20is%20"
          style={{ alignSelf: 'center' }}>
                  Text us <TextsmsOutlinedIcon />
        </Button>
        </HeadShakeAnimationWrapper>
        </CTAButtonWrapper>
        {OFFER_INFO.ACTIVE ? <OfferItemCard /> : <Menu />}        

      <Snackbar open={isNumberCopied} autoHideDuration={6000} onClose={handleCloseSnackBar as any}>
        <Alert onClose={handleCloseSnackBar} severity="success" sx={{ width: '100%' }}>
          Copied! Text to pick-up your 99c coffee now!
        </Alert>
      </Snackbar>               
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
