import styled from '@emotion/styled'
import Button from '@mui/material/Button';
import ConstructionIcon from '@mui/icons-material/Construction';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import { Typography } from '@mui/material';
import { jelloAnimation } from '../styles/AnimationsStyled';

const WorkInProgress = () => {
    return (
        <WIPContainer>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Website is Work In Progress
          <ConstructionIcon fontSize="large"/>
        </Typography>
        <Typography variant="h4" align="center" color="text.secondary" component="p" gutterBottom>
          Call or Text now & pick-up your coffee tomorrow
        </Typography>

        <Typography variant="h6" align="center" color="text.primary" component="p">
          +1-917-679-1655 
          <JelloAnimationsWrapper>
          <Button variant="contained" href="tel:9176791655" style={{marginLeft: 10, marginTop: 30}}>
            Call <WifiCalling3Icon />
          </Button>
          </JelloAnimationsWrapper> 
        </Typography> 
                  
        </WIPContainer>
    );
};

const WIPContainer = styled.div`
    margin-top: 10%;
`
const JelloAnimationsWrapper = styled.div`
    animation-duration: .7s;
    animation-delay: 1.5s;
    animation-name: ${jelloAnimation};
    transform-origin: center;
`

export default WorkInProgress;

