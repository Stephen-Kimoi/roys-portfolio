import React from 'react'; 
import icon1 from '../images/svg-4.svg'; 
import icon2 from '../images/svg-5.svg'; 
import icon3 from '../images/svg-6.svg'; 
import { 
  ServicesContainer,
  ServicesH1, 
  ServicesH2, 
  ServicesWrapper, 
  ServicesIcon, 
  ServicesP,   
  ServicesCard, 
} from './ServicesElements'; 


const Services = () => {
  return (
    <>
      <ServicesContainer id="services">

          <ServicesH1>My services</ServicesH1> 

          <ServicesWrapper>

            <ServicesCard>
              <ServicesIcon src={icon1}></ServicesIcon> 
              <ServicesH2>Reduce expenses</ServicesH2>
              <ServicesP>WE helpp aoinokn kajnefijn adok kjnf appok unrij ijoko ni</ServicesP> 
            </ServicesCard>

            <ServicesCard>
              <ServicesIcon src={icon2}></ServicesIcon> 
              <ServicesH2>Virtual offices</ServicesH2>
              <ServicesP>WE helpp aoinokn kajnefijn adok kjnf appok unrij ijoko ni</ServicesP> 
            </ServicesCard>

            <ServicesCard>
              <ServicesIcon src={icon3}></ServicesIcon> 
              <ServicesH2>Phyisical offices</ServicesH2>
              <ServicesP>WE helpp aoinokn kajnefijn adok kjnf appok unrij ijoko ni</ServicesP> 
            </ServicesCard>

          </ServicesWrapper>

      </ServicesContainer>
    </>
  )
}

export default Services