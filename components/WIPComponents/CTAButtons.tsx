import styled from '@emotion/styled'
import Button from '@mui/material/Button';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import { headshakeAnimation, jelloAnimation } from '../../styles/AnimationsStyled';

export const CTAButtons = ({ isSoldOut }: Record<string, boolean>) => {
    return (
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
    )
  }

  const CTAButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
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

