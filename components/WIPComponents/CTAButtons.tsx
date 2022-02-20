import { useRef } from 'react';
import { isMobile } from 'react-device-detect';
import styled from '@emotion/styled'
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import LocalCafeTwoToneIcon from '@mui/icons-material/LocalCafeTwoTone';
import { headshakeAnimation, jelloAnimation } from '../../styles/AnimationsStyled';
import { teal } from '@mui/material/colors';

export const CTAButtons = ({ isSoldOut }: Record<string, boolean>) => {
    const phNumberRef = useRef(null);
    return (
        <>
        {!isMobile ? 
           (<DesktopViewButtonWrapper>
            <HeadShakeAnimationWrapper >
            <Button 
              variant="outlined"
              color="error"
              href="https://forms.gle/hBTZw5r3qz9ZXsEE8" 
              disabled={isSoldOut}
              target="_blank"
              id='offer-button_order-form'
              style={{ alignSelf: 'center' }}>
              <LocalCafeTwoToneIcon /> Order My Cup
            </Button>
            </HeadShakeAnimationWrapper>  
        </DesktopViewButtonWrapper>) : (
        <>
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
<MobileViewButtonWrapper>             
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
</MobileViewButtonWrapper>
</>
        )
        }
      </>
    )
  }

  const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 16px;    
  gap: 16px;
    gap: 16px;    
  `
  const MobileViewButtonWrapper = styled(ButtonWrapper)``
  const DesktopViewButtonWrapper = styled(ButtonWrapper)`
    margin: 8px;
  `

  const JelloAnimationsWrapper = styled.div`
    animation-duration: .7s;
    animation-delay: 1.5s;
    animation-iteration-count: 2;
    animation-name: ${jelloAnimation};
    transform-origin: center;
    align-self: center;
`

// Figure out a way to pass this a prop to the styled emotion component
const buttonHandshakeAnimationDelay = isMobile ? `3.5s` : `1.5s`;

const HeadShakeAnimationWrapper = styled.div`
  animation-duration: .7s;
  animation-delay: ${buttonHandshakeAnimationDelay};
  animation-iteration-count: 2;
  animation-name: ${headshakeAnimation};
  transform-origin: center;
  align-self: center;
`

