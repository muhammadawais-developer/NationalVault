import React, {useState} from 'react';
import Video from '../../videos/bgvid.mp4';
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroBtnWrapper, HeroH1, HeroP, ArrowForward, ArrowRight} from './HeroElements';
import {Button} from '../ButtonElements';
const HeroSection = () => {
    const [hover, SetHover] = useState(false);
    const onHover = () => {
        SetHover(!hover);
    }

  return (
    <HeroContainer id='home'>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
            <HeroH1>Virtual Banking Made Easy</HeroH1>
            <HeroP>Acces to your savings and transactions one touch away.</HeroP>
            <HeroBtnWrapper to = '/signup'>
                <Button 
                onMouseEnter={onHover} 
                onMouseLeave={onHover}
                primary = 'true'
                dark = 'true'
                >
                    Get Started  {hover ? <ArrowForward/> : <ArrowRight/>}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection