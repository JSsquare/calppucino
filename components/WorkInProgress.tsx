import { forwardRef, useRef, useState } from 'react';
import styled from '@emotion/styled'
import Button from '@mui/material/Button';
import ConstructionIcon from '@mui/icons-material/Construction';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { Typography } from '@mui/material';
import { jelloAnimation } from '../styles/AnimationsStyled';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const WorkInProgress = () => {
    const [phNumberCopied, setPhNumberCopied] = useState('')
    const isNumberCopied = Boolean(phNumberCopied)
    const phNumberRef = useRef(null);

    const copyPhoneNumber = () => {
        navigator.clipboard.writeText('917-679-1655')
        setPhNumberCopied('Contact Number Copied')
    }

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
          variant="h3"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Website is work-in-progress
          <ConstructionIcon fontSize="large"/>
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p" gutterBottom>
          Call or text now! <br/> Pick-up your 0.99<sup><Typography variant="caption">$</Typography></sup> coffee tomorrow in Albany
        </Typography>

        <Typography 
            variant="h6" 
            align="center" 
            color="text.primary" 
            component="p" 
            sx={{ marginTop: 5}}
            ref={phNumberRef}
        >
          +1-917-679-1655 
        </Typography> 
        <CTAButtonWrapper>
        <JelloAnimationsWrapper>
          <Button variant="contained" href="tel:9176791655" style={{ alignSelf: 'center' }}>
            Call <WifiCalling3Icon />
          </Button>
          </JelloAnimationsWrapper>             
         <Button variant="contained" onClick={copyPhoneNumber} style={{ alignSelf: 'center' }}
           disabled={isNumberCopied}>
            {!isNumberCopied && <ContentCopyIcon/>}
            {isNumberCopied ? 'Copied!' : 'Copy number'}            
          </Button>
          </CTAButtonWrapper>   

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
    margin-top: 10%;
`
const JelloAnimationsWrapper = styled.div`
    animation-duration: .7s;
    animation-delay: 2s;
    animation-iteration-count: 2;
    animation-name: ${jelloAnimation};
    transform-origin: center;
    align-self: center;
`

export default WorkInProgress;


const Alert: any = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref as any} variant="filled" {...props} />;
});
