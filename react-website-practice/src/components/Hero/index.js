import React,{ useState } from 'react'; 
import video from '/home/steve/react-website-practice/src/components/videos/video.mp4'; 
import { Button } from '../ButtonElement';
import { 
    HeroContainer, 
    HeroBg, 
    VideoBg, 
    HeroContent, 
    HeroH1, 
    HeroP, 
    HeroBtnWrapper, 
    ArrowFoward, 
    ArrowRight

 } from './HeroElements'; 

const Hero = () => {
  const [hover, setHover] = useState(false); 

  const onHover = () => {
      setHover(!hover)
  }

  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={video} type='Video/Mp4'/> 
        </HeroBg>
        <HeroContent>
            <HeroH1>Your trusted solutions provider</HeroH1> 
            <HeroP>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?
            </HeroP>
            <HeroBtnWrapper>
                <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}>
                    Get started {hover ? <ArrowFoward /> : <ArrowRight />}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default Hero