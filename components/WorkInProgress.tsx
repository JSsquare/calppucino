import { forwardRef, useRef, useState } from 'react';
import styled from '@emotion/styled'
import Button from '@mui/material/Button';
import HourglassEmptyTwoToneIcon from '@mui/icons-material/HourglassEmptyTwoTone';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import { Typography } from '@mui/material';
import { headshakeAnimation, jelloAnimation } from '../styles/AnimationsStyled';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Menu from './Menu';

const WorkInProgress = () => {
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
          color="text.primary"
          gutterBottom
        >
          Website to launch soon...  &nbsp;
          <HourglassEmptyTwoToneIcon fontSize="large"/>
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" component="p" gutterBottom>
          Meanwhile please call text to <br/> order your 0.99<sup><Typography variant="caption">$</Typography></sup> coffee tomorrow from UC Village
        </Typography>

        <Typography 
            variant="h6" 
            align="center" 
            color="text.primary" 
            component="p" 
            sx={{ marginTop: 2}}
            ref={phNumberRef}
        >
          +1-917-679-1655 
        </Typography> 
        <CTAButtonWrapper>
        <JelloAnimationsWrapper>
          <Button variant="contained" href="tel:9176791655" style={{ alignSelf: 'center' }}>
            Call us <WifiCalling3Icon />
          </Button>
          </JelloAnimationsWrapper>
        <HeadShakeAnimationWrapper>  
        <Button variant="contained" 
                href="sms:+19176791655"
                style={{ alignSelf: 'center' }}>
                  Text us <TextsmsOutlinedIcon />
        </Button>
        </HeadShakeAnimationWrapper>
        </CTAButtonWrapper>
        <Menu />

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
